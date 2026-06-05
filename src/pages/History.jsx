import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import alexandra from "../assets/ale.jpeg";
import {
    FaArrowLeft,
    FaWhatsapp,
    FaBookOpen,
    FaBriefcase,
    FaGraduationCap,
    FaHandshake,
    FaChevronLeft,
    FaChevronRight,
} from "react-icons/fa";

const timeline = [
    {
        icon: FaBookOpen,
        title: "Inicio del proyecto",
        text: "Nace mientras su fundadora Alexandra cursaba la carrera de Contador Público y Auditor, comenzando con apoyo contable y tributario a pequeños contribuyentes.",
    },
    {
        icon: FaBriefcase,
        title: "Experiencia profesional",
        text: "Durante su formación participó en funciones financieras, administrativas, tributarias y laborales, fortaleciendo su visión de la gestión empresarial.",
    },
    {
        icon: FaGraduationCap,
        title: "Formación académica",
        text: "Contadora Pública y Auditora egresada de la Universidad del Bío-Bío, con experiencia práctica en materias tributarias, financieras y de gestión empresarial.",
    },
    {
        icon: FaHandshake,
        title: "Asesorías Alexandra hoy",
        text: "Acompaña a empresas en sus procesos contables, tributarios, laborales y administrativos, contribuyendo a una gestión más ordenada, informada y eficiente.",
    },
];

