import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="overflow-x-hidden  overflow-y-visible md:overflow-y-hidden">
      <div className="flex-row w-xl md:flex bg-emerald-50  md:w-5xl h-[600px] md:mt-28 md:ml-52 rounded-3xl ">
        <div className=" ">
          <Image
            width={500}
            height={500}
            className=" hidden md:block md:size-fit rounded-sm -ml-32  md:ml-10 md:mt-28 md:rounded-4xl md:mb-6 md:cover"
            src="/signup.png"
            alt="image"
          ></Image>
        </div>
        <div className=" ml-6 mt-1 md:ml-28 md:mt-28 ">
          <h1 className=" ml-9 font-bold text-2xl underline">
            Create An Account
          </h1>
          <h4 className="mt-12 text-lg">Username</h4>
          <input
            type="text"
            className=" bg-white h-12 w-64 mt-2 border-2 pl-2 rounded-lg"
            placeholder="Username"
          />
          <h4 className="mt-10 text-lg">Password</h4>
          <input
            type="password"
            className=" bg-white h-12 w-64 mt-2 border-2 justify-center pl-2 rounded-lg"
            placeholder="Password"
          />
          <br />
          <button className=" border-teal-500 text-teal-600 hover:bg-teal-50  mt-8 text-lg w-32 rounded-lg h-10 border-2">
            SignUp
          </button>
          <Link href="/signin">
            <h5 className="text-md mt-1">Already have an account?SignIn</h5>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
