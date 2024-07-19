interface TagsProps {
    cardTag: string;
  }
  
  export const Tags = ({ cardTag }: TagsProps) => {
    return (
      <div className="flex mr-1 w-fit px-2 h-6 mb-2 bg-[#70707073] rounded-md items-center 
      hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200  
      focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-grabbing">
          <h1 className='text-white text-xs mx-auto font-medium'>
          {cardTag}
          </h1>
      </div>
    )
  }
  
  export default Tags