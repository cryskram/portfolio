import React from "react";
import Social from "./social";
import Link from "next/link";
import { FaDiscord, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactMe = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-col justify-center w-4/5 mx-auto">
        <div className="flex flex-col items-center justify-center mt-8">
          <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-400 font-bold to-white text-center">
            Tell me about your next project
          </h1>
          <button className="bg-gradient-to-r from-blue-500 to-background px-4 py-2 text-xl rounded-xl mt-6 font-semibold">
            Get in Touch
          </button>
          <div className="flex gap-4 mt-6 text-3xl">
            <Link href="https://www.instagram.com/gn_vageesh/">
              <FaInstagram />
            </Link>
            <Link href="https://github.com/cryskram">
              <FaGithub />
            </Link>
            <Link href="https://twitter.com/gn_vageesh">
              <FaTwitter />
            </Link>
            <Link href="https://discord.com/users/924186564215582771">
              <FaDiscord />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
