import { TbPointFilled } from "react-icons/tb"

interface subtitleProps{
    children?: React.ReactNode;
    className?: string;
}

const Subtitle: React.FC<subtitleProps> = ({ children, className }) => {
    return(
        <div className={`bg-dspLightGray border-2 border-dspLightGray2 py-1 px-3 rounded-full w-fit ${className}`}>
        <p className="flex items-center gap-1 text-sm md:text-base">
          <TbPointFilled className="text-xl text-dspOrangeYellow" /> {children}
        </p>
      </div>
    )
}

export default Subtitle;