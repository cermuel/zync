import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t-[1px] border-gray-500 py-10 flex justify-between">
      <p className="font-semibold text-sm">
        Made By{" "}
        <a
          href="https://cermuel.vercel.app"
          className="underline"
          target="_blank"
        >
          Cermuel
        </a>{" "}
        &copy; {new Date().getFullYear()}
      </p>
      <button
        style={{ cursor: "pointer" }}
        onClick={() => alert("Get Started clicked")}
        className="text-white font-bold bg-[#737cde] text-sm h-12 rounded-full px-14 cursor-pointer transition-all duration-300 hover:translate-0 hover:shadow-none -translate-y-0.5 shadow-[0_8px_30px_rgb(0,0,0,0.4)]"
      >
        Get Started
      </button>
    </footer>
  );
};

export default Footer;
