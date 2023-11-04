
const Title = ({children}) => {
    return (
        <div className="text-3xl md:text-4xl  flex flex-col justify-start items-center gap-5 py-10 px-5 font-extrabold">
           
            {children}
        </div>
    );
};

export default Title;