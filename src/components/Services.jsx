import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { servicesData } from "../data/servicesData";

const Services = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth < 1024 ? 1 : 3);
      setStartIndex(0);
    };

    updateItemsPerPage();

    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const maxStartIndex = Math.max(servicesData.length - itemsPerPage, 0);

  const visibleServices = servicesData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const nextSlide = () => {
    setStartIndex((prev) => Math.min(prev + 1, maxStartIndex));
  };

  const prevSlide = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section id="services" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-6 xl:px-16">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <span className="text-sm md:text-base text-[#C8A24A] font-semibold">
            Servicios
          </span>

          <h2 className="font-playfair
                                font-[600] text-3xl md:text-5xl font-bold text-[#071B3A] mt-2 md:mt-3">
            Planes y Servicios
          </h2>

          <p className="mt-3 md:mt-4 text-[15px] md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Elige el servicio que más se adapta a tu etapa actual y conoce el
            detalle de lo que incluye.
          </p>
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            disabled={startIndex === 0}
            className="
            absolute
            -left-6
            md:-left-3
            lg:-left-16
            top-1/2
            -translate-y-1/2
            z-20
            flex
            w-8
            h-8
            md:w-10
            md:h-10
            lg:w-12
            lg:h-12
            rounded-full
            border
            border-[#C8A24A]/30
            bg-white
            text-[#071B3A]
            items-center
            justify-center
            shadow-lg
            hover:bg-[#C8A24A]
            hover:text-white
            transition
            disabled:opacity-30
            "
          >
            <FaChevronLeft size={12} className="md:text-sm lg:text-base" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {visibleServices.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="
                  group
                  bg-white/90
                  rounded-[1.7rem]
                  md:rounded-[2rem]
                  p-5
                  md:p-7
                  min-h-[280px]
                  md:min-h-[320px]
                  border
                  border-white/70
                  shadow-[0_18px_45px_rgba(7,27,58,0.08)]
                  hover:shadow-[0_25px_65px_rgba(7,27,58,0.14)]
                  hover:-translate-y-1
                  transition
                  flex
                  flex-col
  "
                >
                  <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6">
                    <div className="w-11 h-11 md:w-14 md:h-14 shrink-0 rounded-xl md:rounded-2xl bg-[#071B3A] text-white flex items-center justify-center">
                      <Icon size={20} className="md:text-[25px]" />
                    </div>

                    <h3 className="text-lg md:text-2xl font-bold text-[#071B3A] leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm md:text-[17px]">
                    {service.short}
                  </p>

                  <div className="mt-auto pt-5 md:pt-7 inline-flex items-center gap-2 text-[#C8A24A] text-sm md:text-base font-semibold">
                    Ver detalle
                    <FaArrowRight className="text-xs md:text-sm group-hover:translate-x-1 transition" />
                  </div>
                </Link>
              );
            })}
          </div>

          <button
            onClick={nextSlide}
            disabled={startIndex === maxStartIndex}
            className="
            absolute
            -right-6
            md:-right-3
            lg:-right-16
            top-1/2
            -translate-y-1/2
            z-20
            flex
            w-8
            h-8
            md:w-10
            md:h-10
            lg:w-12
            lg:h-12
            rounded-full
            border
            border-[#C8A24A]/30
            bg-white
            text-[#071B3A]
            items-center
            justify-center
            shadow-lg
            hover:bg-[#C8A24A]
            hover:text-white
            transition
            disabled:opacity-30
            "
          >
            <FaChevronRight size={12} className="md:text-sm lg:text-base" />

          </button>
        </div>

        <div className="mt-8 md:mt-10 flex justify-center gap-2">
          {Array.from({ length: maxStartIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setStartIndex(index)}
              className={`h-2 rounded-full transition-all ${startIndex === index
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