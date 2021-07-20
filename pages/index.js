import Head from 'next/head'
import AboutMe from '../components/AboutMe/AboutMe'
import Contact from '../components/Contact/Contact'
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

    </div>
  )
}

export default index

