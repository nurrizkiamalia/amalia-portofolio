import Marquee from "react-fast-marquee";

const NameMarquee: React.FC = () => {
  return (
    <div className="flex flex-col antialiased w-full font-montserrat font-extrabold text-[60px] md:text-[90px] lg:text-[120px] leading-[0.8]">
      <Marquee direction="left" className="h-fit overflow-hidden" loop={0} autoFill  speed={40} pauseOnHover>
        <h1>NUR RIZKI AMALIA•</h1>
      </Marquee>
      <Marquee direction="right" className="h-fit overflow-hidden text-dspGray" loop={0} autoFill speed={80} pauseOnHover>
        <h1>FULLSTACK WEBSITE DEVELOPER•</h1>
      </Marquee>
    </div>
  );
};

export default NameMarquee;
