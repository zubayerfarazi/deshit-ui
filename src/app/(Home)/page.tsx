import Timeline from "@/views/Home/Timeline";
import HeroSection from "../../views/Home/HeroSection";
import ServiceSection from "@/views/Home/ServiceSection";
import AboutUs from "@/views/Home/AboutUs";
import PartnershipSection from "@/views/Home/PartnershipSection";
import SoftwareCompany from "@/views/Home/SoftwareCompany";
import SpecializeSection from "@/views/Home/SpecializeSection";
import OurClient from "@/views/Home/OurClient";
import SoftwareService from "@/views/Home/SoftwareService";
import SoftwareTechnology from "@/views/Home/SoftwareTechnology";
import WhyChooseUs from "@/views/Home/WhyChooseUs";
import Award from "@/views/Home/Award";
import Testimonial from "@/views/Home/Testimonial";
import Portfolio from "@/views/Home/Portfolio";
import Contact from "@/views/Home/Contact";
import Blog from "@/views/Home/Blog";
import Navbar from "@/component/layout/Navbar";
import Footer from "@/component/layout/Footer";

const sectionClass = "container max-w-screen-xl mx-auto sm:px-4";

const page = () => {
  return (
    <>
      <Navbar />
      <div className={sectionClass}>
        <HeroSection />
      </div>

      <Timeline />

      <div className={sectionClass}>
        <ServiceSection />
      </div>

      <AboutUs />

      <div className={sectionClass}>
        <OurClient />
      </div>

      <SoftwareService />

      <div className={sectionClass}>
        <SoftwareTechnology />
        <WhyChooseUs />
        <Award />
        <Testimonial />
      </div>

      <PartnershipSection />

      <div className={sectionClass}>
        <SoftwareCompany />
      </div>

      <SpecializeSection />

      <div className={sectionClass}>
        <Portfolio />
        <Blog />
      </div>

      <Contact />

      <Footer />
    </>
  );
};

export default page;
