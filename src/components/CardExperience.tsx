interface CardExperienceProps {
  title: string;
  company: string;
  date: string;
  imgPath?: string;
}

export const CardExperience = ({ title, company, date, imgPath }: CardExperienceProps) => {
  return (
    <>
        <div className='mx-auto my-4 h-10 sm:h-16 w-1 bg-secondaryColor rounded-lg'></div>

        <div className='bg-[#8b8b8b10] hover:bg-[#8b8b8b25] border-4 border-secondaryColor rounded-lg mx-3 p-2 
        shadow-sm sm:hover:shadow-xl sm:hover:translate-x-4 sm:hover:translate-y-[-4px] transition-all duration-[400ms]'>
            <div className='grid sm:grid-cols-5 items-center'>
                <div className='md:col-span-1'>
                    <img src={imgPath} alt="MediaAerea" className='max-[640px]:w-[18%] max-w-[100px] mx-auto shadow-md'/>
                </div>
                <div className='sm:col-span-4'>
                    <h1 className='text-white text-lg md:text-xl py-2 font-bold'>{title}</h1>
                    <h2 className='text-white text-base md:text-lg py-2'>{company}</h2>
                    <p className='text-white text-sm md:text-base py-2 font-thin'>{date}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default CardExperience