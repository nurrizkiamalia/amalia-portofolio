import Buttons from "@/components/Buttons";
import HeadingTwo from "@/components/HeadingTwo";
import Subtitle from "@/components/Subtitle";
import TwoContent from "@/components/TwoContent";
import { IoIosArrowForward } from "react-icons/io";

const About: React.FC = () => {
  return (
    <TwoContent className="py-5 md:py-0 gap-5 md:gap-0" id="about">
      <div className="col-span-1 md:border-r-2 border-dashed border-black">
        <div className="px-5 md:py-10">
          <Subtitle>Get to know me</Subtitle>
          <HeadingTwo>About</HeadingTwo>
        </div>
      </div>
      <div className="col-start-1 row-start-2 md:row-start-1 md:col-start-2 lg:col-end-4">
        <div className="px-5 md:py-10 text-sm md:text-base">
          <p>
            I am Nur Rizki Amalia, bachelor of Information Technology from
            Universitas Teknokrat Indonesia. I have high enthusiasm for the tech
            field, recently I upskilling through Digital Talent Incubator
            scholarship from Purwadhika and learn how to make full-stack website
            using some stack, include JavaScript library React.js, Next.js,
            TailwindCSS, and Typescript (I use to code with this in front-end)
            as Front-end. I also learn Java Spring Boot as a back-end, and learn
            to deploy the webApps with docker in google cloud, vercel
            (front-end), netlify (front-end), render.
            <br />
            <br />I am a person who is very curious and always want to learn new
            things, I also very passionate about the tech field, I am always
            looking for new challenges and opportunities to improve my skills
            and knowledge. Recently, I <strong>successfully</strong> implement
            what I learn to make real project for my client to create invitation
            website <i>(the link will be update soon). </i>
            <Buttons
              className="px-3 hover:scale-105 mt-1 bg-gray-200 hover:bg-gray-700 hover:text-white border-4 border-gray-400 hover:border-gray-200"
              disable
            >
              To Invitation Web
              <span className="bg-dspBlack text-white p-1 rounded-full">
                <IoIosArrowForward />
              </span>
            </Buttons>{" "}
            {/* <br />I can&apos;t recite how delighted I am to finally be able to
            fully make webApps by my own with this current skill. Beside of
            coding, I have strong interest and hobby that is related to
            photopgraphy, I love take a lot of amazing scenes and all aesthetic
            things <i>(at least for me✌🏻)</i>.{" "} */}
          </p>
        </div>
      </div>
    </TwoContent>
  );
};

export default About;
