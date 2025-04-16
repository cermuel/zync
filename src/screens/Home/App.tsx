import { FaApple, FaGooglePlay } from "react-icons/fa";
import { motion } from "framer-motion";
// import phoneMockup from "@/assets/zync-phone-ui.png"; // Replace with your image

const MobileAppSection = () => {
  return (
    <section
      id="app"
      className="py-20 px-5 md:px-10 mb-40 rounded-xl bg-[#737cde1f] text-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">Zync, Wherever You Are</h2>
          <p className="text-white/80 text-lg leading-relaxed">
            Stay connected with your team on the go. With the Zync mobile app,
            you can manage tasks, chat in real-time, upload files, and join
            calls — all from your pocket. It's everything you love about Zync,
            now made for mobile.
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-3 bg-[#737cde] hover:bg-[#5f6bdc] transition rounded-xl"
            >
              <FaApple size={20} />
              <span>App Store</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-3 bg-[#737cde] hover:bg-[#5f6bdc] transition rounded-xl"
            >
              <FaGooglePlay size={20} />
              <span>Google Play</span>
            </a>
          </div>
        </div>

        {/* Right image */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="w-full max-w-xs mx-auto"
        >
          {/* <img
            src={phoneMockup}
            alt="Zync Mobile UI"
            className="rounded-2xl shadow-xl"
          /> */}
        </motion.div>
      </div>
    </section>
  );
};

export default MobileAppSection;
