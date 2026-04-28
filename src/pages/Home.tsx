import Contact from "../components/shareComponents/Contact"
import FAQ from "../components/home/Faq"
import Gallery from "../components/home/Gallery"
import Hero from "../components/home/HeroSection"
import Services from "../components/home/Services "
import Testimonials from "../components/home/Testimonials"
import WorkProcess from "../components/home/WorkProcess"
const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <WorkProcess />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Contact />
    </div>
  )
}

export default Home