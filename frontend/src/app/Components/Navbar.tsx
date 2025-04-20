import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="w-full h-32  bg-black justify-center ">
        <ul className="flex  space-x-4 text-lg font-extrabold justify-center ">
          <li className="mt-28 mb-2">
            <Image
              width={50}
              height={40}
              src="/home1.png"
              alt="logo"
              className="ml-34 rounded-lg"
            ></Image>
          </li>

          <li className="text-white mt-16 -ml-40">Home</li>
          <li className="">
            <Link href="/signup">
              <button className="mr-2 mb-4 rounded-lg  text-white p-1 w-28 mt-16">
                SignUp
              </button>
            </Link>
            <Link href="/signin">
              <button className="mr-2  rounded-lg text-white p-1 w-28 mt-16">
                SignIn
              </button>
            </Link>
          </li>
        </ul>
        <div className="relative w-full bg-black"></div>
      </nav>
    </div>
  );
}

export default Navbar;
