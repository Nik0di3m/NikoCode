import { XIcon } from "@heroicons/react/outline"
import MenuItems from "./MenuItems"

const SideBar = ({ open, close }) => {
    return (
        <nav className={`${open ? "transform translate-x-0 left-0" : "transform translate-x-[1000px]"} lg:hidden justify-center items-center fixed flex top-0 transition duration-500 ease-in-out h-screen bg-light dark:bg-dark w-screen`}>
            <XIcon onClick={close} className='h-8 fixed right-2 top-2' />
            <div className='flex flex-col justify-evenly items-center h-2/3'>
                <MenuItems text='Home' />
                <MenuItems text='About' />
                <MenuItems text='Services' />
                <MenuItems text='Portfolio' />
                <MenuItems text='Contactme' />
            </div>

        </nav>
    )
}

export default SideBar
