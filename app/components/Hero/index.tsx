"use client"

import Buttons from "@/components/Buttons";
import NameMarquee from "@/components/NameMarquee";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";
import { TbPointFilled } from "react-icons/tb";
import me from "@/public/mypic.webp";

const Hero: React.FC = () => {
  const router = useRouter();

  return (
    <div className="py-5 md:py-10 lg:py-20 flex flex-col w-full h-full items-center justify-center gap-5 font-dmMono">
      <div className="bg-dspLightGray border-2 border-dspLightGray2 py-1 px-3 rounded-full">
        <p className="flex items-center gap-1">
          <TbPointFilled className="text-xl text-dspOrangeYellow" /> Hi, I am{" "}
          <span className="font-dmSerif italic">Amalia</span>
        </p>
      </div>
      <div className="flex items-center justify-center p-5 w-full md:w-2/4 text-center">
        <p>
          Welcome to my space! you are welcome to take a look at some personal
          projects and code exercise I have made.{" "}
        </p>
      </div>
      <div className="relative w-full flex items-center justify-center">
        <div className="absolute w-full left-0 z-0">
            <NameMarquee />
        </div>
        <div className="w-fit flex justify-center z-10">
          <Image
            src={me}
            alt="me"
            className="rounded-full w-[200px] sm:w-[245px] md:w-[275px] lg:w-[300px] bg-dspGray p-1 xs:p-2 md:p-3 bg-gradient-to-r from-dspOrange to-dspOrangeYellow -rotate-6 hover:rotate-0 transition-all duration-500 hover:scale-105"
          />
        </div>
      </div>
      <div className="flex items-center gap-5 text-xs xs:text-sm sm:text-base">
        <Buttons className="px-3 gap-1 bg-dspOrange border-4 text-white border-white shadow-md shadow-dspGray hover:bg-dspBlack" onClick={ () => router.push('#about')}>
          More about me{" "}
          <span className="bg-dspBlack text-white p-1 rounded-full">
            <IoIosArrowForward />
          </span>
        </Buttons>
        <div className="bg-gradient-to-r from-dspOrange to-dspOrangeYellow w-fit rounded-full p-1 shadow-lg shadow-dspLightGray2 ">
            <Buttons className="px-5 bg-dspLightGrayBg hover:bg-dspOrange hover:text-white border-none" onClick={ () => router.push('#projects')}>My projects</Buttons>
        </div>
      </div>
    </div>
  );
};

export default Hero;
