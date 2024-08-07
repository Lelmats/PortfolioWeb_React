interface CardTechsProps {
  title: string;
  color?: string;
}

export const CardTechs = ({ title,color }: CardTechsProps) => {
  const borderColor = {
    borderColor: color ? color : undefined, 
  };

  return (
    <>
        <div className="lg:ml-auto w-full border-[3px] rounded-md md:flex-row items-center mb-2 
            bg-[#8b8b8b10] hover:bg-[#8b8b8b25] shadow-sm sm:hover:shadow-xl sm:hover:translate-x-1
            sm:hover:translate-y-[-1px] transition-all duration-[200ms]" style={borderColor}>
            <div className="justify-between py-0.5 leading-normal px-2 ">
                <h1 className="font-JetBrains text-xs md:text-sm font-medium md:font-bold tracking-tight
                 text-white text-center my-1" >{title}</h1>
                {/* <p className="mb-3 text-base font-semibold md:text-md text-gray-300 dark:text-gray-300 text-wrap">asd</p> */}
            </div>
        </div>
    </>
  );
}

export default CardTechs