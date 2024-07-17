import Tags from "./Tags"

interface CardProjectProps {
  title: string;
  description: string;
  tags: string[];
  imgPath?: string;
}

export const CardProject = ({ title, description, tags, imgPath }: CardProjectProps) => {
  const listTags = tags?.map(tag =>
    <Tags
      cardTag={tag}
    />);

  return (
    <div className="">
      <a href="#" className="flex flex-col border-4 border-secondaryColor rounded-lg shadow md:flex-row md:max-w-[1/3] min-w-[40vw] max-md:mx-8 mb-4 mx-4 bg-[#8b8b8b10] hover:bg-[#8b8b8b25]">
          <img className="object-cover object-top rounded-t-lg h-[200px] md:w-48 md:rounded-none md:rounded-s-lg" src={imgPath} alt=""/>
          <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-white">{title}</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm">{description}</p>
              <div className="grid grid-flow-col w-fit ">
                {listTags}
              </div>
          </div>
      </a>
    </div>
  )
}

export default CardProject