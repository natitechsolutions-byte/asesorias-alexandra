import { Link } from "react-router-dom";
import {
  UserRound,
  MessageSquareText,
  Handshake,
  BriefcaseBusiness,
  ArrowRight,
} from "lucide-react";

const items = [
  {
    icon: UserRound,
    title: "Atención personalizada",
    text: "Soluciones adaptadas a la realidad de cada cliente.",
  },
  {
    icon: MessageSquareText,
    title: "Comunicación clara",
    text: "Explicamos cada proceso de forma sencilla y comprensible.",
  },
  {
    icon: Handshake,
    title: "Acompañamiento permanente",
    text: "Apoyo continuo ante consultas y nuevas necesidades.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Soluciones para empresas",
    text: "Asesoría contable, tributaria, laboral y administrativa.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute top-10 left-0 w-[360px] h-[360px] rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#C8A24A] font-semibold">
              Quiénes somos
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#071B3A] mt-4 leading-tight">
              Más que una oficina contable, un acompañamiento profesional.
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Asesorías Alexandra nace con el propósito de ayudar a
              emprendedores, trabajadores independientes y empresas a cumplir
              sus obligaciones contables, tributarias y laborales de forma
              clara, ordenada y cercana.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Nuestro enfoque no solo consiste en realizar trámites, sino en
              explicar cada proceso para que nuestros clientes comprendan su
              situación y puedan tomar mejores decisiones.
            </p>

            <Link
              to="/about/historia"
              className="inline-flex items-center gap-2 mt-8 bg-[#071B3A] text-white px-7 py-3 rounded-full font-semibold hover:bg-[#0b2c5c] transition"
            >
              Conoce nuestra historia
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -inset-4  rounded-[2rem] blur-2xl"></div>

            <div className="relative bg-white/90 backdrop-blur-md rounded-[2rem] p-8 shadow-[0_25px_60px_rgba(7,27,58,0.12)] border border-[#C8A24A]/10">
              <span className="text-[#C8A24A] font-semibold">
                Nuestro compromiso
              </span>

              <h3 className="text-3xl font-bold text-[#071B3A] mt-2">
                Lo que nos diferencia
              </h3>

              <div className="mt-8 space-y-5">
                {items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 p-4 rounded-2xl hover:bg-[#C8A24A]/5 transition"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-[#C8A24A]/10 flex items-center justify-center shrink-0">
                        <Icon size={25} className="text-[#C8A24A]" />
                      </div>

                      <div>
                        <h4 className="font-bold text-[#071B3A]">
                          {item.title}
                        </h4>

                        <p className="text-sm text-gray-600 mt-1">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;