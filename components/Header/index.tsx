"use client"

import { headerLinks } from "@/data/data";
import Link from "next/link";
import Buttons from "../Buttons";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";

const flexs = "flex items-center justify-center";

const Header: React.FC = () => {
  const router = useRouter();
  return (
    <div className="font-dmMono hidden lg:grid grid-cols-5 border-b-2 border-dashed border-black">
      <div className={`col-span-1 ${flexs} py-5 cursor-alias`}>
        <p className="font-dmSerif text-[35px]">
          Ama<span className="bg-dspOrange  text-white">lia.</span>
        </p>
      </div>
      <div
        className={`${flexs} h-full col-start-2 col-span-3 border-x-2 border-dashed border-black`}
      >
        <div
          className={`${flexs} h-fit bg-dspLightGray lg:px-10 xl:px-20 border-2 border-white py-3 rounded-full lg:gap-5 xl:gap-10`}
        >
          {headerLinks.map((item, index) => (
            <Link href={item.links} key={index}>
              {item.text}
            </Link>
          ))}
        </div>
      </div>
      <div className={`col-start-5 col-span-1 ${flexs}`}>
        <div className="bg-gradient-to-r from-dspOrange to-dspOrangeYellow w-fit rounded-full p-1 shadow-lg shadow-dspLightGray2">
          <Buttons className="px-2 bg-dspLightGrayBg hover:bg-dspOrange hover:text-white" onClick={ () => router.push('#contact')}>
            Contact Me
            <span className="bg-dspBlack text-white p-1 rounded-full">
              <IoIosArrowForward />
            </span>
          </Buttons>
        </div>
      </div>
    </div>
  );
};

export default Header;
