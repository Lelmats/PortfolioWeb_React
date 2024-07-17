import Tags from "./Tags"

interface CardProjectProps {
  title: string;
  description: string;
  tags: string[];
  imgPath?: string;
  linkGithub?: string;
}

export const CardProject = ({ title, description, tags, imgPath, linkGithub }: CardProjectProps) => {
  const listTags = tags?.map(tag =>
    <Tags
      cardTag={tag}
    />);

  return (
    <div className="">
      <a href={linkGithub} className="flex flex-col border-4 border-secondaryColor rounded-lg md:flex-row  min-w-[40vw] md:max-w-[60vw] max-md:mx-8 mb-4 mx-4 
      bg-[#8b8b8b10] hover:bg-[#8b8b8b25] shadow-sm sm:hover:shadow-xl sm:hover:translate-x-4 sm:hover:translate-y-[-4px] transition-all duration-[400ms]">
          <img className="object-cover object-top rounded-t-md h-[200px] md:w-48 md:rounded-none md:rounded-s-md" src={imgPath} alt=""/>
          <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-white">{title}</h5>
              <p className="mb-3 text-base font-semibold md:text-md text-gray-700 dark:text-gray-300 text-wrap">{description}</p>
              <div className="grid grid-flow-col w-fit ">
                {listTags}
              </div> 
          </div>
      </a>
    </div>
  )
}

export default CardProject