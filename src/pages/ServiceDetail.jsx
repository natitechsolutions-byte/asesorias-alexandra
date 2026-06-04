import { Link, useParams } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { servicesData } from "../data/servicesData";

const ServiceDetail = () => {
  const { slug } = useParams();

  const service = servicesData.find((item) => item.slug === slug);

  if (!service) {
    return (
      <section className="pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-[#071B3A]">
            Servicio no encontrado
          </h1>

          <Link to="/" className="text-[#C8A24A] font-semibold mt-6 inline-block">
            Volver al inicio
          </Link>
        </div>
      </section>
    );
  }

  const Icon = service.icon;

  return (
    <section className="relative pt-36 pb-24">
      <div className="max-w-[1600px] mx-auto px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#C8A24A] font-semibold mb-8"
        >
          <ArrowLeft size={18} />
          Volver a servicios
        </Link>

        <div className="bg-white/90 rounded-[2rem] p-8 md:p-12 shadow-[0_25px_70px_rgba(7,27,58,0.12)] border border-white/70">
          <div className="w-16 h-16 rounded-2xl bg-[#071B3A] text-white flex items-center justify-center mb-6">
            <Icon size={30} />
          </div>

          <span className="text-[#C8A24A] font-semibold">
            Servicio
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-[#071B3A] mt-3">
            {service.title}
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-3xl">
            {service.description}
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
              <MessageCircle size={20} />
              Consultar por este servicio
            </a>

            <Link
              to="/"
              className="inline-flex items-center justify-center border border-[#C8A24A] text-[#071B3A] px-8 py-4 rounded-full font-semibold hover:bg-[#C8A24A]/10 transition"
            >
              Ver otros servicios
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;