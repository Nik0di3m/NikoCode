import Head from 'next/head'
import AboutMe from '../components/AboutMe/AboutMe'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Menu from '../components/Menu/Menu'
import MyJourney from '../components/MyJourney/MyJourney'
import NewProject from '../components/NewProject/NewProject'
import Portfolio from '../components/Portfolio/Portfolio'
import Services from '../components/Services/Services'

const index = () => {
  return (
    <div className="text-dark dark:bg-[#0d1117] dark:text-light transition duration-500 ease-in-out">
      <Head>
        <title>NikoCode</title>
        <meta name="description" content="NikoCode Your web developer" />
        <link rel="icon" href="/logoNiko.ico" />
      </Head>
      <Menu />
      <div className='max-w-[1536px] m-auto min-h-screen'>
        <Hero />
        <AboutMe />
        <MyJourney />
        <Services />
        <Portfolio />
        <NewProject />
        <Contact />
      </div>
      <Footer />

    </div>
  )
}

export default index

