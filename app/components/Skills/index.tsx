import HeadingTwo from "@/components/HeadingTwo";
import Subtitle from "@/components/Subtitle";
import TwoContent from "@/components/TwoContent";
import { skillStacks } from "@/data/data";
import Image from "next/image";

const Skills: React.FC = () => {
  return (
    <TwoContent className="" id="skills">
      <div className="col-start-1 border-none lg:border-r-2 lg:border-dashed border-black">
        <div className="p-5 md:py-10">
            <Subtitle>Stacks and tools I use</Subtitle>
            <HeadingTwo>My Skill Stacks</HeadingTwo>
        </div>
      </div>
      <div className="col-start-1 row-start-2 md:col-span-2 lg:row-start-1 lg:col-start-2 lg:col-end-4">
        {skillStacks.map((item, index) => (
          <div
          key={index}
          className={`border-b-2 border-dashed border-black last:border-none`}
        >
          <div className="p-5 md:py-10 flex flex-col gap-5 w-full">
            <h3 className="font-montserrat font-bold text-[25px] md:text-[30px] lg:text-[35px]">
              {item.name}
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5 text-dspBlack font-montserrat font-bold w-full">
                {item.stacks.map((item, idx) => (
                  <div key={idx}>
                    <div className={` p-1 xs:p-2 bg-white border-4 border-dspLightGray2 rounded-3xl flex items-center gap-1 xs:gap-2 w-full text-xs xs:text-sm md:text-base`}>
                      <div className="xs:bg-dspLightGray2 w-14 h-14 flex items-center justify-center rounded-full p-0 xs:p-1">
                        <Image 
                          src={item.image}
                          className=" w-[25px] h-[25px] xs:w-[35px] xs:h-[35px]"
                          alt="icon"
                        />
                      </div>
                      {" "}{item.stack}
                      
                    </div>
                  </div>
                ))}
            </div>
          </div>
          </div>
        ))}
      </div>
    </TwoContent>
  );
};

export default Skills;
