import Marquee from "react-fast-marquee";

const Divider: React.FC = () => {
    return(
        <div className="py-5 border-y-2 border-dashed border-black">
            <div className=""></div>
            <Marquee autoFill loop={0} pauseOnClick className="flex gap-2 font-montserrat font-extrabold cursor-grab">
            {" "}✨ FULL-STACK WEBSITE DEVELOPER ✨ SOFTWARE ENGINEER ✨ FRONT-END DEVELOPER ✨ BACK-END DEVELOPER  {" "}
            </Marquee>
        </div>
    )
}

export default Divider;