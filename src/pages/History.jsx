import { Link } from "react-router-dom";
import { GraduationCap, BriefcaseBusiness, HeartHandshake, BookOpen } from "lucide-react";
import alexandra from "../assets/ale.png";

const timeline = [
  {
    icon: BookOpen,
    title: "Inicio del proyecto",
    text: "Asesorías Alexandra nace mientras Alexandra cursaba la carrera de Contador Público y Auditor, comenzando con apoyo contable y tributario a pequeños contribuyentes.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Experiencia profesional",
    text: "Durante su formación participó en funciones financieras, administrativas, tributarias y laborales, fortaleciendo su visión de la gestión empresarial.",
  },
  {
    icon: GraduationCap,
    title: "Formación académica",
    text: "Contadora Pública y Auditora, egresada de la Universidad del Bío-Bío.",
  },
  {
    icon: HeartHandshake,
    title: "Asesorías Alexandra hoy",
    text: "Una oficina contable enfocada en entregar apoyo profesional, claro y cercano a emprendedores, trabajadores independientes y empresas.",
  },
];

const History = () => {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden">
      <div className="absolute top-20 right-0 w-[420px] h-[420px] bg-[#C8A24A]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-[#C8A24A] font-semibold">
              Nuestra historia
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-[#071B3A] mt-4 leading-tight">
              Una trayectoria construida con responsabilidad, cercanía y vocación profesional.
            </h1>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Asesorías Alexandra nace desde la experiencia, la formación profesional
              y el acompañamiento cercano a emprendedores, trabajadores independientes
              y pequeñas empresas.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Su propósito es entregar apoyo contable, tributario, laboral y administrativo
              de forma clara, ordenada y comprensible, ayudando a cada cliente a tomar
              mejores decisiones para su negocio.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/"
                className="bg-[#071B3A] text-white px-8 py-3 rounded-full text-center hover:bg-[#0b2c5c] transition"
              >
                Volver al inicio
              </Link>

              <a
                href="https://wa.me/56931087761"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#C8A24A] text-[#071B3A] px-8 py-3 rounded-full text-center hover:bg-[#C8A24A]/10 transition"
              >
                Solicitar asesoría
              </a>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-white/60">
            <img
              src={alexandra}
              alt="Alexandra Pedreros Palma"
              className="w-full h-[420px] object-cover rounded-2xl"
            />

            <div className="mt-6">
              <h2 className="text-2xl font-bold text-[#071B3A]">
                Alexandra Pedreros Palma
              </h2>

              <p className="mt-2 text-[#C8A24A] font-semibold">
                Contadora Pública y Auditora
              </p>

              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                Fundadora de Asesorías Alexandra y socia de Consultoría y Gestión A&A Ltda.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="text-center mb-12">
            <span className="text-[#C8A24A] font-semibold">
              Trayectoria
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[#071B3A] mt-3">
              El camino de Asesorías Alexandra
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="bg-white/80 rounded-3xl p-6 shadow-lg border border-white/60"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#C8A24A]/10 flex items-center justify-center mb-5">
                    <Icon className="text-[#C8A24A]" size={26} />
                  </div>

                  <h3 className="text-xl font-bold text-[#071B3A]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 bg-[#071B3A] text-white rounded-3xl p-8 md:p-12 shadow-2xl">
          <p className="text-[#C8A24A] font-semibold">
            Propuesta de valor
          </p>

          <h2 className="text-3xl font-bold mt-3">
            No solo realizamos trámites, también acompañamos y orientamos.
          </h2>

          <p className="mt-5 text-white/80 leading-relaxed max-w-4xl">
            El principal diferenciador de Asesorías Alexandra es explicar cada
            proceso de forma clara, para que cada cliente comprenda qué se está
            haciendo, por qué se realiza y cuáles son las implicancias para su negocio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default History;