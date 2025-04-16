import { useEffect, useState } from "react";
import MobileAppSection from "./App";
import Benefits from "./Benefits";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Hero from "./Hero";
import How from "./How";
import { FaArrowUpLong } from "react-icons/fa6";

const Home = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <main className="md:px-28 pt-16">
      <button
        onClick={scrollToTop}
        className={`fixed bottom-10 left-10 z-50 p-3 bg-[#737cde] cursor-pointer text-white rounded-full shadow-2xl hover:shadow-none transition-all duration-300 hover:scale-100 scale-110 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <FaArrowUpLong />
      </button>
      <Hero />
      <Benefits />
      <How />
      <FAQ />
      <MobileAppSection />
      <Footer />
    </main>
  );
};

export default Home;
