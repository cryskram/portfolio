import React from "react";
import SkillCard from "./cards/skills";
import { skillData } from "@/lib/custom.data";

const Skills = () => {
  return (
    <div className="">
      <div className="w-4/5 mx-auto flex flex-col">
        <h1 className="title">#Skills</h1>
        <div className="">
          <div className="flex flex-col mt-2">
            <h1 className="text-2xl">Languages</h1>
            <div className="flex flex-wrap -ml-3">
              {skillData.languages.map((skill) => (
                <div key={skill}>
                  <SkillCard item={skill} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col mt-2">
            <h1 className="text-2xl">Frameworks</h1>
            <div className="flex flex-wrap -ml-3">
              {skillData.frameworks.map((skill) => (
                <div key={skill}>
                  <SkillCard item={skill} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col mt-2">
            <h1 className="text-2xl">Databases</h1>
            <div className="flex flex-wrap -ml-3">
              {skillData.databases.map((skill) => (
                <div key={skill}>
                  <SkillCard item={skill} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col mt-2">
            <h1 className="text-2xl">Tools</h1>
            <div className="flex flex-wrap -ml-3">
              {skillData.tools.map((skill) => (
                <div key={skill}>
                  <SkillCard item={skill} />
                </div>
              ))}
            </div>
          </div>
          {/*<div className="flex items-center gap-4">
            <h1 className="text-2xl">Languages</h1>
            <div className="flex flex-wrap">
              {skillData.languages.map((skill) => (
                <div key={skill}>
                  <SkillCard item={skill} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <h1 className="text-2xl">Frameworks</h1>
            <div className="flex flex-wrap">
              {skillData.frameworks.map((skill) => (
                <div key={skill}>
                  <SkillCard item={skill} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <h1 className="text-2xl">Databases</h1>
            <div className="flex flex-wrap">
              {skillData.databases.map((skill) => (
                <div key={skill}>
                  <SkillCard item={skill} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <h1 className="text-2xl">Tools</h1>
            <div className="flex flex-wrap">
              {skillData.tools.map((skill) => (
                <div key={skill}>
                  <SkillCard item={skill} />
                </div>
              ))}
            </div>
          </div> */}
          {/* <div className="flex flex-wrap">
            {skillData.databases.map((i) => (
              <SkillCard key={i} item={i} />
            ))}
            {skillData.languages.map((i) => (
              <SkillCard key={i} item={i} />
            ))}
            {skillData.tools.map((i) => (
              <SkillCard key={i} item={i} />
            ))}
            {skillData.frameworks.map((i) => (
              <SkillCard key={i} item={i} />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
