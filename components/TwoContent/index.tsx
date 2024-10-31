interface twoContentProps{
    children?: React.ReactNode;
    className?: string;
    id?: string;
}

const TwoContent: React.FC<twoContentProps> = ({ children, className, id }) => {
    return(
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b-2 border-dashed border-black ${className}`} id={id}>
            {children}
        </div>
    )
}

export default TwoContent;