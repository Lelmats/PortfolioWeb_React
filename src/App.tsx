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

    {/* Section 2 - About Me/Technologies */}
    <div className="flex bg-backgroundPrimary p-10 xl:p-28 items-center " style={backgroundStyle} id='AboutMe'>
      <div className='absolute left-[45%] mb-26 lg:left-[45%] xl:left-[42%] z-49' >
        <img src="img/ArrowW.png" alt="" className='w-[150px] xl:w-[200px] 2xl:w-[250px] rotate-[-100deg] max-[1000px]:hidden '/>
      </div>
      <div className='md:grid md:grid-flow-row'>
        <div className='mb-20 md:grid md:grid-flow-col '>
          <h1 className='font-RobotoSlab text-white rounded-lg mr-10 my-4 border-b-8 border-secondaryColor text-3xl sm:text-4xl md:text-4xl xl:text-5xl w-fit h-fit '>
            About Me 
          </h1>
          <p className='font-RobotoSlab text-white text-md min-[600px]:text-lg sm:text-lg md:text-xl xl:text-xl 2xl:w-3/4 ml-auto text-balance text-right max-md:text-center'>
            I'm a Software Developer, with a strong background
            in <b>Front-End</b> development and some experience in <b>Back-End</b>, 
            also experience in game development with <b>Unity</b> , 
            Currently I'm deepening my knowledge in data structures
            and constantly sharpening my skills.
            I have a passion for learning new technologies,
            and I am committed to continuous improvement 🚀.
          </p>
        </div>
        <div className='lg:grid lg:grid-flow-col'>
          <div className='flex items-center order-last ml-auto 2xl:mx-auto'>
            <div className='sm:mb-5 max-md:mx-auto '>
              <h1 className='font-RobotoSlab mx-auto w-fit text-white border-b-8 border-secondaryColor rounded-lg mb-5 mt-5 md:mb-5 ml-auto text-2xl sm:text-4xl md:text-4xl xl:text-5xl '>Technologies & Tools</h1> 
              <h2 className='font-RobotoCondensed text-white mb-6 ml-auto text-xl sm:text-3xl md:text-xl xl:text-xl '>The ones i am more confortable with:</h2>
              <div className='flex mx-auto items-center justify-center'></div>
            </div>
          </div>
          <div className='flex items-center justify-center m-44 max-sm:my-36 max-md:my-48 max-sm:mx-auto '>
              {/* <img src="/img/Tech_Icons.png" alt="" className='sm:mt-0 max-[600px]:h-[16rem] h-[22rem] sm:h-[25rem] xl:h-[30rem] object-contain mx-auto origin-center transition-all animate-spin-slow  '/> */}
              <img src="/img/Exterior.png" alt="" className='absolute max-sm:w-[17rem] w-[25rem] sm:w-[25rem] xl:w-[30rem] object-contain origin-center transition-all animate-spin-slow-2'/>
              <img src="/img/Middle.png" alt="" className='absolute max-sm:w-[11.5rem] w-[17rem] sm:w-[17rem] xl:w-[20.5rem] object-contain origin-center transition-all animate-spin-slow-1'/>
              <img src="/img/Inner.png" alt="" className='absolute max-sm:w-[6rem] w-[10rem] sm:w-[9rem] xl:w-[11rem] object-contain origin-center transition-all animate-spin-slow'/>
          </div>
        </div>
      </div>
    </div>

    {/* Section 3 - Experience */}
    <div className="flex  font-JetBrains bg-backgroundPrimary py-16 sm:text-5xl md:text-5xl xl:text-6xl text-4xl items-center " style={backgroundStyle} id='Experience' >
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

    {/* /* Section 4 - Projects */}
    <div className="flex bg-backgroundPrimary py-28 sm:text-5xl md:text-5xl xl:text-6xl text-4xl" style={backgroundStyle} id='Projects'>
      <div className='absolute mb-44 left-[80%] lg:left-[82%] xl:left-[82%] z-49'>
        <img src="img/ClickWG.png" alt="" className='w-[150px] xl:w-[200px] 2xl:w-[250px] max-md:hidden' />
      </div>
      <div className='mx-auto'>
        <h1 className='font-JetBrains mx-auto text-center w-fit text-white border-b-8 border-secondaryColor rounded-lg mb-8 ml-auto text-2xl sm:text-4xl md:text-4xl xl:text-5xl'>
          Projects & More
        </h1>
        <h1 className='font-JetBrains mx-auto text-center w-fit text-white border-b-4 border-secondaryColor rounded-lg mb-4 ml-auto text-xl sm:text-xl md:text-2xl xl:text-3xl'>
          Web Development
        </h1>
        <h1 className='font-JetBrains mx-auto text-center w-fit text-white border-secondaryColor rounded-lg mb-4 ml-auto text-4xl sm:text-4xl md:text-4xl xl:text-5xl'>
          🌐
        </h1>
        <div className='grid'>
          <CardProject
            title='Crypto Control'
            description='Cryptocurrency control, with the possibility of calculating market prices using an external API, which updates and displays real-time prices.'
            tags={['React', 'Vite', 'TailwindCSS']}
            imgPath='img/Control_Crypto_SM.png'
            linkGithub='https://github.com/Lelmats/Crypto_Info-react-vite'
          />
          <CardProject
            title='Expense Tracker'
            description='Personal expense tracker, with the ability to add, edit, and delete expenses, using LocalStorage to store the data and keep it in the browser.'
            tags={['React', 'Vite', 'TailwindCSS']}
            imgPath='img/Control_Gastos_SM.png'
            linkGithub='https://github.com/Lelmats/Control_Gastos-react-vite'
          />
          <CardProject
            title='RestAPI Form'
            description='Form that consumes a RestAPI, with the ability to add, edit, and delete data.'
            tags={['React', 'Vite', 'TailwindCSS']}
            imgPath='img/Form_RestAPI_SM.png'
            linkGithub='https://github.com/Lelmats/Form_RestAPI-react-vite'
          />
        </div>
        <h1 className='font-JetBrains mx-auto mt-5 text-center w-fit text-white border-b-4 border-secondaryColor rounded-lg mb-12 ml-auto text-xl sm:text-xl md:text-2xl xl:text-3xl'>
          Game Development
        </h1>
        <CardProject
          title='SpookyJamULSA - KidBox'
          description='Theme of the Jam: "Quarantine". A boy appears on a desolate street, amidst his confusion within a completely strange world and piqued by curiosity, he will make the decision to discover what happened to the entire world, avoiding the silhouettes that stalk him during his trip, maintaining a stealth which will help him advance by finding clues with which to calm his curiosity, in order to find an unexpected ending...'
          tags={['Unity', 'C#', 'Photoshop']}
          imgPath='img/Kidbox.png'
            // linkGithub='https://github.com/Lelmats/Form_RestAPI-react-vite'
            itchLink='https://lelmats.itch.io/kidbox'
          />
        <CardProject
            title='CreativeJamULSA - TakeRoot'
            description='Theme of the Jam: "Roots". 3 Plataform levels, with a main character a Fongus 
            that can jump and use his hook to grab and move through the map easily, 
            even use shortcuts, at the end trying to reach his pot and sleep(:!.'
            tags={['Unity','C#', 'Maya']}
            imgPath='img/TakeRoot.png'
            // linkGithub='https://github.com/Lelmats/Form_RestAPI-react-vite'
            itchLink='https://lelmats.itch.io/kidbox'
          />
        <CardProject
            title='WasteShop'
            description='This immersive virtual reality video game is set in a post-apocalyptic wasteland. 
            In this game, players take on the role of a trader in a small store in the middle of the wasteland, 
            selling valuable items and resources, having a time and score, become the manager of the store climbing the real Leaderboard.'
            tags={['Unity','C#', 'VR']}
            imgPath='img/WasteShopBackLogo.png'
            linkGithub='https://github.com/Lelmats/WasteShop/tree/main'
            itchLink='https://lelmats.itch.io/kidbox'
          />
      </div>
    </div>
    </>
  )
}

export default App
