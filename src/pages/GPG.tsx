import Image from "next/image";
import welcomeHero from "./images/welcomeHero.jpg";
import welcomeBanner from "./images/welcomeBanner.png";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";


const GPG = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <Image className=" mx-auto" alt="Welcome Hero" src={welcomeHero} />
      <div className="text-center absolute bottom-0 w-full max-h-[100%]">
        <Image
          className="relative h-full w-full"
          alt="Welcome Banner"
          src={welcomeBanner}
        />
        <Link
          href="/login" // You can omit the trailing slash here unless needed
          className="absolute transform bottom-[24%] sm:bottom-[12%] sm:left-[84%] left-1/2 whitespace-nowrap 
            -translate-x-1/2 py-2 px-3 text-stone-800 font-medium 
            text-xl text-center rounded-md shadow-lg mx-auto bg-white
            flex items-center gap-2 hover:opacity-85 border border-brand"
        >
          Get Started <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default GPG;
