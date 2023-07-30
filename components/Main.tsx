import Image from "next/image";
import { BsDot } from "react-icons/bs";

const Main = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-28">
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
            src="/coding5.svg"
            className="invisible md:visible"
            width={350}
            height={350}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
