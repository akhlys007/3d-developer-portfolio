import NavBar from "./components/NavBar"
import Certifications from "./sections/Certifications"
import Contact from "./sections/Contact"
import ExperienceSection from "./sections/ExperienceSection"
import FeatureCards from "./sections/FeatureCards"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import LogoShowcase from "./sections/LogoShowcase"
import ShowcaseSection from "./sections/ShowcaseSection"
import TechStack from "./sections/TechStack"


const App = () => {
  return (
    <>
    <NavBar/>
    <Hero/>
    <ShowcaseSection/>
    <LogoShowcase/>
    <FeatureCards/>
    <ExperienceSection/>
    <TechStack/>
    <Certifications/>
    {/* <Testimonials/> */}
    <Contact/>
    <Footer/>
    </>
  )
}

export default App