import Main from "@/components/main";
import Myself from "@/components/myself";
import Skills from "@/components/skills";
import Social from "@/components/social";

export default function Home() {
  return (
    <div className="mt-20 flex">
      <div className="">
        <Social />
      </div>
      <div className="flex flex-col gap-12 pl-10 flex-1">
        <Main />
        <Myself />
        <Skills />
      </div>
    </div>
  );
}
