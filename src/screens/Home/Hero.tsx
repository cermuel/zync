import React from "react";
import bg from "../../assets/bg.svg";

const Hero = () => {
  return (
    <main className="w-full px-44 h-[80vh] flex flex-col justify-start items-center relative">
      <img
        src={bg}
        alt="background"
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      />
      <nav className="flex items-center justify-between bg-[#737cde5f] p-3 w-full rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.4)]">
        LOGO
        <ul className="flex font-medium gap-6 text-sm">
          <li>
            <a href="#benefits">Benefits</a>
          </li>
          <li>
            <a href="#how">How it works</a>
          </li>
          <li>
            <a href="#faq">FAQs</a>
          </li>
          <li>
            <a href="#app">Download App</a>
          </li>
        </ul>
        <button className="text-white font-bold bg-[#737cde] cursor-pointer text-sm h-12 rounded-full px-6">
          Get Started
        </button>
      </nav>
      <div className="px-20 gap-10 flex flex-col items-center">
        <h1 className="text-white font-[900] text-[55px]  mt-20 text-center tracking-tighter leading-[100%]">
          Collaborate <br />
          Organize & Achieve.
        </h1>
        <p className="text-center text-white">
          Stay in sync with your team — manage tasks, share ideas, and ship
          projects faster, all in one place. Built for smooth, real-time
          collaboration.
        </p>
        <button
          style={{ cursor: "pointer" }}
          onClick={() => alert("Get Started clicked")}
          className="text-white font-bold bg-[#737cde] text-sm h-12 rounded-full px-14 cursor-pointer transition-all duration-300 hover:translate-0 hover:shadow-none -translate-y-0.5 shadow-[0_8px_30px_rgb(0,0,0,0.4)]"
        >
          Get Started
        </button>
      </div>
    </main>
  );
};

export default Hero;
