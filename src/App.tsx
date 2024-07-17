import './App.css'
import CSS from "csstype";
import Navbar from './components/Navbar';
import CardProject from './components/CardProject';
import CardExperience from './components/CardExperience';

function App() {

  const backgroundStyle: CSS.Properties = {
    backgroundImage: "url('img/IconsBackground@2x.png')",
    borderTop: "2px dashed rgba(145, 142, 177, 0.5)",
    backgroundSize: "contain",
  };

  return (
    <>
    {/* Section 1 - Me */}
    <Navbar/>
    <div className="flex bg-backgroundPrimary items-center sm:pt-20 h-dvh" style={backgroundStyle} id='Home'>
      <div className='font-JetBrains grid grid-cols-1 md:grid-cols-2 grid-flow-row sm:mx-28 xl:mx-64 w-screen mx-16 '>
        <div className="">
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
          <img className='object-cover h-[35vh] md:h-[65vh] sm:h-[55vh] min-w-fit hover:scale-105 transition-transform duration-500 ' src="img\MaxCharacter.png" alt="" />
        </div>
      </div>
    </div>
    {/* <br /> */}
    {/* Section 2 */}
    <div className="flex bg-backgroundPrimary p-10 xl:p-28 items-center " style={backgroundStyle} id='AboutMe'>
      <div className='absolute left-[45%] mb-44 lg:left-[42%] xl:left-[43%] z-49' >
        <img src="img/ArrowW.png" alt="" className='w-[150px] xl:w-[200px] 2xl:w-[250px] rotate-[-100deg] max-[1000px]:hidden '/>
      </div>
      <div className='md:grid md:grid-flow-row'>
        <div className='mb-3 md:grid md:grid-flow-col '>
          <h1 className='font-RobotoSlab rounded-lg mr-10 my-4 border-b-8 border-secondaryColor text-white text-3xl sm:text-4xl md:text-4xl xl:text-5xl w-fit h-fit '>
            About Me
          </h1>
          <p className='font-RobotoSlab text-md min-[600px]:text-lg sm:text-lg md:text-xl xl:text-2xl text-white 2xl:w-3/4 ml-auto text-balance text-right max-md:text-center'>
            I'm a Software Developer, with a strong background
            in Front-End development and some experience in Back-End.
            Currently I'm deepening my knowledge in data structures
            and constantly sharpening my skills.
            I have a passion for learning new technologies,
            and I am committed to continuous improvement (:
          </p>
        </div>
        <div className='md:grid md:grid-flow-col'>
          <div className='flex items-center order-last'>
            <div className='sm:mb-5 max-md:mx-auto'>
            <h1 className='font-RobotoSlab mx-auto w-fit text-white border-b-8 border-secondaryColor rounded-lg mb-5 md:mb-5 ml-auto text-2xl sm:text-4xl md:text-4xl xl:text-5xl mt-5'>Technologies & Tools</h1> 
            <h2 className='font-RobotoCondensed text-white mb-6 ml-auto text-xl sm:text-3xl md:text-2xl xl:text-xl '>The ones i am more confortable with:</h2>
              {/* <h1 className='font-JetBrains text-white text-center w-fit ml-auto sm:text-5xl md:text-5xl xl:text-6xl '>Experience &</h1>  */}
            </div>
          </div>
          <div className=''>
              <img src="/img/Tech_Icons.png" alt="" className=' sm:mt-0 max-[600px]:h-[16rem] h-[22rem] sm:h-[25rem] xl:h-[30rem] object-contain mx-auto origin-center transition-all animate-spin-slow  '/>
          </div>
        </div>
      </div>
    </div>
    {/* Section 2.5 */}
    {/* <div className=" flex max-lg:grid bg-backgroundPrimary px-10 md:px-24 2xl:px-36 sm:text-5xl md:text-5xl xl:text-6xl text-4xl justify-center md:justify-center lg:justify-between items-center" style={backgroundStyle} id='Experience' >
        <div className='mx-10'>
          <h1 className='font-JetBrains text-white text-center '>Experience &</h1> 
          <h1 className='font-JetBrains border-b-8 border-secondaryColor text-white text-center md:mb-6'>Technologies</h1> 
        </div>
        <div>
          <img src="/img/Tech_Icons.png" alt="" className='h-[30rem] lg:h-[45rem] object-contain '/>
        </div>
    </div> 

    {/* Section 3 */}
    <div className="flex  font-JetBrains bg-backgroundPrimary py-10 sm:text-5xl md:text-5xl xl:text-6xl text-4xl items-center " style={backgroundStyle} id='Experience' >
      <div className='mx-auto sm:w-2/3 '>
        <div className=''>
          <h1 className='mx-auto w-fit text-white border-b-8 border-secondaryColor rounded-lg mb-5 md:mb-5 ml-auto text-2xl sm:text-4xl md:text-4xl xl:text-5xl mt-5'>
            Experience
          </h1> 
        </div>
        <div className="text-center mb-5">
          <CardExperience
          title='Frontend Developer'
          company='MEDIAEREA / Drone Solutions & Monitoring Technologies'
          date='Mar 2022 - Jul 2022'
          imgPath='img/MAIcon.jpeg'
          />
          <CardExperience
          title='Frontend Developer - Contract'
          company='MEDIAEREA / Drone Solutions & Monitoring Technologies'
          date='Jan 2021 - Jun 2021'
          imgPath='img/MAIcon.jpeg'
          />
          <CardExperience
          title='Frontend Developer - Freelance'
          company='RUBISCO'
          date='Jan 2021 - Jun 2021'
          imgPath='img/Rubisco.png'
          />
        </div>
      </div>
    </div>

    {/* Section 4 */}
    <div className="flex  bg-backgroundPrimary py-28 sm:text-5xl md:text-5xl xl:text-6xl text-4xl" style={backgroundStyle} id='Projects' >
      <div className='mx-auto'>
        <h1 className='font-JetBrains mx-auto text-center w-fit text-white border-b-8 border-secondaryColor rounded-lg mb-16  ml-auto text-2xl sm:text-4xl md:text-4xl xl:text-5xl'>
            Projects & More
        </h1> 
        <div className='grid '>
          <CardProject
            title='Crypto Control'
            description='lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.'
            tags={['React','Vite','TailwindCSS']}
            imgPath='img/Control_Crypto.png'
          />
          <CardProject
            title='Rubisco'
            description='lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.'
            tags={['React','Vite','TailwindCSS']}
            imgPath='img/Rubisco.png'
          />
          <CardProject
            title='Rubisco'
            description='lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.'
            tags={['React','Vite','TailwindCSS']}
            imgPath='img/Rubisco.png'
          />

          <CardProject
            title='Crypto Control'
            description='lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.'
            tags={['React','Vite','TailwindCSS']}
            imgPath='img/Control_Crypto.png'
          />



        </div>
      </div>
    </div>
    </>
  )
}

export default App
