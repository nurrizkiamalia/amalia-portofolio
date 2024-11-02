import HeadingTwo from "@/components/HeadingTwo";
import Subtitle from "@/components/Subtitle";
import { LinkPreview } from "@/components/ui/link-preview";
import { WobbleCard } from "@/components/ui/wobble-card";
import { recentProjects } from "@/data/data";
import Image from "next/image";
import { TbPointFilled } from "react-icons/tb";

const Projects: React.FC = () => {
  return (
    <div className="p-5 md:py-10 border-b-2 border-dashed border-black w-full flex flex-col gap-5 lg:gap-10" id="projects">
      <div>
        <Subtitle>Selected Portofolio</Subtitle>
        <HeadingTwo>My Projects</HeadingTwo>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full h-full">
        {recentProjects.map((item, index) => (
          <div key={index} className="w-full h-full">
            <WobbleCard
              className="bg-dspLightGray border-2 border-dspLightGray2 rounded-xl shadow-sm w-full h-full p-5 lg:p-10 overflow-hidden flex flex-col gap-3"
            >
              <Image
                src={item.image}
                width={500}
                height={400}
                className=" w-full object-cover object-center bg-dspDarkGray rounded-xl"
                alt=""
              />
              <h3 className="font-montserrat font-bold text-[25px] md:text-[30px] lg:text-[35px] z-[9999]">
              <LinkPreview
                    url={item.link}
                    className="font-bold "
                    height={200}
                    width={200}
                  >
                    {item.title}
                  </LinkPreview>{" "}
              </h3>
              <p className="text-sm md:text-base">
                {item.type} ⦿ {item.job}
              </p>
              <div className="flex flex-wrap items-center gap-2 w-fit mt-2">
                {item.stacks.map((items, idx) => (
                  <p
                    key={idx}
                    className="bg-dspLightGray2 border-2 border-dspDarkGray w-fit py-1 px-2 rounded-full flex items-center gap-1 whitespace-nowrap text-xs lg:text-sm"
                  >
                    <TbPointFilled className="text-xl text-dspOrange" /> {items}
                  </p>
                ))}
              </div>
            </WobbleCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
