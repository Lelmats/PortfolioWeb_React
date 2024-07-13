import './App.css'
import CSS from "csstype";
import Navbar from './components/Navbar';

function App() {

  const backgroundStyle: CSS.Properties = {
    backgroundImage: "url('img/IconsBackground@2x.png')",
    height: "100vh",
    borderTop: "2px dashed rgba(145, 142, 177, 0.5)",
  };

  return (
    <>
    {/* Section 1 - Me */}
    <Navbar/>
    <div className="flex bg-cover bg-backgroundPrimary items-center sm:pt-20" style={backgroundStyle} id='Home'>
      <div className='font-JetBrains grid grid-cols-1 md:grid-cols-2 grid-flow-row sm:mx-28 xl:mx-64 w-screen mx-16 '>
        <div className='  '>
            <h1 className='sm:text-5xl md:text-5xl xl:text-7xl text-4xl text-left text-white h-fit'> 
              Hi!,  
            </h1>
            <h1 className='sm:text-5xl md:text-5xl xl:text-7xl text-4xl text-left text-white h-fit'> 
              My 
            </h1>
            <h1 className='sm:text-5xl md:text-5xl xl:text-7xl text-4xl text-left text-white h-fit'> 
              Name is 
            </h1>
            <h1 className='sm:text-5xl md:text-5xl xl:text-7xl text-4xl line-1 anim-typewriter text-left text-white mb-3'>
              Max Rivera
            </h1>
            <p className='font-JetBrains text-left text-white h-fit'> 
              A Software / Fullstack Developer
            </p>
        </div>
        <div className='flex justify-end'>
          <img className='object-cover h-[35vh] md:h-[65vh] sm:h-[55vh] min-w-fit' src="img\MaxCharacter.png" alt="" />
        </div>
      </div>
    </div>
    {/* <br /> */}
    {/* Section 2 */}
    <div className="bg-cover flex bg-backgroundPrimary p-10 xl:p-28 items-center" style={backgroundStyle} id='AboutMe'>
      <div className='md:grid md:grid-flow-row'>
        <div className='mb-3 md:mt-8 md:grid md:grid-flow-col '>
          <h1 className='font-JetBrains mr-10 mb-4 border-b-8 border-secondaryColor text-white text-3xl sm:text-4xl md:text-4xl xl:text-5xl w-fit h-fit '>
            About Me
          </h1>
          <p className='text-md min-[600px]:text-lg sm:text-lg md:text-xl xl:text-2xl text-white 2xl:w-3/4 ml-auto text-justify'>
            I'm a Software Developer, with a strong background
            in Front-End development and some experience in Back-End.
            Currently, I'm deepening my knowledge in data structures
            and constantly sharpening my skills.
            I have a passion for learning new technologies,
            and I am committed to continuous improvement (: .
          </p>
        </div>
        <div className='md:grid md:grid-flow-col'>
          <div className='flex items-center order-last'>
            <div className='sm:mb-5 mx-auto'>
              <h1 className='font-JetBrains text-white border-b-8 border-secondaryColor md:mb-6 ml-auto text-2xl sm:text-4xl md:text-4xl xl:text-5xl '>Technologies</h1> 
              {/* <h1 className='font-JetBrains text-white text-center w-fit ml-auto sm:text-5xl md:text-5xl xl:text-6xl '>Experience &</h1>  */}
            </div>
          </div>
          <div className=''>
              <img src="/img/Tech_Icons.png" alt="" className='mt-6 sm:mt-0 max-[600px]:h-[18rem] h-[22rem] sm:h-[25rem] xl:h-[30rem] object-contain mx-auto'/>
          </div>
        </div>
      </div>
    </div>

    {/* Section 2.5 */}
    {/* <div className="bg-cover flex max-lg:grid bg-backgroundPrimary px-10 md:px-24 2xl:px-36 sm:text-5xl md:text-5xl xl:text-6xl text-4xl justify-center md:justify-center lg:justify-between items-center" style={backgroundStyle} id='Experience' >
        <div className='mx-10'>
          <h1 className='font-JetBrains text-white text-center '>Experience &</h1> 
          <h1 className='font-JetBrains border-b-8 border-secondaryColor text-white text-center md:mb-6'>Technologies</h1> 
        </div>
        <div>
          <img src="/img/Tech_Icons.png" alt="" className='h-[30rem] lg:h-[45rem] object-contain '/>
        </div>
    </div> 

    {/* Section 3 */}
    <div className="flex bg-cover font-JetBrains bg-backgroundPrimary py-10 sm:text-5xl md:text-5xl xl:text-6xl text-4xl items-center" style={backgroundStyle} id='Experience' >
      <div className='mx-auto sm:w-2/3'>
        <div className=''>
          <h1 className='mx-auto w-fit text-white border-b-8 border-secondaryColor md:mb-5 ml-auto text-2xl sm:text-4xl md:text-4xl xl:text-5xl '>Experience</h1> 
        </div>
        <div className="grid grid-rows-3 gap-1 lg:gap-4 text-center">
          <div className='bg-[#ffffff10] hover:bg-[#ffffff25] border-4 border-secondaryColor mx-3 mt-5 p-2 shadow-sm hover:shadow-xl hover:translate-x-4 hover:translate-y-[-4px] transition-all'>
            <div className='grid sm:grid-cols-5 items-center'>
              <div className='md:col-span-1'>
                <img src="img\MAIcon.jpeg" alt="MediaAerea" className='max-[640px]:w-[18%] max-w-[100px] mx-auto shadow-md'/>
              </div>
              <div className='sm:col-span-4'>
                <h1 className='text-white text-lg md:text-xl py-2 font-bold'>Frontend Developer</h1>
                <h2 className='text-white text-base md:text-lg py-2'>MEDIAEREA / Drone Solutions & Monitoring Technologies</h2>
                <p className='text-white text-sm md:text-base py-2 font-thin'>Mar 2022 - Jul 2022</p>
              </div>
            </div>
          </div>
          <div className='bg-[#ffffff10] hover:bg-[#ffffff25] border-4 border-secondaryColor mx-3 mt-5 p-2 shadow-sm hover:shadow-xl hover:translate-x-4 hover:translate-y-[-4px] transition-all'>
            <div className='grid sm:grid-cols-5 items-center'>
              <div className='md:col-span-1'>
                <img src="img\MAIcon.jpeg" alt="MediaAerea" className='max-[640px]:w-[18%] max-w-[100px] mx-auto shadow-md'/>
              </div>
              <div className='sm:col-span-4'>
                <h1 className='text-white text-lg md:text-xl py-2 font-bold'>Frontend Developer - Contract</h1>
                <h2 className='text-white text-base md:text-lg py-2'>MEDIAEREA / Drone Solutions & Monitoring Technologies</h2>
                <p className='text-white text-sm md:text-base py-2 font-thin'>Jan 2021 - Jun 2021</p>
              </div>
            </div>
          </div>
          <div className='bg-[#ffffff10] hover:bg-[#ffffff25] border-4 border-secondaryColor mx-3 mt-5 p-2 shadow-sm hover:shadow-xl hover:translate-x-4 hover:translate-y-[-4px] transition-all'>
            <div className='grid sm:grid-cols-5 items-center'>
              <div className='md:col-span-1'>
                <img src="img\MAIcon.jpeg" alt="MediaAerea" className='max-[640px]:w-[18%] max-w-[100px] mx-auto shadow-md'/>
              </div>
              <div className='sm:col-span-4'>
                <h1 className='text-white text-lg md:text-xl py-2 font-bold'>Frontend Developer - Freelance</h1>
                <h2 className='text-white text-base md:text-lg py-2'>RUBISCO </h2>
                <p className='text-white text-sm md:text-base py-2 font-thin'>Jan 2021 - Jun 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Section 4 */}
    <div className="bg-cover bg-backgroundPrimary flex py-28 sm:text-5xl md:text-5xl xl:text-6xl text-4xl" style={backgroundStyle} id='Projects' >
      <div className='mx-auto'>
        <h1 className='font-JetBrains text-white border-b-8 border-secondaryColor md:mb-6 ml-auto text-3xl sm:text-5xl md:text-5xl xl:text-6xl '>Projects</h1> 
      </div>
    </div>
    </>
  )
}

export default App
