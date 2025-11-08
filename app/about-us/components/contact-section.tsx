"use client";
import WhiteButton from "@/app/helper-ui/button";
import { useRouter } from "next/navigation";

const ContactSection = () => {
  const router = useRouter();
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="flex justify-center">
        {/* Black rounded card */}
        <div className="relative bg-black rounded-[2rem] px-8 py-20 md:py-32 max-w-5xl w-full text-center shadow-2xl overflow-hidden">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 border border-white/20 rounded-full"></div>
            <div className="absolute top-1/3 right-1/3 w-64 h-64 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-1/4 left-1/4 w-48 h-48 border border-white/20 rounded-full"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Talk to our team
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10">
              Get a quote for what you want
            </p>
            <div className="flex justify-center">
              <WhiteButton
                onClick={() => router.push("/contact")}
                label="Contact Us"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
