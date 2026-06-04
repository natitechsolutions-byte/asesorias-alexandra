import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { servicesData } from "../data/servicesData";

const Services = () => {
  return (
    <section id="services" className="relative py-24">
      <div className="max-w-[1600px] mx-auto px-6 xl:px-16">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#C8A24A] font-semibold">Servicios</span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#071B3A] mt-3">
            Planes y Servicios
          </h2>

          <p className="mt-4 text-gray-600">
            Elige el servicio que más se adapta a tu etapa actual y conoce el
            detalle de lo que incluye.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
          {servicesData.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.slug}
                to={`/servicios/${service.slug}`}
                className="group bg-white/90 rounded-[2rem] p-7 border border-white/70 shadow-[0_18px_45px_rgba(7,27,58,0.08)] hover:shadow-[0_25px_65px_rgba(7,27,58,0.14)] hover:-translate-y-1 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#071B3A] text-white flex items-center justify-center mb-6">
                  <Icon size={26} />
                </div>

                <h3 className="text-2xl font-bold text-[#071B3A]">
                  {service.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {service.short}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-[#C8A24A] font-semibold">
                  Ver detalle
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;