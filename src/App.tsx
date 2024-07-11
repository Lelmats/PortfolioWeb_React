import './App.css'
import CSS from "csstype";
import Navbar from './components/Navbar';

function App() {

  const backgroundStyle: CSS.Properties = {
    backgroundImage: "url('img/IconsBackground@2x.png')",
    height: "100vh",
  };

  return (
    <>
    {/* Section 1 - Me */}
    <Navbar/>
    <div className="bg-cover bg-backgroundPrimary flex items-center" style={backgroundStyle}>
      <div className='grid grid-cols-1 md:grid-cols-2 grid-flow-row sm:mx-28 xl:mx-64 w-screen mx-16 '>
        <div className='  '>
            <h1 className='sm:text-5xl md:text-5xl xl:text-7xl text-4xl font-JetBrains text-left text-white h-fit'> 
              Hi!,  
            </h1>
            <h1 className='sm:text-5xl md:text-5xl xl:text-7xl text-4xl font-JetBrains text-left text-white h-fit'> 
              My 
            </h1>
            <h1 className='sm:text-5xl md:text-5xl xl:text-7xl text-4xl font-JetBrains text-left text-white h-fit'> 
              Name is 
            </h1>
            <h1 className='sm:text-5xl md:text-5xl xl:text-7xl text-4xl line-1 anim-typewriter font-JetBrains text-left text-white mb-3'>
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
    <br />
    {/* Section 2 */}
    <div className="bg-cover bg-backgroundPrimary" style={backgroundStyle}>

    </div>
    </>
  )
}

export default App
