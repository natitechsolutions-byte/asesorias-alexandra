import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqData } from "../data/faqData";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-24 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-6">

        <div className="text-center mb-14">
          <span className="text-[#C8A24A] font-semibold">
            Preguntas frecuentes
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#071B3A] mt-4">
            ¿Qué necesitamos para ayudarte?
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Encuentra respuestas a las consultas más frecuentes sobre nuestros
            servicios, planes y procesos de trabajo.
          </p>
        </div>

        <div className="space-y-4">

          {faqData.map((faq, index) => (
            <div
              key={index}
              className="
                bg-white/90
                backdrop-blur-sm
                rounded-3xl
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
                  px-6
                  py-5
                  flex
                  items-center
                  justify-between
                  text-left
                "
              >
                <span className="font-semibold text-[#071B3A] text-lg">
                  {faq.question}
                </span>

                {activeIndex === index ? (
                  <Minus
                    size={22}
                    className="text-[#C8A24A]"
                  />
                ) : (
                  <Plus
                    size={22}
                    className="text-[#C8A24A]"
                  />
                )}
              </button>

              {activeIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 whitespace-pre-line leading-relaxed">
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