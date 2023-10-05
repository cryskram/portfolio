import Link from "next/link";
import { FaDiscord, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Social = () => {
  return (
    <div className="">
      <div className="flex-col gap-4 text-3xl hidden md:flex">
        <Link href="https://www.instagram.com/gn_vageesh/">
          <FaInstagram />
        </Link>
        <Link href="https://github.com/cryskram">
          <FaGithub />
        </Link>
        <Link href="https://twitter.com/gn_vageesh">
          <FaTwitter />
        </Link>
        <Link href="https://discord.com/users/924186564215582771">
          <FaDiscord />
        </Link>
      </div>
    </div>
  );
};

export default Social;
