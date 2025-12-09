import HeroSection from "../components/HerorSection";
import MovieingObject from "../components/MovieingObject";
import Overview from "../components/Overview";
import ServicesPage from "./Services";
import IntegratedDigitalSolutions from "../components/IntegratedDigital";

export default function Home() {
  return (
    <section className="">

        <HeroSection />
        <Overview className="mt-60 mb-60" />
        <MovieingObject />
        <IntegratedDigitalSolutions /> 
     
        <ServicesPage />
    </section>
  );
}
