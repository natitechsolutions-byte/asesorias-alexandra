import alexandra from "../assets/ale.png";
import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <div className="relative max-w-[1600px] mx-auto px-6 xl:px-16">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-16 xl:gap-24 items-center">
          
          <div className="max-w-[780px]">
            <span className="text-[#C8A24A] font-semibold">
              Quiénes somos
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#071B3A] mt-4 leading-tight tracking-[-0.03em]">
              Más que una oficina contable, un apoyo profesional para la
              gestión de tu negocio.
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed max-w-2xl">
              Asesorías Alexandra nace con el propósito de apoyar a
              emprendedores, pymes y empresas en el cumplimiento de sus
              obligaciones contables, tributarias y laborales de forma clara,
              ordenada y oportuna.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl">
              Nuestro enfoque no se limita a realizar trámites. Buscamos
              entregar una orientación cercana y comprensible, ayudando a cada
              cliente a entender su situación, conocer sus obligaciones,
              mantener su negocio en regla y tomar mejores decisiones para su
              desarrollo.
            </p>

            <Link
              to="/about/historia"
              className="inline-flex items-center gap-2 mt-8 bg-[#071B3A] text-white px-7 py-3 rounded-full font-semibold hover:bg-[#0b2c5c] transition shadow-[0_12px_30px_rgba(7,27,58,0.16)]"
            >
              Conoce nuestra historia
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute -inset-4 bg-[#C8A24A]/10 rounded-[2rem] blur-2xl"></div>

            <div className="relative bg-white/90 backdrop-blur-md rounded-[2rem] p-5 shadow-[0_28px_70px_rgba(7,27,58,0.13)] border border-white/70 w-full max-w-[560px]">
              
              <div className="overflow-hidden rounded-[1.5rem] bg-[#f8f8f8] h-[280px] md:h-[310px]">
                <img
                  src={alexandra}
                  alt="Alexandra Pedreros Palma"
                  className="w-full h-full object-cover scale-110"
                  style={{
                    objectPosition: "center 35%",
                  }}
                />
              </div>

              <div className="pt-6">
                <span className="text-xs uppercase tracking-[0.24em] text-[#C8A24A] font-bold">
                  Fundadora
                </span>

                <h2 className="text-2xl md:text-3xl font-bold text-[#071B3A] mt-2 leading-tight">
                  Alexandra Pedreros Palma
                </h2>

                <p className="mt-2 text-[#C8A24A] font-semibold">
                  Contadora Pública y Auditora
                </p>

                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Fundadora de Asesorías Alexandra y socia de Consultoría y
                  Gestión A&A Ltda.
                </p>

                <div className="mt-5 rounded-2xl bg-[#071B3A]/5 border-l-4 border-[#C8A24A] p-4">
                  <Quote size={20} className="text-[#C8A24A] mb-2" />

                  <p className="text-sm text-[#071B3A] font-medium leading-relaxed">
                    Orientamos cada proceso con claridad, cercanía y compromiso
                    profesional.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;