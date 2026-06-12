import logo from "../assets/logo.png";
import {
    FaUser,
    FaShieldAlt,
    FaChartLine,
    FaCheckCircle,
    FaChevronRight,
    FaArrowLeft,
    FaArrowRight,
    FaWhatsapp
} from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

const features = [
    {
        icon: FaUser,
        title: "Atención personalizada",
        description: "Escuchamos tu situación y te orientamos de forma clara.",
    },
    {
        icon: FaShieldAlt,
        title: "Confidencialidad",
        description: "Manejamos tu información con total seguridad.",
    },
    {
        icon: FaChartLine,
        title: "Experiencia y respaldo",
        description: "Profesionales actualizados y con amplia trayectoria.",
    },
    {
        icon: FaChevronRight,
        title: "Soluciones integrales",
        description: "Te acompañamos en cada etapa de tu negocio.",
    },
];



const Hero = () => {
    const navigate = useNavigate();
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
    return (
        <>
            <section
                id="home"
                className="relative pt-24 md:pt-36 pb-12 overflow-hidden"
            >
                <div className="max-w-7xl mx-auto px-5 md:px-6">
                    <div className="relative mx-auto px-0 md:px-8 grid lg:grid-cols-[1fr_1fr] gap-10 md:gap-10 lg:gap-12 items-center">

                        <div className="text-center lg:text-left max-w-[380px] sm:max-w-[460px] md:max-w-[720px] lg:max-w-[580px] mx-auto lg:mx-0">
                            <p className="text-sm md:text-base text-[#C8A24A] font-semibold mb-3 md:mb-4">
                                Consultoría y Gestión A&A Ltda.
                            </p>

                            <h2
  className="
   
    text-[#071B3A]
    font-[700]
    text-[31px]
    sm:text-[38px]
    md:text-[48px]
    lg:text-[52px]
    xl:text-[50px]
    leading-[0.98]
    tracking-[-0.03em]
  "
>
  Asesorías contables, tributarias y laborales
</h2>
<h3
  className="
    font-gilda
    mt-3 md:mt-4
    max-w-[560px]
    text-[#C8A24A]
    font-[500]
    text-[26px]
    sm:text-[31px]
    md:text-[36px]
    lg:text-[38px]
    xl:text-[38px]
    leading-[1.08]
    tracking-[-0.025em]
    mx-auto lg:mx-0
  "
>
  con un enfoque claro, cercano y profesional.
</h3>
                            

                            <p
  className="
    mt-6 md:mt-7
    text-justify
    sm:text-justify
    lg:text-justify
    text-sm
    md:text-base
    text-gray-700
    leading-[1.7]
    md:leading-relaxed
    max-w-full
    md:max-w-[520px]
    lg:max-w-[530px]
    mx-auto
    lg:mx-0
  "
>
                                A través de Asesorías Alexandra, acompañamos y asesoramos a empresas, pymes y emprendedores en sus procesos contables,
                                tributarios, laborales y administrativos, entregando orientación clara y apoyo profesional para fortalecer la toma de decisiones
                                y el crecimiento de sus negocios.
                            </p>

                            <div
                                className="
                                    mt-6 md:mt-7
                                    flex flex-col sm:flex-row
                                    items-center
                                    justify-center
                                    lg:justify-start
                                    gap-3 md:gap-4
                                "
                                >
                                <a
                                    href="https://wa.me/56931087761"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                    inline-flex items-center justify-center gap-2
                                    bg-[#071B3A] text-white
                                    w-full max-w-[340px]
                                    md:w-[250px]
                                    h-[46px] md:h-[50px]
                                    rounded-full
                                    font-semibold text-sm md:text-base
                                    hover:bg-[#d8b85c]
                                    transition shadow-lg hover:-translate-y-1
                                    "
                                >
                                    <FaWhatsapp size={20} />
                                    Escribir por WhatsApp
                                </a>

                                <button
                                    type="button"
                                    onClick={goBackToServices}
                                    className="
                                    w-full max-w-[340px]
                                    md:w-[250px]
                                    h-[46px] md:h-[50px]
                                    border border-[#C8A24A]
                                    text-[#071B3A]
                                    rounded-full
                                    font-semibold text-sm md:text-base
                                    flex items-center justify-center gap-2
                                    hover:bg-[#C8A24A]/10
                                    transition shadow-lg hover:-translate-y-1
                                    "
                                >
                                    Ver servicios
                                    <FaArrowRight size={16} />
                                </button>
                            </div>
                        </div>

                        <div className="relative z-10 order-2 w-full flex justify-center lg:justify-center">
                            <div className="relative">
                                <div
                                    className="
                                    absolute
                                    top-1/2
                                    left-1/2
                                    -translate-x-1/2
                                    -translate-y-1/2
                                    w-[90%]
                                    h-[90%]
                                    rounded-full
                                    bg-gradient-radial
                                    from-[#E8D6A8]/30
                                    via-[#C8A24A]/15
                                    to-transparent
                                    blur-[80px]
                                "
                                ></div>

                                <div
                                   className="relative z-10 order-2 w-full flex justify-center lg:justify-center lg:mt-8 xl:mt-10"
                                ></div>

                                <img
                                    src={logo}
                                    alt="ale"
                                    className="
                                    relative
                                    mt-6 lg:mt-0
                                    w-full
                                    scale-110
                                    max-w-[320px]
                                    sm:max-w-[420px]
                                    md:max-w-[560px]
                                    lg:max-w-[520px]
                                    xl:max-w-[560px]
                                    object-contain
                                    rounded-3xl
                                    transition-all
                                    duration-500
    "
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-6xl mx-auto border-t border-[#C8A24A]/15"></div>
                <div className="max-w-6xl mx-auto px-5 md:px-6 py-2 md:py-4">
                    <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={index}
                                    className={`
                                            relative
                                            flex flex-col items-center text-center

                                            bg-white/70
                                            border border-[#C8A24A]/10
                                            rounded-[1.5rem]
                                            px-2 py-2
                                            min-h-[200px]
                                            shadow-[0_14px_35px_rgba(7,27,58,0.07)]

                                            xl:bg-transparent
                                            xl:border-0
                                            xl:rounded-none
                                            xl:shadow-none
                                            xl:min-h-0
                                            xl:px-2
                                            xl:py-0

                                            ${index !== features.length - 1
                                            ? "xl:after:absolute xl:after:right-0 xl:after:top-1/2 xl:after:-translate-y-1/2 xl:after:h-20 xl:after:w-px xl:after:bg-[#C8A24A]/20"
                                            : ""
                                        }
      `}
                                >
                                    <div
                                        className="
          w-10 h-10
          md:w-16 md:h-16
          rounded-2xl
          xl:rounded-full
          bg-white
          border border-[#C8A24A]/15
          flex items-center justify-center
          mb-3
          shadow-[0_10px_25px_rgba(7,27,58,0.08)]

          xl:shadow-none
          xl:bg-transparent
          xl:border-[#C8A24A]/30
        "
                                    >
                                        <Icon
                                            size={18}
                                            className="text-[#C8A24A] md:w-[22px] md:h-[22px]"
                                        />
                                    </div>

                                    <h3 className="text-base
                                md:text-lg font-semibold text-[#071B3A] text-[15px] leading-tight">
                                        {feature.title}
                                    </h3>

                                    <p className=" text-sm
                                md:text-base text-gray-700 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="max-w-6xl mx-auto border-t border-[#C8A24A]/15"></div>
            </section>
        </>
    );
};

export default Hero;