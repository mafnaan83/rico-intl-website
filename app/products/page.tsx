import React from "react";
import ProductHero from "./components/product-hero";
import ProductCar from "./components/product-horiz";
import FlexSection from "./components/flex-section";

const ProductScreen = () => {
  return (
    <div>
      <ProductHero />
      <ProductCar />
      <FlexSection
        title={"Metal Packaging Solutions"}
        paragraphs={[
          "Our metal packaging range includes tin cans, containers, and industrial drums available in various sizes, shapes, and finishes.",
          "We also offer custom-printed options to match your branding needs. Ideal for food, chemicals, lubricants, and other industrial applications, our metal solutions are engineered for durability, secure storage, and safe transportation. With our products, you can ensure the longevity of your goods while presenting them professionally to your customers",
        ]}
        imageSrc={
          "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/rico%2FTim%20Metal.png?alt=media&token=ad4add0a-1c99-45ec-a64a-20bcbd6d2ef3"
        }
      />
      <FlexSection
        imagePosition="left"
        title={"Plastic Packaging Solutions"}
        paragraphs={[
          "We provide a wide range of high-quality plastic packaging products designed to meet the diverse needs of businesses across various industries in Dammam. Our range includes HDPE, PET, and PP bottles, jars, and closures that are durable, lightweight, and safe for both industrial and consumer use.",
          "Whether you are packaging liquids, powders, chemicals, or food products, our plastic containers are designed for optimal protection and ease of handling. We also offer customization options, including size variations, colors, and labeling solutions, allowing your packaging to reflect your brand identity while ensuring compliance with industry standards.",
        ]}
        imageSrc={
          "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/rico%2FPacking.png?alt=media&token=68d1bf6f-1725-49f2-933a-c65e45f8721d"
        }
      />
      <FlexSection
        title={"Trading Division"}
        paragraphs={[
          "Our Trading Division is dedicated to providing a comprehensive supply chain solution for businesses in Dammam and beyond. We handle the import, export, and distribution of packaging materials, industrial goods, and related equipment, ensuring a seamless and efficient supply process.",
          "We maintain strong relationships with trusted suppliers and manufacturers, allowing us to source high-quality materials at competitive prices. Our team offers end-to-end support, from procurement to delivery, ensuring that your business never faces delays in production or supply shortages.",
        ]}
        imageSrc={
          "https://firebasestorage.googleapis.com/v0/b/jscomputer-603dc.firebasestorage.app/o/rico%2FTradinbg.png?alt=media&token=eb5ef838-50ef-44fc-a16e-00fe647567cd"
        }
      />
    </div>
  );
};

export default ProductScreen;
