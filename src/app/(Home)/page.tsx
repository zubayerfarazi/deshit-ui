import Timeline from "@/views/Home/Timeline";
import HeroSection from "../../views/Home/HeroSection";
import ServiceSection from "@/views/Home/ServiceSection";
import AboutUs from "@/views/Home/AboutUs";
import PartnershipSection from "@/views/Home/PartnershipSection";
import SoftwareCompany from "@/views/Home/SoftwareCompany";
import SpecializeSection from "@/views/Home/SpecializeSection";

const sectionClass = "container max-w-screen-xl mx-auto px-4";

const page = () => {
  return (
    <>
      <div className={sectionClass}>
        <HeroSection />
      </div>
      <Timeline />
      <div className={sectionClass}>
        <ServiceSection />
      </div>
      <AboutUs />
      <PartnershipSection />
      <SoftwareCompany />
      <SpecializeSection />
    </>
  );
};

export default page;
