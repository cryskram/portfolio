import { BsDot } from "react-icons/bs";

export default function Home() {
  return (
    <div className="">
      <div className="flex w-full flex-col items-center">
        {/* <div className="text-6xl drop-shadow-custom bg-clip-text text-transparent bg-gradient-to-r from-gradl via-gradm to-gradr font-semibold flex flex-col"> */}
        <div className="text-6xl drop-shadow-custom font-semibold flex flex-col">
          <h1>Hi,</h1>
          <div className="flex items-center">
            <p>I&apos;m</p>
            <p className="bg-slate-900 text-background p-2 mx-3 rounded-xl text-5xl">
              Vageesh
            </p>
          </div>
        </div>
        <div className="flex text-2xl text-slate-500 items-center gap-1">
          <p>Web</p>
          <BsDot />
          <p>Mobile</p>
          <BsDot />
          <p>Software</p>
        </div>
      </div>
    </div>
  );
}