const History = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const goBackToAbout = () => {
        navigate("/quiensomos");

        setTimeout(() => {
            const section = document.getElementById("quiensomos");

            if (section) {
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }, 300);
    };

    const nextStep = () => {
        setCurrentStep((prev) =>
            prev === timeline.length - 1 ? 0 : prev + 1
        );
    };

    const prevStep = () => {
        setCurrentStep((prev) =>
            prev === 0 ? timeline.length - 1 : prev - 1
        );
    };

    return (
        <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
            <div className="absolute top-20 right-0 w-[260px] h-[260px] md:w-[420px] md:h-[420px] bg-[#C8A24A]/10 rounded-full blur-3xl"></div>

            <div className="relative max-w-[1600px] mx-auto px-5 md:px-6 xl:px-16">
                <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
                    <div>
                        <span className="text-sm md:text-base text-[#C8A24A] font-semibold">
                            Nuestra historia
                        </span>

                        <h1 className="text-[2rem] sm:text-4xl md:text-5xl font-bold text-[#071B3A] mt-3 md:mt-4 leading-tight">
                            Una trayectoria construida con responsabilidad, cercanía y
                            vocación profesional.
                        </h1>

                        <p className="mt-5 md:mt-6 text-[15px] md:text-base text-gray-600 leading-relaxed">
                            Asesorías Alexandra es el resultado de un proceso de formación
                            académica, experiencia práctica y trabajo constante junto a
                            empresas de distintos rubros y tamaños.
                        </p>

                        <p className="mt-3 md:mt-4 text-[15px] md:text-base text-gray-600 leading-relaxed">
                            Su propósito es entregar apoyo contable, tributario, laboral y
                            administrativo de manera clara y cercana, ayudando a cada empresa
                            a mantener una gestión ordenada, cumplir sus obligaciones
                            oportunamente y utilizar la información de su negocio para tomar
                            mejores decisiones.
                        </p>

                        <p className="mt-3 md:mt-4 text-[15px] md:text-base text-gray-600 leading-relaxed">
                            Más allá del cumplimiento normativo, buscamos que nuestros
                            clientes comprendan su información financiera, organicen sus
                            recursos, gestionen adecuadamente sus costos y cuenten con
                            herramientas que les permitan proyectar el crecimiento de sus
                            negocios.
                        </p>

                        <div className="mt-7 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
                            <button
                                onClick={goBackToAbout}
                                className="inline-flex items-center justify-center gap-2 bg-[#071B3A] text-white px-6 md:px-8 py-3 rounded-full text-sm md:text-base font-semibold hover:bg-[#0b2c5c] transition"
                            >
                                <FaArrowLeft size={14} />
                                Volver a quiénes somos
                            </button>

                            <a
                                href="https://wa.me/56931087761"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 border border-[#C8A24A] text-[#071B3A] px-6 md:px-8 py-3 rounded-full text-sm md:text-base font-semibold hover:bg-[#C8A24A]/10 transition"
                            >
                                <FaWhatsapp size={16} />
                                Solicitar asesoría
                            </a>
                        </div>
                    </div>

                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative bg-white/90 backdrop-blur-md rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-5 shadow-[0_20px_55px_rgba(7,27,58,0.11)] md:shadow-[0_28px_70px_rgba(7,27,58,0.13)] border border-white/70 w-full max-w-[390px] md:max-w-[560px]">
                            <div className="overflow-hidden rounded-[1.2rem] md:rounded-[1.5rem] bg-[#f8f8f8] h-[300px] sm:h-[300px] md:h-[500px]">
                                <img
                                    src={alexandra}
                                    alt="Alexandra Pedreros Palma"
                                    className="w-full h-full object-cover scale-110"
                                    style={{
                                        objectPosition: "center 75%",
                                    }}
                                />
                            </div>

                            <div className="mt-4 md:mt-6">
                                <h2 className="text-xl sm:text-2xl md:text-2xl font-bold text-[#071B3A]">
                                    Alexandra Pedreros Palma
                                </h2>

                                <p className="mt-1 md:mt-2 text-sm md:text-base text-[#C8A24A] font-semibold">
                                    Contadora Pública y Auditora
                                </p>

                                <p className="mt-3 text-gray-600 text-xs md:text-sm leading-relaxed">
                                    Fundadora de Asesorías Alexandra y socia de Consultoría y
                                    Gestión A&A Ltda.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 md:mt-24">
                    <div className="text-center mb-8 md:mb-12">
                        <span className="text-sm md:text-base text-[#C8A24A] font-semibold">
                            Trayectoria
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold text-[#071B3A] mt-2 md:mt-3">
                            El camino de Asesorías Alexandra
                        </h2>
                    </div>

                    {/* Desktop */}
                    <div className="hidden lg:grid lg:grid-cols-4 gap-6">
                        {timeline.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="bg-white/80 rounded-3xl p-6 shadow-lg border border-white/60"
                                >
                                    <div className="flex items-center gap-4 mb-5">
                                        <div className="w-14 h-14 rounded-2xl bg-[#C8A24A]/10 flex items-center justify-center shrink-0">
                                            <Icon className="text-[#C8A24A] text-[24px]" />
                                        </div>

                                        <h3 className="text-xl font-bold text-[#071B3A] leading-tight">
                                            {item.title}
                                        </h3>
                                    </div>

                                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Mobile carrusel */}
                    <div className="lg:hidden relative max-w-[390px] mx-auto">
                        <div className="bg-white/80 rounded-3xl p-6 shadow-lg border border-white/60 min-h-[260px]">
                            {(() => {
                                const item = timeline[currentStep];
                                const Icon = item.icon;

                                return (
                                    <>
                                        <div className="flex items-center gap-4 mb-5">
                                            <div className="w-12 h-12 shrink-0 rounded-xl bg-[#C8A24A]/10 flex items-center justify-center">
                                                <Icon className="text-[#C8A24A] text-xl" />
                                            </div>

                                            <h3 className="text-xl font-bold text-[#071B3A] leading-tight">
                                                {item.title}
                                            </h3>
                                        </div>

                                        <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                                            {item.text}
                                        </p>
                                    </>
                                );
                            })()}
                        </div>

                        <button
                            onClick={prevStep}
                            className="absolute left-[-14px] top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-[#071B3A]"
                        >
                            <FaChevronLeft size={12} />
                        </button>

                        <button
                            onClick={nextStep}
                            className="absolute right-[-14px] top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-[#071B3A]"
                        >
                            <FaChevronRight size={12} />
                        </button>

                        <div className="flex justify-center gap-2 mt-6">
                            {timeline.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentStep(index)}
                                    className={`h-2 rounded-full transition-all ${currentStep === index
                                        ? "w-8 bg-[#C8A24A]"
                                        : "w-2 bg-[#C8A24A]/30"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-14 md:mt-20 bg-[#071B3A] text-white rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-2xl">
                    <p className="text-sm md:text-base text-[#C8A24A] font-semibold">
                        Propuesta de valor
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold mt-2 md:mt-3">
                        Más que una oficina contable, un apoyo profesional para la gestión
                        de tu negocio.
                    </h2>

                    <p className="mt-4 md:mt-5 text-sm md:text-base text-white/80 leading-relaxed max-w-4xl">
                        El principal diferenciador de Asesorías Alexandra es explicar cada
                        proceso de forma clara, para que cada cliente comprenda qué se está
                        haciendo, por qué se realiza y cuáles son las implicancias para su
                        negocio.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default History;