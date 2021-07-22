import MenuItems from "./MenuItems"
import { MoonIcon, MenuIcon, SunIcon } from '@heroicons/react/outline'
import { useTheme } from "next-themes"
import { useState } from "react"
import SideBar from "./SideBar"
const Menu = () => {

    const { theme, setTheme } = useTheme();
    const themeHendler = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const [active, setActive] = useState(false)

    const close = () => {
        setActive(!active)
    }



    return (
        <nav className="flex bg-light dark:bg-dark dark:text-light sticky top-0 z-50 transition duration-500 ease-in-out">
            <div className="flex justify-between w-[95%] m-auto p-2 items-center">
                <div className="text-xl hover:scale-110 cursor-pointer transition duration-200">
                    Niko<span className="text-orange">Code</span>
                </div>
                <div className="hidden lg:flex justify-between items-center">
                    <MenuItems text='Home' link="home" />
                    <MenuItems text='About' link="about" />
                    <MenuItems text='Services' link="services" />
                    <MenuItems text='Portfolio' link="portfolio" />
                    <MenuItems text='Contact Me' link="contact" />
                    {theme === 'light' ?
                        <MoonIcon className="h-5 ml-5 hover:scale-110 cursor-pointer hover:text-orange duration-200" onClick={themeHendler} />
                        :
                        <SunIcon className="h-5 ml-5 hover:scale-110 cursor-pointer  hover:text-orange duration-200" onClick={themeHendler} />
                    }
                </div>
                <div className="flex w-2/6 justify-between lg:hidden">
                    {theme === 'light' ?
                        <MoonIcon className="h-8 ml-5 hover:scale-110 hover:text-orange cursor-pointer" onClick={themeHendler} />
                        :
                        <SunIcon className="h-8 ml-5 hover:scale-110 hover:text-orange cursor-pointer" onClick={themeHendler} />
                    }
                    {theme === 'light' ?
                        <MenuIcon className="h-8 text-dark" onClick={() => setActive(!active)} />
                        :
                        <MenuIcon className="h-8 text-light" onClick={() => setActive(!active)} />
                    }
                </div>
                <SideBar open={active} close={close} />
            </div>
        </nav>
    )
}

export default Menu
