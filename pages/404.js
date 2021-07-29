import Head from "next/head"
import Button from "../components/Button/Button"
import Footer from "../components/Footer/Footer"
import Menu from "../components/Menu/Menu"

const FourOfFour = () => {
    return (
        <div className="text-dark dark:bg-[#0d1117] dark:text-light transition duration-500 ease-in-out">
            <Head>
                <title>NikoCode</title>
                <meta name="description" content="NikoCode Your web developer" />
                <link rel="icon" href="/logoNiko.ico" />
            </Head>
            <Menu />
            <div className='max-w-[1536px] flex flex-col justify-center items-center m-auto min-h-screen'>
                <h1 className="text-3xl">What are you trying to do??</h1>
                <Button
                    text="Take Me Back"
                    style='mt-6 shadow-md w-40'
                    color="bg-orange text-light"
                    link="/"
                />
            </div>
            <Footer />

        </div>
    )
}

export default FourOfFour
