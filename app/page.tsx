import ContactMe from "@/components/contactme";
import Main from "@/components/main";
import Myself from "@/components/myself";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Social from "@/components/social";

export default function Home() {
  return (
    // <div className="mt-20 flex">
    //   <div className="">
    //     <Social />
    //   </div>
    //   <div className="flex flex-col gap-12 flex-1">
    //     <Main />
    //     <Myself />
    //     <Skills />
    //   </div>
    // </div>
    <div className="mt-10">
      <div className="flex flex-col gap-12 flex-1">
        <div className="flex items-center justify-between">
          <div>
            <Social />
          </div>
          <div className="flex flex-col flex-1 justify-center">
            <Main />
            <Myself />
          </div>
        </div>
        <div className="m-0 md:ml-8">
          <Skills />
          <Projects />
          <ContactMe />
        </div>
      </div>
    </div>
  );
}
