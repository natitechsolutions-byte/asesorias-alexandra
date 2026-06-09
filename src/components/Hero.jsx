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
    return (
        <>
            <section
                id="home"
                className="relative pt-24 md:pt-36 pb-12 md:pb-20 overflow-hidden"
            >
                <div className="max-w-7xl mx-auto px-5 md:px-6">
                    <div className="relative mx-auto px-0 md:px-8 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-14 lg:gap-16 items-center">

                        <div className="text-center lg:text-left max-w-[580px]">
                            <p className="text-sm md:text-base text-[#C8A24A] font-semibold mb-3 md:mb-4">
                                Consultoría y Gestión A&A Ltda.
                            </p>

                            <h2
                                className="
                                font-playfair
                                text-[#071B3A]
                                font-[600]
                                text-[38px]
                                sm:text-[44px]
                                md:text-[50px]
                                lg:text-[54px]
                                xl:text-[50px]
                                leading-[1.08]
                                tracking-[-0.03em]
    
                                "
                            >

                                Asesorías contables tributarias y laborales con un enfoque claro,
                                cercano y profesional.
                            </h2>

                            <p className="justify-text mt-5 md:mt-6 text-[15px] md:text-lg text-gray-600 mx-auto lg:mx-0 leading-relaxed max-w-[530px]">
                                A través de Asesorías Alexandra, Acompañamos y asesoramos a empresas, pymes y emprendedores en sus procesos contables,
                                tributarios, laborales y administrativos, entregando orientación clara y apoyo profesional para fortalecer la toma de decisiones
                                y el crecimiento de sus negocios.


                            </p>

                            <div className="mt-7 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
                                <a
                                    href="https://wa.me/56931087761"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    gap-2
                                    bg-[#071B3A]
                                    text-white
                                    w-[250px]
                                    h-[50px]
                                    rounded-full
                                    font-semibold
                                    hover:bg-[#d8b85c]
                                    transition
                                    "
                                >
                                    <FaWhatsapp size={20} />
                                    Escribir por WhatsApp
                                </a>

                                <button
                                    type="button"
                                    onClick={() => {
                                        window.history.pushState(null, "", "/services");

                                        document.getElementById("services")?.scrollIntoView({
                                            behavior: "smooth",
                                            block: "start",
                                        });
                                    }}
                                    className="
      w-[250px]
      h-[50px]
      border
      border-[#C8A24A]
      text-[#071B3A]
      rounded-full
      font-semibold
      flex
      items-center
      justify-center
      gap-2
      hover:bg-[#C8A24A]/10
      transition
    "
                                >
                                    Ver servicios
                                    <FaArrowRight size={16} />
                                </button>
                            </div>
                        </div>

                        <div className="relative z-10 order-2 w-full flex justify-center lg:justify-end">
                            <div className="relative">


                                <div className="
                                        absolute
                                        inset-0
                                        bg-[#C8A24A]/10
                                        blur-3xl
                                        scale-95

                                        rounded-[40px]
                                        "></div>


                                <img
                                    src={logo}
                                    alt="ale"
                                    className="
                                    relative
                                    mt-6 lg:mt-0
                                    w-full
                                    max-w-[320px]
                                    sm:max-w-[420px]
                                    md:max-w-[520px]
                                    lg:max-w-[880px]
                                    object-contain
                                    rounded-3xl
                                    shadow-[0_30px_80px_rgba(7,27,58,0.18)]
                                "
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-6xl mx-auto border-t border-[#C8A24A]/15"></div>

                <div className="max-w-6xl mx-auto px-6 py-6 md:py-8">
                    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={index}
                                    className={`
                                            flex items-start gap-4 relative
                                            xl:px-6
                                            ${index !== features.length - 1
                                            ? "xl:after:absolute xl:after:right-0 xl:after:top-1/2 xl:after:-translate-y-1/2 xl:after:h-16 xl:after:w-px xl:after:bg-[#C8A24A]/20"
                                            : ""
                                        }
  `}
                                >
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#C8A24A]/30 flex items-center justify-center shrink-0">
                                        <Icon
                                            size={20}
                                            className="text-[#C8A24A] md:w-6 md:h-6"
                                        />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-[#071B3A] text-sm md:text-base">
                                            {feature.title}
                                        </h3>

                                        <p className="text-xs md:text-sm text-gray-600 mt-1">
                                            {feature.description}
                                        </p>
                                    </div>
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