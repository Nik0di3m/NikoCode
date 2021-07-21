import FooterItems from "./FooterItems"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
    return (
        <footer className="bg-orange mt-16 flex flex-col text-light items-center justify-center p-6 ">
            <div className="flex justify-center lg:justify-evenly h-20 items-center w-3/4 lg:w-2/3 flex-wrap">
                <FooterItems text="Home" />
                <FooterItems text="Services" />
                <FooterItems text="Portfolio" />
                <FooterItems text="My Journey" />
            </div>
            <div className="flex w-1/5 justify-evenly mt-6">
                <FacebookIcon fontSize="large" className="hover:scale-110 duration-200 cursor-pointer" />
                <InstagramIcon fontSize="large" className="hover:scale-110 duration-200 cursor-pointer" />
                <TwitterIcon fontSize="large" className="hover:scale-110 duration-200 cursor-pointer" />
            </div>
            <div className="flex flex-col items-center w-full mt-6">
                <h1 className="text-3xl font-semibold">NikoCode</h1>
                <h2 className="text-xl font-light">Web developer</h2>
            </div>
            <div className="flex w-full justify-center items-center font-thin mt-4">
                <span>©2021 NikoCode</span>
            </div>
        </footer>
    )
}

export default Footer
