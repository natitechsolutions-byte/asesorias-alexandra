import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import { FaWhatsapp, FaArrowLeft } from "react-icons/fa";


const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
    useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [slug]);
  const service = servicesData.find((item) => item.slug === slug);

  const goBackToServices = () => {
    navigate("/services");

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
      <section className="pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto px-5 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#071B3A]">
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
    <section className="relative pt-28 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-[1500px] mx-auto px-5 md:px-6 xl:px-16">
        <button
          onClick={goBackToServices}
          className="inline-flex items-center gap-2 text-[#C8A24A] text-sm md:text-base font-semibold mb-5 md:mb-8 hover:text-[#071B3A] transition"
        >
          <FaArrowLeft size={14} className="md:text-[18px]" />
          Volver a servicios
        </button>

        <div className="bg-white/90 rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-12 shadow-[0_20px_60px_rgba(7,27,58,0.10)] md:shadow-[0_25px_70px_rgba(7,27,58,0.12)] border border-white/70">
          <div className="flex items-start md:items-center gap-4 md:gap-5 mb-4">
            <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-2xl bg-[#071B3A] text-white flex items-center justify-center">
              <Icon size={22} className="md:text-[30px]" />
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#071B3A] leading-tight">
              {service.title}
            </h1>
          </div>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-6xl mx-0 md:mx-20">
            “{service.description}”
          </p>

          <div className="mt-8 md:mt-10">
            <h2 className="text-xl md:text-2xl font-bold text-[#071B3A]">
              ¿Qué incluye?
            </h2>

            <div className="mt-5 md:mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {service.items.map((item) => (
                <div
                  key={item}
                  className="bg-[#071B3A]/5 rounded-xl md:rounded-2xl p-3 md:p-4 text-sm md:text-base text-gray-700 leading-relaxed"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4">
            <a
              href="https://wa.me/56931087761"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#071B3A] text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-base font-semibold hover:bg-[#0b2c5c] transition"
            >
              <FaWhatsapp size={18} className="md:text-[20px]" />
              Consultar por este servicio
            </a>

            <button
              onClick={goBackToServices}
              className="inline-flex items-center justify-center border border-[#C8A24A] text-[#071B3A] px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-base font-semibold hover:bg-[#C8A24A]/10 transition"
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