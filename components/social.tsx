import { FaDiscord, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Social = () => {
  return (
    <div className="">
      <div className="flex-col gap-4 text-3xl hidden md:flex">
        <FaInstagram />
        <FaGithub />
        <FaTwitter />
        <FaDiscord />
      </div>
    </div>
  );
};

export default Social;
