import HeadingTwo from "@/components/HeadingTwo";
import Subtitle from "@/components/Subtitle";
import TwoContent from "@/components/TwoContent";
import { skillsets } from "@/data/data";

const Skillset: React.FC = () => {
  return (
    <TwoContent className="py-5 md:py-0 gap-5 lg:gap-0">
      <div className="col-start-1 col-span-2 lg:col-span-1 border-none md:border-r-2 md:border-dashed border-black">
        <div className="px-5 md:py-10">
          <Subtitle>What I can do</Subtitle>
          <HeadingTwo>My Skillset</HeadingTwo>
        </div>
      </div>
      <div className="col-start-1 col-span-2 row-start-2 lg:row-start-1 lg:col-start-2 lg:col-span-1  lg:col-end-4">
        {skillsets.map((item, index) => (
          <div
            key={index}
            className={`border-b-2 border-dashed border-black last:border-none p-5 first:pt-0 md:first:pt-5 md:py-10`}
          >
            <div className=" flex flex-col w-fit">
              <h3 className="font-montserrat font-bold text-[25px] md:text-[30px] lg:text-[35px] w-fit">
                {item.title}
              </h3>
              <div className="text-dspGray text-sm md:text-base">
                <p>
                  {item.type} ⦿{" "}
                  {item.stacks.map((item, idx) => (
                    <span key={idx} className={`border-r-[1px] border-solid border-dspGray last:border-none pl-1 pr-2`}>
                      {" "}{item}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </TwoContent>
  );
};

export default Skillset;
