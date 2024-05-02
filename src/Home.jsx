import CtaBanner from "./components/CtaBanner";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import OurService from "./components/OurService";
import Testimonial from "./components/Testimonial";
import WhyUs from "./components/WhyUs";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <OurService />
        <WhyUs />
        <Testimonial />
        <CtaBanner />
        <Faq />
        <Footer />
      </div>
    </>
  );
}
