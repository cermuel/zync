import { useState } from "react";
import { faqs } from "../../utils/data/faq";
import { HiChevronDown } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<any>(null);

  const toggle = (index: number) => {
    setActiveIndex((prev: any) => (prev === index ? null : index));
  };
  return (
    <main
      id="faq"
      className="w-full px-14 h-auto mb-40 p-4 flex flex-col justify-start gap-20 items-center"
    >
      <h1 className="underline font-semibold text-xl">FAQ</h1>
      <ul className="gap-6 flex flex-col w-full">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#737cde3f] rounded-xl p-5 transition-all duration-300"
          >
            <button className="flex justify-between w-full items-center text-left">
              <div className="flex items-center gap-3">
                <h3 className="text-white font-semibold">{faq.question}</h3>
              </div>
              <span
                onClick={() => toggle(index)}
                className={`transition-transform duration-300 cursor-pointer ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                <HiChevronDown size={24} className="text-white" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden text-white/80 mt-2"
                >
                  <p className="text-sm">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </ul>
    </main>
  );
};

export default FAQ;
