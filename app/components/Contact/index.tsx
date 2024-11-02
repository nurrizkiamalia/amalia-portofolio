import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaDribbble } from "react-icons/fa";
import { FaArrowDownLong, FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const contactMe = [
    {
        icon: <FaGithub />,
        text: "@nurrizkiamalia",
        link: "https://github.com/nurrizkiamalia"
    },
    {
        icon: <FaLinkedin/>,
        text: "@nurrizkiamalia",
        link: "https://www.linkedin.com/in/nurrizkiamalia"
    },
    {
        icon: <MdOutlineEmail/>,
        text: "Email me.",
        link: "mailto=rizkiamel9@gmail.com"
    },
    {
        icon: <FaInstagram/>,
        text: "@lia_is_amalia",
        link: "https://instagram.com/lia_is_amalia"
    },
    {
        icon: <FaDribbble/>,
        text: "@nurrizkiamalia",
        link: "https://dribbble.com/nurrizkiamalia"
    },
]

const Contact: React.FC = () => {
    return(
        <div id="contact" className="grid grid-cols-1 lg:grid-cols-2">
            <div className="col-start-1 lg:border-r-2 border-b-2 border-dashed border-black flex flex-col lg:justify-between gap-10 p-5 ">
                <div>
                    <h2>Keep in touch with me</h2>
                    <p className="">
                        If you want to get in touch with me, you can find me on the following platform I attach here 
                    </p>
                </div>
                <button className="hidden lg:flex justify-end bg-dspLightGray2 border-2 border-dspGray py-2 px-5 rounded-full"><FaArrowRightLong className="text-dspOrange text-3xl" /></button>
                <button className="lg:hidden bg-dspLightGray2 border-2 border-dspGray py-2 px-5 flex rounded-full"><FaArrowDownLong className="text-dspOrange text-3xl" /></button>
            </div>
            <div className="col-start-1 row-start-2 lg:row-start-1 lg:col-start-2 grid grid-cols-2 grid-rows-3">
               {contactMe.map((item, index) => (
                <div key={index} className={`border-b-2 border-dashed border-black ${index === 2 ? "row-start-2 col-span-2" : index == 0 || index == 3 ? "border-r-2 border-dashed border-black" : ""}`}>
                    <div className="p-5 flex flex-col gap-5 ">
                        {item.icon}                        
                        <Link href={item.link}>{item.text}</Link>
                    </div>
                </div>
               ))}
            </div>
        </div>
    )
}

export default Contact;