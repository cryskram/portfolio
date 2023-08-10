import Main from "@/components/main";
import Myself from "@/components/myself";
import Skills from "@/components/skills";
import Social from "@/components/social";

export default function Home() {
  return (
    <div className="mt-20 flex">
      <div>
        <Social />
      </div>
      <div className="flex flex-col gap-12 flex-1 w-full">
        <Main />
        <Myself />
        <Skills />
      </div>
    </div>
  );
}
