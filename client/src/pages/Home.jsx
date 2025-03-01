import { Navbar } from "../components"
import Footer from "../components/Footer"
import {  Content, Get, HeroSec } from "../sections"

const Home = () => {
  return (
    <main>
      <Navbar />
      <div className="mx-auto container">
        <HeroSec />
        <Content />
        <Get />
        <Footer/>
      </div>
    </main>
  )
}

export default Home