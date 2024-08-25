import './App.css'
import CSS from "csstype";
import Navbar from './components/Navbar';
import CardProject from './components/CardProject';
import CardExperience from './components/CardExperience';
import CardTechs from './components/CardTechs';
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
            <img className='object-contain max-sm:w-[20rem] h-[100%] sm:w-[20rem] md:w-[25rem] xl:w-[30rem] hover:scale-105 transition-transform duration-500' src="img\MaxCharacter.webp" alt=" Hi!, i'm Max A Full Stack Developer " />
          </div>
        </div>
      </div>

      {/* Section 2 - About Me/Technologies */}
      <div className="flex bg-backgroundPrimary p-10 xl:p-28 " style={backgroundStyle} id='AboutMe'>
        <div className='absolute mb-10 mt-40 lg:mt-20 xl:mt-20 left-[43%] lg:left-[45%] xl:left-[45%] z-49' >
          <img src="img/ArrowW.png" alt="" className='w-[180px] xl:w-[200px] 2xl:w-[200px] rotate-[-100deg] max-lg:hidden '/>
        </div>
        <div className='md:grid md:grid-flow-row'>
          <div className='mb-20 md:grid md:grid-flow-col'>
            <h1 className='font-RobotoSlab text-white rounded-lg mr-10 my-4 border-b-8 border-secondaryColor text-3xl sm:text-4xl md:text-4xl xl:text-5xl w-fit h-fit '>
              {t('aboutme')} 
            </h1>
            <p className='font-RobotoSlab text-white text-md min-[600px]:text-lg 
            sm:text-lg md:text-xl xl:text-xl 2xl:w-3/4 ml-auto text-balance 
            text-right max-md:text-center'>
              {t('aboutmeDes')}
            </p>
          </div>
          <div className='lg:grid lg:grid-flow-col '>
            <div className='flex items-center order-last ml-auto 2xl:mx-auto'>
              <div className='sm:mb-5 mx-auto '>
                <h1 className='font-RobotoSlab mx-auto w-fit text-white border-b-8
                border-secondaryColor rounded-lg mb-5 mt-5 md:mb-5 ml-auto text-2xl 
                sm:text-4xl md:text-4xl xl:text-5xl max-sm:text-center'>{t('techTools')}</h1> 
                <h2 className='font-RobotoCondensed text-white mb-6 ml-auto text-xl sm:text-2xl md:text-xl xl:text-xl max-lg:text-center'>{t('techToolsDes')}</h2>
                {/* Technologies */}
                <div className='grid grid-flow-col gap-3 max-lg:mx-auto lg:ml-auto mb-0 max-lg:mb-10'>
                  <div id='ExteriorTechs' >
                    <CardTechs
                    title='JavasScript'
                    color='#3178c6'
                    />
                    <CardTechs
                    title='Typescript'
                    color='#3178c6'
                    />
                    <CardTechs
                    title='C++'
                    color='#3178c6'
                    />
                    <CardTechs
                    title='C#'
                    color='#3178c6'
                    />
                    <CardTechs
                    title='Python'
                    color='#3178c6'
                    />
                    <CardTechs
                    title='PHP'
                    color='#3178c6'
                    />
                  </div>
                  <div id='MediumTechs'>
                    <CardTechs
                    title='React'
                    color='#0db7ed'
                    />
                    <CardTechs
                    title='ASP.NET'
                    color='#0db7ed'
                    />
                    <CardTechs
                    title='TailwindCSS'
                    color='#0db7ed'
                    />
                    <CardTechs
                    title='Figma'
                    color='#0db7ed'
                    />
                    <CardTechs
                    title='NodeJS'
                    color='#f29111'
                    />
                    <CardTechs
                    title='MongoDB'
                    color='#f29111'
                    />
                    <CardTechs
                    title='Django'
                    color='#f29111'
                    />
                    <CardTechs
                    title='MySQL'
                    color='#f29111'
                    />
                  </div>
                  <div id='interiorTechs'>
                    <CardTechs
                    title='Github'
                    color='#00c7b7'
                    />
                    <CardTechs
                    title='Docker'
                    color='#00c7b7'
                    />
                    <CardTechs
                    title='Netlify'
                    color='#6762a6'
                    />
                    <CardTechs
                    title='Heroku'
                    color='#6762a6'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-center m-52 max-sm:my-40 max-lg:my-60 max-sm:mx-auto'>
                <img src="/img/Exterior.png" alt="Programming Languages" className='absolute w-[20rem] max-[450px]:w-[14rem] sm:w-[25rem] xl:w-[30rem] object-contain origin-center transition-all animate-spin-slow-2'/>
                <img src="/img/Middle.png" alt="Front-End / Back-End Technologies" className='absolute w-[13.5rem] max-[450px]:w-[9rem] sm:w-[16rem] xl:w-[19.5rem] object-contain origin-center transition-all animate-spin-slow-1'/>
                <img src="/img/Inner.png" alt="Tools/Deploy" className='absolute w-[8rem] max-[450px]:w-[5rem] sm:w-[8rem] xl:w-[11rem] object-contain origin-center transition-all animate-spin-slow'/>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 - Experience */}
      <div className="flex  font-JetBrains bg-backgroundPrimary py-16 sm:text-5xl md:text-5xl xl:text-6xl text-4xl items-center " style={backgroundStyle} id='Experience' >
        <div className='mx-auto md:w-2/3 '>
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
        {/* ImageArrow */}
        <div className='absolute mb-44 left-[80%] lg:left-[82%] xl:left-[82%] z-49'>
          <img src="img/ClickWG.png" alt="ArrowGithub" className='w-[150px] xl:w-[200px] 2xl:w-[250px] max-md:hidden' />
        </div>

        <div className='mx-auto'>
          <h1 className='font-JetBrains mx-auto text-center w-fit text-white border-b-8 border-secondaryColor rounded-lg mb-8 ml-auto text-2xl sm:text-4xl md:text-4xl xl:text-5xl'>
            {t('projectsmore')}
          </h1>
          <h1 className='font-JetBrains mx-auto text-center w-fit text-white border-b-4 border-secondaryColor rounded-lg mb-4 ml-auto text-xl sm:text-xl md:text-2xl xl:text-3xl'>
            Web Development
          </h1>

          <h1 className='font-JetBrains mx-auto my-6 text-center w-fit text-white border-secondaryColor rounded-lg mb-4 ml-auto text-4xl sm:text-4xl md:text-4xl xl:text-5xl'>
            🌐
          </h1>

          {/* Projects */}
          <div className="grid grid-cols-1 2xl:grid-cols-2 md:w-3/4 mx-auto" >
            <CardProject
              title={t('projectTitle_1')}
              description={t('projectDes_1')}
              tags={['React', 'NextJS', 'TailwindCSS']}
              imgPath='img/My-Campus-LogoBG.jpg'
              linkGithub='https://github.com/Lelmats/MyCampus'
            />
            <CardProject
              title={t('projectTitle_2')}
              description={t('projectDes_2')}
              tags={['React', 'API', 'TailwindCSS']}
              imgPath='img/Control_Crypto_SM.png'
              linkGithub='https://github.com/Lelmats/Crypto_Info-react-vite'
            />
            <CardProject
              title={t('projectTitle_3')}
              description={t('projectDes_3')}
              tags={['React', 'Vite', 'TailwindCSS']}
              imgPath='img/Control_Gastos_SM.png'
              linkGithub='https://github.com/Lelmats/Control_Gastos-react-vite'
            />
            <CardProject
              title={t('projectTitle_4')}
              description={t('projectDes_4')}
              tags={['React', 'APIRest', 'TailwindCSS']}
              imgPath='img/Form_RestAPI_SM.png'
              linkGithub='https://github.com/Lelmats/Form_RestAPI-react-vite'
            />
            <CardProject
              title={t('projectTitle_5')}
              description={t('projectDes_5')}
              tags={['Django', 'Bootstrap']}
              imgPath='img/ScreenHome.png'
              linkGithub='https://github.com/Lelmats/DjangoForm'
            />

            <h1 className='font-JetBrains mx-auto text-center w-fit text-white my-8 ml-auto text-xl sm:text-3xl md:text-3xl xl:text-4xl'>
            More soon...
            </h1>
          </div>

          <br />

          <h1 className='font-JetBrains mx-auto mt-5 text-center w-fit text-white border-b-4 border-secondaryColor rounded-lg mb-12 ml-auto text-xl sm:text-xl md:text-2xl xl:text-3xl'>
            {t('gameDev')}
          </h1>

           {/* Games */}
          <div className='grid grid-cols-1  md:w-3/4 mx-auto'>
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
                itchLink='https://lelmats.itch.io/take-root'
              />
            <CardProject
                title={t('wasteShopTitle')}
                description={t('wasteShopDes')}
                tags={['Unity','C#', 'VR']}
                imgPath='img/WasteShopBackLogo.png'
                linkGithub='https://github.com/Lelmats/WasteShop/tree/main'
                // itchLink='https://lelmats.itch.io/kidbox'
              />
          </div>
        </div>
      </div>
        
      {/* Section 5 - Contact */}
      <footer className='bg-[#2b3747] h-fit w-vw py-2'>
        <div className='grid justify-center items-center h-full py-1'>
          <p className='text-white font-RobotoSlab font-bold text-center text-xs py-1'>© 2024 Max Rivera</p>
          <span className='text-white font-RobotoSlab font-medium text-center text-xs py-1'>{t('contact')} maxalejandrorh@gmail.com </span>
        </div>
        <div className="grid grid-flow-col justify-center items-center mx-auto py-1">
          <a
            className="text-black/60  hover:text-black/80 hover:ease-in-out transition duration-300
            focus:text-black/80 active:text-black/80 motion-reduce:transition-none
            dark:text-white dark:hover:text-white/60 dark:focus:text-white/60 dark:active:text-white/60 lg:px-1"
            aria-label='LinkedIn'
            href="https://www.linkedin.com/in/max-alejandro-rivera-higuera-8484b9208/"
            data-twe-nav-link-ref
            >
              <i className="fa-brands fa-linkedin fa-xl" >
              </i>
          </a>
          <a
            className="text-black/60  hover:text-black/80 hover:ease-in-out max-sm:pl-2 transition duration-300
              focus:text-black/80 active:text-black/80 motion-reduce:transition-none
              dark:text-white dark:hover:text-white/60 dark:focus:text-white/60 dark:active:text-white/60 lg:px-1"
            aria-label='GitHub'
            href="https://github.com/Lelmats"
            data-twe-nav-link-ref
            >
              <i className="fa-brands fa-github fa-xl">
              </i>
            </a>
        </div>
      </footer>
    </>
  )
}

export default App
