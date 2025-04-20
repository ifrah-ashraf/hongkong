"use client";
import axios from "axios"
import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { FileAudio, Upload, X } from "lucide-react";
import { motion } from "framer-motion";
import { headers } from "next/headers";

export default function AudioUploader() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [pdfurl, setPdfUrl] = useState("")
  const [isPdf, setIsPdf] = useState(false)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type.includes("audio")) {
      setFile(droppedFile);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setIsUploading(true);

    const formData = new FormData()
    formData.append("file", file);
    console.log("url",process.env.NEXT_PUBLIC_BACKEND_URL)
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/upload-audio/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            if (progressEvent.total) {
              const percent = Math.round(progressEvent.loaded * 100) / progressEvent.total
              setProgress(percent);
            }
          }
        }
      )

      setProgress(100);

      if (res.data) {
        const { transcription, summary, download_url } = res.data;
        console.log("Transcription:", transcription);
        console.log("Summary:", summary);
        console.log("Download URL:", download_url);

        setIsPdf(true);
        setPdfUrl(download_url)

      }
      console.log(res.data)

      setTimeout(() => {
        setIsUploading(false);
      }, 2000);
    } catch (error) {
      console.error(error);
      setIsUploading(false)
    }

  };

  const removeFile = () => {
    setFile(null);
    setProgress(0);
    setIsUploading(false);
  };

  const handlePdfDownload = async ()  => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/download-summary?pdf_filename=${pdfurl}`, {
      responseType: 'blob'
    })
    if (!res.data) {
      alert("Failed to download PDF");
      return;
    }

    const blob = await res.data
    const url = window.URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = pdfurl
    document.body.appendChild(a)
    a.click()
    a.remove()
  }

  return (
    <div className="w-full">
      {!file ? (
        <div
          className={`relative rounded-lg border-2 border-dashed p-6 transition-all ${isDragging
            ? "border-teal-500 bg-teal-50"
            : "border-slate-200 hover:border-teal-300"
            }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            type="file"
            id="audio-file"
            className="sr-only"
            accept="audio/*"
            onChange={handleFileChange}
          />
          <div className="flex flex-col items-center justify-center space-y-4 py-4">
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: isDragging ? 1.05 : 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div className="rounded-full bg-teal-50 p-3">
                <FileAudio className="h-8 w-8 text-teal-500" />
              </div>
            </motion.div>
            <div className="text-center">
              <p className="text-sm font-medium">
                <span className="text-teal-600">Click to upload</span> or drag
                and drop
              </p>
              <p className="mt-1 text-xs text-slate-500">
                MP3, WAV, M4A up to 500MB
              </p>
            </div>
            <Button
              variant="outline"
              className="border-teal-500 text-teal-600 hover:bg-teal-50"
              onClick={() => document.getElementById("audio-file")?.click()}
            >
              <Upload className="mr-2 h-4 w-4" />
              Select Audio File
            </Button>
          </div>
        </div>
      ) : (
        <div className="rounded-lg border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="rounded-full bg-teal-50 p-2">
                <FileAudio className="h-5 w-5 text-teal-500" />
              </div>
              <div className="max-w-[180px] overflow-hidden text-sm">
                <p className="truncate font-medium">{file.name}</p>
                <p className="text-xs text-slate-500">
                  {(file.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
            </div>
            {!isUploading && (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-slate-500 hover:text-slate-900"
                onClick={removeFile}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Remove file</span>
              </Button>
            )}
          </div>

          {isUploading ? (
            <div className="mt-4 space-y-2">
              <Progress
                value={progress}
                className="h-2 bg-slate-100"
                indicatorClassName="bg-gradient-to-r from-teal-500 to-emerald-500"
              />
              <p className="text-right text-xs text-slate-500">
                {progress}% uploaded
              </p>
            </div>
          ) : isPdf ? (
            <Button
              className="mt-4 w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white"
              onClick={handlePdfDownload}
            >
              Download PDF
            </Button>
          ) : (
            <Button
              className="mt-4 w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white"
              onClick={handleUpload}
            >
              Transcribe Now
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
