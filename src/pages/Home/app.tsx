import About from "../../components/AboutUs";
import Hero from "../../components/Hero";
import InfoSection from "../../components/Info";
import RobotSection from "../../components/Personagem";

export default function Home() {
    return (
        <div>
           <Hero/>
           <About/>
           <InfoSection/>
           <RobotSection/>
        </div>
    )
}