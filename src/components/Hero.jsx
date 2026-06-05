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
                <div className="max-w-[1600px] mx-auto px-5 md:px-6">
                    <div className="relative  mx-auto px-0 md:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 lg:gap-20 items-center">

                        <div className="text-center lg:text-left">
                            <p className="text-sm md:text-base text-[#C8A24A] font-semibold mb-3 md:mb-4">
                                Consultoría y Gestión A&A Ltda.
                            </p>

                            <h2 className="text-[1.9rem] sm:text-[2.4rem] md:text-5xl xl:text-6xl font-bold leading-[1.12] md:leading-[1.08] text-[#071B3A] max-w-[760px] mx-auto lg:mx-0">
                                Asesorías contables tributarias y laborales con un enfoque claro,
                                cercano y profesional.
                            </h2>

                            <p className="mt-5 md:mt-6 text-[15px] md:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                A través de Asesorías Alexandra, Acompañamos y asesoramos a empresas, pymes y emprendedores en sus procesos contables,
                                tributarios, laborales y administrativos, entregando orientación clara y apoyo profesional para fortalecer la toma de decisiones
                                y el crecimiento de sus negocios.
 

                            </p>

                            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                                <a
                                    href="https://wa.me/56931087761"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-3 bg-[#071B3A] text-white px-7 py-3 rounded-full font-semibold hover:bg-[#d8b85c] transition"
                                >
                                    <FaWhatsapp />
                                    Escribir por WhatsApp
                                </a>
                                <button
                                    type="button"
                                    onClick={() => {
                                        window.history.pushState(null, "", "services");

                                        document.getElementById("services")?.scrollIntoView({
                                            behavior: "smooth",
                                            block: "start",
                                        });
                                    }}
                                    className="border border-[#C8A24A] text-[#071B3A] rounded-full px-6 md:px-8 py-3 md:py-4 font-semibold flex items-center justify-center gap-2 hover:bg-[#C8A24A]/10 transition"
                                >
                                    Ver servicios
                                    <FaArrowRight size={16} />
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-[340px] md:max-w-[520px] lg:max-w-[720px] mx-auto">
                                <div className="bg-white rounded-[28px] md:rounded-[36px] p-2 border border-[#C8A24A]/10 shadow-[0_25px_60px_rgba(7,27,58,0.10)] md:shadow-[0_35px_90px_rgba(7,27,58,0.12)]">
                                    <img
                                        src={logo}
                                        alt="Logo"
                                        className="w-full scale-100 md:scale-105 lg:scale-110 rounded-[22px] md:rounded-[24px] object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-[1500px] mx-auto border-t border-[#C8A24A]/15"></div>

                <div className="max-w-7xl mx-auto px-6 py-6 md:py-8">
                    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 md:gap-4"
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

                <div className="max-w-[1500px] mx-auto border-t border-[#C8A24A]/15"></div>
            </section>
        </>
    );
};

export default Hero;