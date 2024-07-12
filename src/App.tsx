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
    <div className="bg-cover bg-backgroundPrimary flex items-center" style={backgroundStyle} id='Home'>
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
    <div className="bg-cover bg-backgroundPrimary flex p-28 sm:text-5xl md:text-5xl xl:text-6xl text-4xl " style={backgroundStyle} id='AboutMe' >
      <div className='mx-auto'>
        <h1 className='font-JetBrains border-b-8 border-secondaryColor text-white text-center'>AboutMe</h1> 
      </div>
    </div>

    {/* Section 3 */}
    <div className="bg-cover flex max-lg:grid bg-backgroundPrimary px-10 md:px-24 2xl:px-36 sm:text-5xl md:text-5xl xl:text-6xl text-4xl justify-center md:justify-center lg:justify-between items-center" style={backgroundStyle} id='Experience' >
        <div className='mx-10'>
          <h1 className='font-JetBrains text-white text-center '>Experience &</h1> 
          <h1 className='font-JetBrains border-b-8 border-secondaryColor text-white text-center md:mb-6'>Technologies</h1> 
        </div>
        <div>
          <img src="/img/Tech_Icons.png" alt="" className='h-[30rem] lg:h-[45rem] object-contain '/>
        </div>
    </div>

    {/* Section 4 */}
    <div className="bg-cover bg-backgroundPrimary flex p-28 sm:text-5xl md:text-5xl xl:text-6xl text-4xl" style={backgroundStyle} id='Projects' >
      <div className='mx-auto'>
        <h1 className='font-JetBrains border-b-8 border-secondaryColor text-white text-center '>Projects</h1> 
      </div>
    </div>
    </>
  )
}

export default App
