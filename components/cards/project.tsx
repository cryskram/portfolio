import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardProp {
  name: string;
  link: string;
  image: string;
  description: string;
  tags: string[];
}

const ProjectCard = ({
  name,
  image,
  link,
  description,
  tags,
}: ProjectCardProp) => {
  return (
    <div className="rounded-2xl p-1.5 bg-slate-200 hover:bg-slate-300">
      <Link href={link}>
        <div>
          <Image
            className="w-full rounded-2xl"
            src={image}
            width={800}
            height={800}
            alt={name}
          />
        </div>
        <div className="px-4 py-2">
          <div>
            <h1 className="text-slate-900 font-bold text-xl">{name}</h1>
            <p className="text-slate-500 text-sm font-semibold">
              {description}
            </p>
          </div>
          <div className="flex gap-2 mt-4">
            {tags.map((tag) => (
              <h1
                className="bg-purple-800 text-sm px-2 py-1 rounded font-semibold"
                key={tag}
              >
                {tag}
              </h1>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
