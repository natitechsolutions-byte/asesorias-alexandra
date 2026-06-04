import { Link, useNavigate, useParams } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import {
  FaWhatsapp,
  FaArrowLeft 
} from "react-icons/fa";


const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const service = servicesData.find((item) => item.slug === slug);

  const goBackToServices = () => {
    navigate("/");

    setTimeout(() => {
      const section = document.getElementById("services");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 200);
  };

  if (!service) {
    return (
      <section className="pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-[#071B3A]">
            Servicio no encontrado
          </h1>

          <button
            onClick={goBackToServices}
            className="text-[#C8A24A] font-semibold mt-6 inline-block"
          >
            Volver a servicios
          </button>
        </div>
      </section>
    );
  }

  const Icon = service.icon;

  return (
    <section className="relative pt-32 pb-24">
      <div className="max-w-[1500px] mx-auto px-6 xl:px-16">
        <button
          onClick={goBackToServices}
          className="inline-flex items-center gap-2 text-[#C8A24A] font-semibold mb-8 hover:text-[#071B3A] transition"
        >
          <FaArrowLeft size={18} />
          Volver a servicios
        </button>

        <div className="bg-white/90 rounded-[2rem] p-8 md:p-12 shadow-[0_25px_70px_rgba(7,27,58,0.12)] border border-white/70">
          <div className="flex items-center gap-5 mb-4">
            <div className="w-16 h-16 shrink-0 rounded-2xl bg-[#071B3A] text-white flex items-center justify-center">
              <Icon size={30} />
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-[#071B3A] leading-tight">
              {service.title}
            </h1>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed max-w-6xl mx-20">
            " {service.description} "
          </p>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-[#071B3A]">
              ¿Qué incluye?
            </h2>

            <div className="mt-6 grid md:grid-cols-2 gap-4">
              {service.items.map((item) => (
                <div
                  key={item}
                  className="bg-[#071B3A]/5 rounded-2xl p-4 text-gray-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/56931087761"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#071B3A] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0b2c5c] transition"
            >
              <FaWhatsapp size={20} />
              Consultar por este servicio
            </a>

            <button
              onClick={goBackToServices}
              className="inline-flex items-center justify-center border border-[#C8A24A] text-[#071B3A] px-8 py-4 rounded-full font-semibold hover:bg-[#C8A24A]/10 transition"
            >
              Ver otros servicios
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;