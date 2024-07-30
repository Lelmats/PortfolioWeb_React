import './App.css'
import CSS from "csstype";
import Navbar from './components/Navbar';
import CardProject from './components/CardProject';
import CardExperience from './components/CardExperience';
import { useTranslation } from 'react-i18next';

function App() {

  const backgroundStyle: CSS.Properties = {
    backgroundImage: "url('img/IconsBackground@2x.png')",
    borderTop: "2px dashed rgba(145, 142, 177, 0.5)",
    backgroundSize: "contain",
  };

  const { t } = useTranslation();
  return (
    <>
      {/* Section 1 - Me */}
      <Navbar/>
      <div className="flex bg-backgroundPrimary items-center sm:pt-20 h-screen" style={backgroundStyle} id='Home'>
        <div className='font-JetBrains grid grid-cols-1 md:grid-cols-2 grid-flow-row w-screen mx-16 sm:mx-26 lg:mx-48 xl:mx-52'>
          <div className="">
              <h1 className='sm:text-5xl md:text-5xl xl:text-7xl text-4xl text-left text-white h-fit'> 
                {t('hi')}
              </h1>
              <h1 className='sm:text-5xl md:text-5xl xl:text-7xl text-4xl text-left text-white h-fit'> 
                {t('my')}
              </h1>
              <h1 className='sm:text-5xl md:text-5xl xl:text-7xl text-4xl text-left text-white h-fit'> 
                {t('name')}
              </h1>
              <h1 className='sm:text-5xl md:text-5xl xl:text-7xl text-4xl line-1 anim-typewriter text-left text-white mb-3'>
                Max Rivera
              </h1>
              <p className='font-JetBrains text-left text-white h-fit'> 
                {t('softFull')}
              </p>
          </div>
          <div className='flex justify-end'>
            {/* <img className='object-cover h-[35vh] min-h-fit sm:h-[55vh] md:h-[65vh]  min-w-fit hover:scale-105 transition-transform duration-500' src="img\MaxCharacter.png" alt="" /> */}
            <img className='object-contain max-sm:w-[20rem] h-[100%] sm:w-[20rem] md:w-[25rem] xl:w-[30rem] min-hover:scale-105 transition-transform duration-500' src="img\MaxCharacter.webp" alt="" />
          </div>
        </div>
      </div>

      {/* Section 2 - About Me/Technologies */}
      <div className="flex bg-backgroundPrimary p-10 xl:p-28 " style={backgroundStyle} id='AboutMe'>
        <div className='absolute mb-10 mt-40 xl:mt-28 left-[47%] xl:left-[45%] z-49' >
          <img src="img/ArrowW.png" alt="" className='w-[200px] xl:w-[200px] 2xl:w-[250px] rotate-[-100deg] max-lg:hidden '/>
        </div>
        <div className='md:grid md:grid-flow-row'>
          <div className='mb-20 md:grid md:grid-flow-col'>
            <h1 className='font-RobotoSlab text-white rounded-lg mr-10 my-4 border-b-8 border-secondaryColor text-3xl sm:text-4xl md:text-4xl xl:text-5xl w-fit h-fit '>
              {t('aboutme')} 
            </h1>
            <p className='font-RobotoSlab text-white text-md min-[600px]:text-lg sm:text-lg md:text-xl xl:text-xl 2xl:w-3/4 ml-auto text-balance text-right max-md:text-center'>
              {t('aboutmeDes')}
              {/* I'm a Software Developer, with a strong background
              in <b>Front-End</b> development and some experience in <b>Back-End</b>, 
              also experience in game development with <b>Unity</b> , 
              Currently I'm deepening my knowledge in data structures
              and constantly sharpening my skills.
              I have a passion for learning new technologies,
              and I am committed to continuous improvement 🚀. */}
            </p>
            
          </div>
          <div className='lg:grid lg:grid-flow-col'>
            <div className='flex items-center order-last ml-auto 2xl:mx-auto'>
              <div className='sm:mb-5 max-xl:mx-auto '>
                <h1 className='font-RobotoSlab mx-auto w-fit text-white border-b-8 border-secondaryColor rounded-lg mb-5 mt-5 md:mb-5 ml-auto text-2xl sm:text-4xl md:text-4xl xl:text-5xl max-sm:text-center'>{t('techTools')}</h1> 
                <h2 className='font-RobotoCondensed text-white mb-6 ml-auto text-xl sm:text-2xl md:text-xl xl:text-xl max-lg:text-center'>{t('techToolsDes')}</h2>
                <div className='flex mx-auto items-center justify-center'></div>
              </div>
            </div>
            <div className='flex items-center justify-center m-44 max-sm:my-36 max-md:my-48 max-sm:mx-auto h-fit'>
                <img src="/img/Exterior.png" alt="" className='absolute max-sm:w-[16rem] w-[25rem] sm:w-[25rem] xl:w-[30rem]  object-contain origin-center transition-all animate-spin-slow-2'/>
                <img src="/img/Middle.png" alt="" className='absolute max-sm:w-[10.5rem] w-[17rem] sm:w-[17rem] xl:w-[20.5rem] object-contain origin-center transition-all animate-spin-slow-1'/>
                <img src="/img/Inner.png" alt="" className='absolute max-sm:w-[5rem] w-[10rem] sm:w-[9rem] xl:w-[11rem] object-contain origin-center transition-all animate-spin-slow'/>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 - Experience */}
      <div className="flex  font-JetBrains bg-backgroundPrimary py-16 sm:text-5xl md:text-5xl xl:text-6xl text-4xl items-center " style={backgroundStyle} id='Experience' >
        <div className='mx-auto sm:w-2/3 '>
          <div className=''>
            <h1 className='mx-auto w-fit text-white border-b-8 border-secondaryColor rounded-lg mb-5 md:mb-5 ml-auto text-2xl sm:text-4xl md:text-4xl xl:text-5xl mt-5'>
              {t('experience')}
            </h1> 
          </div>
          <div className="text-center mb-5">
            <CardExperience
            title={t('jobTitle_1')}
            company='RUBISCO'
            date={t('jobDate_1')}
            imgPath='img/Rubisco.png'
            />
            <CardExperience
            title={t('jobTitle_2')}
            company='MEDIAEREA / Drone Solutions & Monitoring Technologies'
            date={t('jobDate_2')}
            imgPath='img/MAIcon.jpeg'
            />
            <CardExperience
            title={t('jobTitle_3')}
            company='MEDIAEREA / Drone Solutions & Monitoring Technologies'
            date={t('jobDate_3')}
            imgPath='img/MAIcon.jpeg'
            />
            <CardExperience
            title={t('jobTitle_4')}
            company='Me - Contracts'
            date={t('jobDate_4')}
            imgPath='img/smileFace.svg'
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
            {t('projectsmore')}
          </h1>
          <h1 className='font-JetBrains mx-auto text-center w-fit text-white border-b-4 border-secondaryColor rounded-lg mb-4 ml-auto text-xl sm:text-xl md:text-2xl xl:text-3xl'>
            Web Development
          </h1>
          <h1 className='font-JetBrains mx-auto text-center w-fit text-white border-secondaryColor rounded-lg mb-4 ml-auto text-4xl sm:text-4xl md:text-4xl xl:text-5xl'>
            🌐
          </h1>
          <div className='grid'>
            <CardProject
              title={t('cryptoControl')}
              description={t('cryptoControlDes')}
              tags={['React', 'Vite', 'TailwindCSS']}
              imgPath='img/Control_Crypto_SM.png'
              linkGithub='https://github.com/Lelmats/Crypto_Info-react-vite'
            />
            <CardProject
              title={t('expenseTracker')}
              description={t('expenseTrackerDes')}
              tags={['React', 'Vite', 'TailwindCSS']}
              imgPath='img/Control_Gastos_SM.png'
              linkGithub='https://github.com/Lelmats/Control_Gastos-react-vite'
            />
            <CardProject
              title={t('formRestAPI')}
              description={t('formRestAPIDes')}
              tags={['React', 'Vite', 'TailwindCSS']}
              imgPath='img/Form_RestAPI_SM.png'
              linkGithub='https://github.com/Lelmats/Form_RestAPI-react-vite'
            />
          </div>
          <h1 className='font-JetBrains mx-auto mt-5 text-center w-fit text-white border-b-4 border-secondaryColor rounded-lg mb-12 ml-auto text-xl sm:text-xl md:text-2xl xl:text-3xl'>
            {t('gameDev')}
          </h1>
          <CardProject
            title={t('kidboxTitle')}
            description={t('kidboxDes')}
            tags={['Unity', 'C#', 'Photoshop']}
            imgPath='img/Kidbox.png'
              // linkGithub='https://github.com/Lelmats/Form_RestAPI-react-vite'
              itchLink='https://lelmats.itch.io/kidbox'
            />
          <CardProject
              title={t('takeRootTitle')}
              description={t('takeRootDes')}
              tags={['Unity','C#', 'Maya']}
              imgPath='img/TakeRoot.png'
              // linkGithub='https://github.com/Lelmats/Form_RestAPI-react-vite'
              itchLink='https://lelmats.itch.io/kidbox'
            />
          <CardProject
              title={t('wasteShopTitle')}
              description={t('wasteShopDes')}
              tags={['Unity','C#', 'VR']}
              imgPath='img/WasteShopBackLogo.png'
              linkGithub='https://github.com/Lelmats/WasteShop/tree/main'
              itchLink='https://lelmats.itch.io/kidbox'
            />
        </div>
      </div>
        
      {/* Section 5 - Contact */}
      <footer className='bg-[#2b3747] h-10 w-vw'>
        <div className='flex justify-center items-center h-full'>
          <p className='text-white font-RobotoSlab font-bold text-center text-xs'>Made with React & Tailwind - Max Rivera - 2024</p>
        </div>
      </footer>
    </>
  )
}

export default App
