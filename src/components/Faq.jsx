import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { faqData } from "../data/faqData";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="preguntas"
      className="relative py-12 md:py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-6">

        <div className="text-center mb-6 md:mb-6">
          <span className="text-sm md:text-base text-[#C8A24A] font-semibold">
            Preguntas frecuentes
          </span>

          <h2 className="
                         text-[#071B3A]
                  font-[700]
                  text-[31px]
                  sm:text-[38px]
                  md:text-[48px]
                  lg:text-[52px]
                  xl:text-[50px]
                  leading-[0.98]
                  tracking-[-0.03em]">
            Información importante antes de comenzar
          </h2>

          <p className="text-center mt-3 md:mt-4 text-sm
                                md:text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
           Encuentra respuestas claras sobre formalización, documentos necesarios, obligaciones tributarias y procesos iniciales de trabajo.
          </p>
        </div>

        <div className="space-y-3 md:space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="
                bg-white/90
                backdrop-blur-sm
                rounded-2xl
                md:rounded-3xl
                border
                border-[#C8A24A]/10
                shadow-[0_10px_35px_rgba(7,27,58,0.06)]
                overflow-hidden
              "
            >
              <button
                onClick={() => toggleFaq(index)}
                className="
                  w-full
                  px-4
                  md:px-6
                  py-4
                  md:py-5
                  flex
                  items-center
                  justify-between
                  gap-4
                  text-left
                "
              >
                <span className="font-semibold text-[#071B3A] text-sm md:text-base leading-snug">
                  {faq.question}
                </span>

                <span className="w-7 h-7 md:w-8 md:h-8 shrink-0 rounded-full bg-[#C8A24A]/10 flex items-center justify-center">
                  {activeIndex === index ? (
                    <FaMinus className="text-[#C8A24A] text-xs md:text-sm" />
                  ) : (
                    <FaPlus className="text-[#C8A24A] text-xs md:text-sm" />
                  )}
                </span>
              </button>

              {activeIndex === index && (
                <div className="px-4 md:px-6 pb-5 md:pb-6">
                  <p className="max-w-4xl text-gray-700 text-sm md:text-base whitespace-pre-line leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Faq;