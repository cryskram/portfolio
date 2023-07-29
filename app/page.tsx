import Image from "next/image";
import { BsDot } from "react-icons/bs";

export default function Home() {
  return (
    <div className="mt-20">
      <div className="flex items-center justify-center">
        <div className="">
          <div className="font-bold drop-shadow-custom text-6xl">
            <h1>Hi,</h1>
            <p>
              I&apos;m{" "}
              <span className="bg-slate-900 text-background rounded-xl p-2">
                Vageesh
              </span>
            </p>
          </div>
          <div className="flex gap-1 mt-3 text-xl text-slate-600 items-center">
            <p>Web</p>
            <BsDot />
            <p>Mobile</p>
            <BsDot />
            <p>Software</p>
          </div>
        </div>
        <div>
          <Image
            src="/coding3.svg"
            className="w-2/3 mx-auto"
            width={250}
            height={250}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
}
