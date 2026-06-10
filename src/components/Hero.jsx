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
                    <div className="relative mx-auto px-0 md:px-8 grid lg:grid-cols-[1fr_1fr] gap-10 md:gap-14 lg:gap-12 items-center">

                        <div className="text-center lg:text-left max-w-[340px] sm:max-w-[420px] md:max-w-[580px] mx-auto lg:mx-0">
                            <p className="text-sm md:text-base text-[#C8A24A] font-semibold mb-3 md:mb-4">
                                Consultoría y Gestión A&A Ltda.
                            </p>

                            <h2
                                className="
                                font-playfair
                                text-[#071B3A]
                                font-[600]
                                text-[31px]
                                sm:text-[38px]
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

                           <p

  className="
    mt-5 md:mt-6
    text-left
    text-[15px]
    md:text-lg
    text-gray-600
    leading-relaxed
    max-w-[320px]
    sm:max-w-[360px]
    md:max-w-[530px]
    mx-auto
    lg:mx-0
  "
>
                        
                                A través de Asesorías Alexandra, acompañamos y asesoramos a empresas, pymes y emprendedores en sus procesos contables,
                                tributarios, laborales y administrativos, entregando orientación clara y apoyo profesional para fortalecer la toma de decisiones
                                y el crecimiento de sus negocios.


                            </p>

                            <div className="mt-7 md:mt-8 flex flex-col sm:flex-row items-center lg:items-start gap-3 md:gap-4">
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
                                    font-semibold text-sm
                                    hover:bg-[#d8b85c]
                                    transition shadow-lg hover:-translate-y-1
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
                                    w-full max-w-[340px]
                                    md:w-[250px]
                                    h-[46px] md:h-[50px]
                                    border border-[#C8A24A]
                                    text-[#071B3A]
                                    rounded-full
                                    font-semibold text-sm
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
                                    className="
                                    absolute
                                    -bottom-10
                                    left-1/2
                                    -translate-x-1/2
                                    w-[70%]
                                    h-[80px]
                                    bg-[#C8A24A]/20
                                    blur-3xl
                                    rounded-full
                                    shadow-[0_35px_80px_rgba(7,27,58,0.12)]
                                    "
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
                                    md:max-w-[520px]
                                    lg:max-w-[520px]
                                    xl:max-w-[560px]
                                    object-contain
                                    rounded-3xl
                                    border border-white/80
                                    shadow-[0_35px_80px_rgba(200,162,74,0.15)]
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

                <div className="max-w-6xl mx-auto px-6 py-6 md:py-8">
                    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={index}
                                    className={`
                                            flex flex-col items-center text-center
                                            px-4 py-4
                                            relative
                                            ${index !== features.length - 1
                                            ? "xl:after:absolute xl:after:right-0 xl:after:top-1/2 xl:after:-translate-y-1/2 xl:after:h-20 xl:after:w-px xl:after:bg-[#C8A24A]/20"
                                            : ""
                                        }
  `}
                                >
                                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#C8A24A]/30 bg-white/70 flex items-center justify-center mb-4">
                                        <Icon
                                            size={22}
                                            className="text-[#C8A24A]"
                                        />
                                    </div>

                                    <h3 className="font-semibold text-[#071B3A] text-sm md:text-base leading-tight">
                                        {feature.title}
                                    </h3>

                                    <p className="text-xs md:text-sm text-gray-600 mt-3 leading-relaxed max-w-[190px]">
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