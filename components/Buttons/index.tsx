interface BtnProps{
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

const Buttons: React.FC<BtnProps> = ({ children, onClick, className}) => {
    return(
        <button className={` py-1 rounded-full border-2 flex items-center gap-1 transition-all duration-500 ${className}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Buttons;