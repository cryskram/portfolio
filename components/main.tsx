import Image from "next/image";
import { BsDot } from "react-icons/bs";

const Main = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <div>
          <Image
            className="rounded-full border-2 border-mWhite drop-shadow-custom"
            src="/pfp.png"
            width={200}
            height={200}
            alt="pfp"
          />
        </div>
        <div>
          <h1 className="font-semibold text-7xl">Vageesh</h1>
          <div className="flex items-center text-xl bg-clip-text bg-gradient-to-r text-transparent from-blue-500 to-fuchsia-400 justify-center text-slate-400 mt-2">
            <p>Web</p>
            <BsDot className="text-mWhite" />
            <p>Mobile</p>
            <BsDot className="text-mWhite" />
            <p>Software</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
