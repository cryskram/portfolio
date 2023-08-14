// import { Montserrat } from "next/font/google";

// const montserrat = Montserrat({ subsets: ["latin"] });

type SkillCardProp = {
  item: string;
};

const SkillCard = ({ item }: SkillCardProp) => {
  return (
    <div className="border-2 border-emerald-500 cursor-pointer transition-all duration-300 hover:text-slate-900 hover:bg-emerald-500 px-3 py-2 m-2 rounded-full">
      <h1 className="font-semibold">{item}</h1>
    </div>
  );
};

export default SkillCard;
