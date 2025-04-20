"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FileAudio,
  FileText,
  Share2,
  Download,
  ArrowRight,
  Sparkles,
  AudioWaveformIcon as Waveform,
} from "lucide-react";
import Link from "next/link";
import AudioUploader from "@/app/Components/audio-uploader";
import FeatureCard from "@/app/Components/feature-card";
import ProcessingLoader from "@/app/Components/processing-loader";
export default function Home() {
  return (
    <div className="min-h-screen w-full px-4 md:px-8 lg:px-16 mx-auto max-w-7xl">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Waveform className="h-6 w-6 text-teal-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">
              VoiceScript
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#features"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-teal-600"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-teal-600"
            >
              How It Works
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-teal-600"
            >
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/signin">
              {" "}
              <Button
                variant="outline"
                className="hidden sm:flex border-teal-500 text-teal-600 hover:bg-teal-50"
              >
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-20 md:py-32">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-full bg-teal-50 px-3 py-1 text-sm text-teal-600">
              AI-Powered Transcription
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Transform{" "}
              <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">
                Voice to Text
              </span>{" "}
              Effortlessly
            </h1>
            <p className="text-xl text-slate-600">
              Upload your audio files and get accurate transcriptions with
              AI-powered summaries in seconds. Download or share your results
              with just a click.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white"
              >
                Try For Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-teal-500 text-teal-600 hover:bg-teal-50"
              >
                See How It Works
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-teal-200 to-emerald-200 opacity-50 blur-xl"></div>
            <Card className="relative bg-white border border-slate-200 overflow-hidden shadow-lg">
              <CardContent className="p-6">
                <AudioUploader />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Processing Demo Section */}
      <section className="container py-12">
        <Card className="overflow-hidden border-slate-200">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2">
              <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-8 flex items-center justify-center">
                <ProcessingLoader />
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold">Real-time Processing</h3>
                <p className="text-slate-600">
                  Our advanced AI model works in real-time to convert your audio
                  to text with exceptional accuracy. Watch as your audio
                  transforms into editable, downloadable text right before your
                  eyes.
                </p>
                <div className="flex gap-4 mt-6">
                  <Button className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white">
                    <Download className="mr-2 h-4 w-4" />
                    Download Text
                  </Button>
                  <Button
                    variant="outline"
                    className="border-teal-500 text-teal-600 hover:bg-teal-50"
                  >
                    <Share2 className="mr-2 h-4 w-4" />
                    Share Results
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Features Section */}
      <section id="features" className="container py-20 md:py-32">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full bg-teal-50 px-3 py-1 text-sm text-teal-600 mb-4">
            Powerful Features
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Everything You Need for{" "}
            <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">
              Audio Transcription
            </span>
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            Our advanced AI technology provides accurate transcriptions and
            insightful summaries
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<FileAudio className="h-10 w-10 text-teal-500" />}
            title="Accurate Transcription"
            description="State-of-the-art speech recognition technology that works with multiple accents and languages"
          />
          <FeatureCard
            icon={<Sparkles className="h-10 w-10 text-emerald-500" />}
            title="AI Summarization"
            description="Get concise summaries of your transcriptions, highlighting the key points and insights"
          />
          <FeatureCard
            icon={<Download className="h-10 w-10 text-teal-500" />}
            title="Easy Export"
            description="Download your transcriptions and summaries in multiple formats including TXT, PDF, and DOCX"
          />
          <FeatureCard
            icon={<Share2 className="h-10 w-10 text-emerald-500" />}
            title="Instant Sharing"
            description="Share your results directly via email, link, or to popular cloud storage services"
          />
          <FeatureCard
            icon={<FileText className="h-10 w-10 text-teal-500" />}
            title="Text Editing"
            description="Edit your transcriptions directly in the browser before downloading or sharing"
          />
          <FeatureCard
            icon={<Sparkles className="h-10 w-10 text-emerald-500" />}
            title="Custom Formatting"
            description="Customize the format and style of your transcriptions and summaries to suit your needs"
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="bg-gradient-to-br from-teal-50 to-emerald-50 py-20 md:py-32"
      >
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block rounded-full bg-white px-3 py-1 text-sm text-teal-600 mb-4">
              Simple Process
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              How It{" "}
              <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
              Three simple steps to transform your audio into actionable text
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-teal-400 to-emerald-400 md:block hidden"></div>

            <div className="grid gap-12 md:gap-24">
              <div className="relative grid gap-6 md:grid-cols-2 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <h3 className="text-2xl font-bold text-teal-700">
                    Upload Your Audio
                  </h3>
                  <p className="mt-2 text-slate-600">
                    Drag and drop your audio file or select from your device. We
                    support MP3, WAV, M4A, and more formats.
                  </p>
                </div>
                <div className="relative order-1 md:order-2">
                  <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-teal-200 to-emerald-200 opacity-50 blur-xl"></div>
                  <Card className="relative bg-white border border-slate-200 shadow-md">
                    <CardContent className="p-6 flex items-center justify-center">
                      <div className="h-48 w-full flex items-center justify-center">
                        <FileAudio className="h-16 w-16 text-teal-500" />
                      </div>
                    </CardContent>
                  </Card>
                  <div className="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white md:left-0 md:-translate-x-1/2">
                    1
                  </div>
                </div>
              </div>

              <div className="relative grid gap-6 md:grid-cols-2 items-center">
                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-teal-200 to-emerald-200 opacity-50 blur-xl"></div>
                  <Card className="relative bg-white border border-slate-200 shadow-md">
                    <CardContent className="p-6 flex items-center justify-center">
                      <div className="h-48 w-full flex items-center justify-center">
                        <ProcessingLoader size="lg" />
                      </div>
                    </CardContent>
                  </Card>
                  <div className="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white md:left-auto md:right-0 md:translate-x-1/2">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-teal-700">
                    AI Processing
                  </h3>
                  <p className="mt-2 text-slate-600">
                    Our AI analyzes your audio, transcribes it with high
                    accuracy, and generates a concise summary of the content.
                  </p>
                </div>
              </div>

              <div className="relative grid gap-6 md:grid-cols-2 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <h3 className="text-2xl font-bold text-teal-700">
                    Review and Download
                  </h3>
                  <p className="mt-2 text-slate-600">
                    View your transcription and summary, make any necessary
                    edits, then download or share your results.
                  </p>
                </div>
                <div className="relative order-1 md:order-2">
                  <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-teal-200 to-emerald-200 opacity-50 blur-xl"></div>
                  <Card className="relative bg-white border border-slate-200 shadow-md">
                    <CardContent className="p-6">
                      <Tabs defaultValue="transcript" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 bg-slate-100">
                          <TabsTrigger value="transcript">
                            Transcript
                          </TabsTrigger>
                          <TabsTrigger value="summary">Summary</TabsTrigger>
                        </TabsList>
                        <TabsContent value="transcript" className="h-32 mt-4">
                          <div className="space-y-2">
                            <div className="h-2 bg-slate-200 rounded-full w-full"></div>
                            <div className="h-2 bg-slate-200 rounded-full w-5/6"></div>
                            <div className="h-2 bg-slate-200 rounded-full w-4/5"></div>
                          </div>
                          <div className="mt-4 flex justify-end">
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white"
                            >
                              <Download className="mr-2 h-3 w-3" />
                              Download
                            </Button>
                          </div>
                        </TabsContent>
                        <TabsContent value="summary" className="h-32 mt-4">
                          <div className="space-y-2">
                            <div className="h-2 bg-slate-200 rounded-full w-3/4"></div>
                            <div className="h-2 bg-slate-200 rounded-full w-1/2"></div>
                          </div>
                          <div className="mt-4 flex justify-end">
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white"
                            >
                              <Download className="mr-2 h-3 w-3" />
                              Download
                            </Button>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                  <div className="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white md:left-0 md:-translate-x-1/2">
                    3
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20 md:py-32">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] opacity-10 mix-blend-overlay"></div>
          <div className="relative px-6 py-16 md:px-12 md:py-24 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Ready to Transform Your Audio?
            </h2>
            <p className="mt-4 text-xl text-white/90 max-w-2xl mx-auto">
              Join thousands of professionals who save time with our AI-powered
              audio transcription and summarization.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-teal-600 hover:bg-white/90"
              >
                Get Started For Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <Waveform className="h-6 w-6 text-teal-500" />
                <span className="text-xl font-bold bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">
                  VoiceScript
                </span>
              </div>
              <p className="mt-4 text-sm text-slate-500">
                Transform your audio into text and summaries with our powerful
                AI technology.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-900">Product</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-slate-500 hover:text-teal-600"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-slate-500 hover:text-teal-600"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-slate-500 hover:text-teal-600"
                  >
                    API
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-slate-500 hover:text-teal-600"
                  >
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-900">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-slate-500 hover:text-teal-600"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-slate-500 hover:text-teal-600"
                  >
                    Guides
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-slate-500 hover:text-teal-600"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-slate-500 hover:text-teal-600"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-900">Company</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-slate-500 hover:text-teal-600"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-slate-500 hover:text-teal-600"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-slate-500 hover:text-teal-600"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-slate-500 hover:text-teal-600"
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
            <p>
              © {new Date().getFullYear()} VoiceScript. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
