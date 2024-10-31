interface headingTwoProps{
    children?: React.ReactNode;
}

const HeadingTwo: React.FC<headingTwoProps> = ({ children }) => {
    return(
        <h2 className="font-montserrat font-extrabold text-[35px] md:text-[40px] lg:text-[50px]">
            {children}
        </h2>
    )
}

export default HeadingTwo;