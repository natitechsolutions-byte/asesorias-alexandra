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
      <div className="max-w-[1600px] mx-auto px-5 md:px-6">

        <div className="text-center mb-10 md:mb-14">
          <span className="text-sm md:text-base text-[#C8A24A] font-semibold">
            Preguntas frecuentes
          </span>

          <h2 className="text-[2rem] sm:text-4xl md:text-5xl font-bold text-[#071B3A] mt-3 md:mt-4 leading-tight">
            ¿Qué necesitamos para ayudarte?
          </h2>

          <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Encuentra respuestas a las consultas más frecuentes sobre nuestros
            servicios, planes y procesos de trabajo.
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
                <span className="font-semibold text-[#071B3A] text-sm md:text-lg leading-snug">
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
                  <p className="text-gray-600 text-sm md:text-base whitespace-pre-line leading-relaxed">
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