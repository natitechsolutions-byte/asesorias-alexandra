import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { servicesData } from "../data/servicesData";

const ITEMS_PER_PAGE = 3;

const Services = () => {
  const [startIndex, setStartIndex] = useState(0);

  const maxStartIndex = Math.max(servicesData.length - ITEMS_PER_PAGE, 0);

  const visibleServices = servicesData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const nextSlide = () => {
    setStartIndex((prev) => Math.min(prev + 1, maxStartIndex));
  };

  const prevSlide = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section id="services" className="relative overflow-hidden py-20">
      <div className="max-w-[1500px] mx-auto px-6 xl:px-16">
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

        <div className="relative">
          <button
            onClick={prevSlide}
            disabled={startIndex === 0}
            className="hidden lg:flex absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-[#C8A24A]/30 bg-white/80 text-[#071B3A] items-center justify-center shadow-lg hover:bg-[#C8A24A] hover:text-white transition disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={26} />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {visibleServices.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.slug}
                  to={`/servicios/${service.slug}`}
                  className="group bg-white/90 rounded-[2rem] p-7 min-h-[320px] border border-white/70 shadow-[0_18px_45px_rgba(7,27,58,0.08)] hover:shadow-[0_25px_65px_rgba(7,27,58,0.14)] hover:-translate-y-1 transition flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#071B3A] text-white flex items-center justify-center">
                      <Icon size={26} />
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-[#071B3A] leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {service.short}
                  </p>

                  <div className="mt-auto pt-7 inline-flex items-center gap-2 text-[#C8A24A] font-semibold">
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

          <button
            onClick={nextSlide}
            disabled={startIndex === maxStartIndex}
            className="hidden lg:flex absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-[#C8A24A]/30 bg-white/80 text-[#071B3A] items-center justify-center shadow-lg hover:bg-[#C8A24A] hover:text-white transition disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight size={26} />
          </button>
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {Array.from({ length: maxStartIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setStartIndex(index)}
              className={`h-2 rounded-full transition-all ${
                startIndex === index
                  ? "w-8 bg-[#C8A24A]"
                  : "w-2 bg-[#C8A24A]/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;