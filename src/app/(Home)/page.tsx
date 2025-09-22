import Timeline from "@/views/Home/Timeline";
import HeroSection from "../../views/Home/HeroSection";
import ServiceSection from "@/views/Home/ServiceSection";
import AboutUs from "@/views/Home/AboutUs";

const page = () => {
  return (
    <>
      <HeroSection />
      <Timeline />
      <ServiceSection />
      <AboutUs />
    </>
  );
};

export default page;
