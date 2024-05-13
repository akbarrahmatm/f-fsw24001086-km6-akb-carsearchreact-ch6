import "/public/assets/js/script";
import CtaBanner from "../components/CtaBanner";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import OurService from "../components/OurService";
import Testimonial from "../components/Testimonial";
import Title from "../components/Title";
import WhyUs from "../components/WhyUs";
import "/assets/vendor/owlcarousel/dist/assets";

export default function Home() {
  return (
    <>
      <Title page="Home" />;
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
