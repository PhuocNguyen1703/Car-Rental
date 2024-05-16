import { footerLinks } from "@/lib/constants";
import Logo from "../Logo";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex p-10 bg-slate-200">
      <div className="w-60 select-none">
        <div className="flex items-center gap-2">
          <Logo width={30} height={30} />
          <p className="text-xl font-bold">HypeHub</p>
        </div>
        <p className="mt-4 font-normal">
          Our vision is to provide convenience and service professional.
        </p>
        <div className="flex items-center gap-4 mt-2">
          <Link href="/">
            <Image
              src="/icons/facebook.svg"
              height={20}
              width={20}
              alt="facebook"
            />
          </Link>
          <Link href="/">
            <Image
              src="/icons/instagram.svg"
              height={20}
              width={20}
              alt="instagram"
            />
          </Link>

          <Link href="/">
            <Image
              src="/icons/youtube.svg"
              height={0}
              width={30}
              alt="youtube"
            />
          </Link>
        </div>
      </div>
      <div className="flex gap-16 ml-auto">
        {footerLinks.map((item) => (
          <div key={item.title}>
            <h3 className="font-bold text-gray-600">{item.title}</h3>
            <div className="flex flex-col gap-2 mt-3">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-[14px] font-semibold"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
