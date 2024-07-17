interface TagsProps {
    cardTag: string;
  }
  
  export const Tags = ({ cardTag }: TagsProps) => {
    return (
      <div className="flex w-fit mt-2 px-2 h-6 bg-[#70707073] rounded-md items-center mr-2">
          <h1 className='text-white text-xs mx-auto font-medium'>
          {cardTag}
          </h1>
      </div>
    )
  }
  
  export default Tags