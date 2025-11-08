import React from "react";
import AboutUsSection from "./components/about-hero";
import WhyChooseUs from "./components/why-us";
import ContactSection from "./components/contact-section";

const AboutUs = () => {
  return (
    <div className="pt-20">
      <AboutUsSection
        title={"Reliable Packaging and Trading Solutions for Every Industry"}
        paragraphs={[
          "Reliable International Company (RICO) is a dynamic enterprise based in Dammam, Saudi Arabia, specializing in packaging materials and general trading.We provide high-quality metal and plastic packaging solutions designed for industries such as food, chemical, lubricant, and industrial sectors.",

          "Since our establishment, we’ve built our reputation on trust, quality, and timely delivery, offering products that meet global standards while maintaining local reliability.",
        ]}
        imageSrc={
          "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/rico%2FABOUT%20US.png?alt=media&token=664da211-7797-41d5-b763-eaef754c8d99"
        }
      />
      <WhyChooseUs />
      <ContactSection />
    </div>
  );
};

export default AboutUs;
