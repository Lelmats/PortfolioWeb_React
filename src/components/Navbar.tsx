import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'

const navigation = [
  { name: 'Hello!', href: '#Home', current: true },
  { name: 'About Me', href: '#AboutMe', current: false },
  { name: 'Experience', href: '#Experience', current: false },
  { name: 'Projects', href: '#Projects', current: false },
]
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function Navbar() {
const { t, i18n} = useTranslation();
const lngs: { [key: string]: { nativeName: string } } = { 
  en: {nativeName: 'English'},
  es: {nativeName: 'Español' }
}
return (
  <Disclosure as="nav" className="fixed dark:bg-gray-600 bg-gray-200 font-JetBrains w-screen z-50 ">
    <div className="mx-auto max-w-[90%] sm:px-6 lg:px-8 ">
      <div className="relative flex h-14 items-center justify-between">
        <div 
          className="absolute inset-y-0 left-0 flex items-center sm:hidden" 
        >

          {/* Mobile menu button*/}
          <DisclosureButton 

            className="group relative inline-flex items-center justify-center 
            rounded-md p-2 text-black/60 dark:text-white hover:text-black/60 hover:dark:text-white/60
            focus:outline-none "
            >
            <span className="absolute -inset-0.5" />
            <span className="sr-only ">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="block  h-6 w-6 group-data-[open]:hidden" />
            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
          </DisclosureButton>

        </div>
        <div className="flex flex-1  items-center justify-center sm:items-stretch sm:justify-start" >
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4 ">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className='text-black/60 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white dark:hover:text-white/60 dark:focus:text-white/60 dark:active:text-white/60 lg:px-2
                  transition duration-300
                  '
                >
                  {t(item.name)}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <div className="relative flex items-center ">
          <ul
            className="list-style-none me-auto flex ps-0 lg:flex-row  font-JetBrains "
            data-twe-navbar-nav-ref>
              <li className="mr-2 sm:mr-2 lg:mb-0 " data-twe-nav-item-ref>
                <a
                  className="text-black/60  hover:text-black/80 hover:ease-in-out transition duration-300
                  focus:text-black/80 active:text-black/80 motion-reduce:transition-none
                  dark:text-white dark:hover:text-white/60 dark:focus:text-white/60 dark:active:text-white/60 lg:px-1"
                  aria-label='LinkedIn'
                  href="https://www.linkedin.com/in/max-alejandro-rivera-higuera-8484b9208/"
                  data-twe-nav-link-ref
                  >
                    <i className="fa-brands fa-linkedin fa-xl" ></i>
                  </a
                >
              </li>
              <li className="mr-2 lg:mr-0 lg:mb-0 " data-twe-nav-item-ref>
                <a
                  className="text-black/60  hover:text-black/80 hover:ease-in-out transition duration-300
                   focus:text-black/80 active:text-black/80 motion-reduce:transition-none
                    dark:text-white dark:hover:text-white/60 dark:focus:text-white/60 dark:active:text-white/60 lg:px-1"
                  aria-label='GitHub'
                  href="https://github.com/Lelmats"
                  data-twe-nav-link-ref
                  ><i className="fa-brands fa-github fa-xl"></i></a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className='flex absolute bg-slate-200 dark:bg-slate-600 w-fit h-[40px] z-[51] rounded-lg shadow-xl mt-1 5 right-[20px] transition-all max-sm:hidden'>
        <div className='grid grid-flow-col items-center w-full font-JetBrains'>
          {Object.keys(lngs).map((lng) => (
            <button type='submit' key={lng} onClick={() => i18n.changeLanguage(lng)} className='font-black text-xs hover:bg-backgroundPrimary text-black dark:text-white hover:text-white/60 transition-all duration-500 h-full w-full px-4'>
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
      </div>
    </div>

    <DisclosurePanel 
      transition 
      className="sm:hidden origin-top transition duration-300 ease-in-out data-[closed]:-translate-y-3 data-[closed]:opacity-0  "
    >
      <div 
      className="space-y-1 px-2 pb-3 pt-2 ">
        {navigation.map((item) => (
          <DisclosureButton
            key={item.name}
            as="a"
            href={item.href}
            aria-current={item.current ? 'page' : undefined}
            className={classNames(
              item.current ? ' text-black/60 dark:text-white' : 'motion-reduce:transition-none text-black/60 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 dark:text-white dark:hover:text-white/60 dark:focus:text-white/60 dark:active:text-white/60',
              'block rounded-md px-3 py-2 text-base font-medium',
            )}
          >
            {t(item.name)}
          </DisclosureButton>
        ))}
      </div>
      <div className='flex   h-[40px] z-[51] rounded-lg shadow-xl 5 right-[20px] transition-all '>
        <div className='grid grid-flow-col items-center w-full font-JetBrains'>
        {Object.keys(lngs).map((lng) => (
            <button type='submit' key={lng} onClick={() => i18n.changeLanguage(lng)} className='font-black text-xs hover:bg-backgroundPrimary text-black dark:text-white hover:text-white/60 transition-all duration-500 h-full w-full px-4'>
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
)}

export default Navbar;