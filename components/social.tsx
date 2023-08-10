import { FaDiscord, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Social = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-4 text-3xl">
        <FaInstagram />
        <FaGithub />
        <FaTwitter />
        <FaDiscord />
      </div>
    </div>
  );
};

export default Social;
