import logo from "../assets/logo.png";
import {
    UserRound,
    ShieldCheck,
    ChartColumnIncreasing,
    CircleCheck,
    ChevronRight,
} from "lucide-react";

const features = [
    {
        icon: UserRound,
        title: "Atención personalizada",
        description: "Escuchamos tu situación y te orientamos de forma clara.",
    },
    {
        icon: ShieldCheck,
        title: "Confidencialidad",
        description: "Manejamos tu información con total seguridad.",
    },
    {
        icon: ChartColumnIncreasing,
        title: "Experiencia y respaldo",
        description: "Profesionales actualizados y con amplia trayectoria.",
    },
    {
        icon: CircleCheck,
        title: "Soluciones integrales",
        description: "Te acompañamos en cada etapa de tu negocio.",
    },
];

const Hero = () => {
    return (
        <>
            <section
                id="home"
                className="relative pt-36 pb-20 overflow-hidden"
            >
                <div className="max-w-[1600px]  mx-auto px-6">

                    <div className="relative max-w-[1600px] mx-auto px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-20 items-center">

                        {/* Texto */}
                        <div>
                            <p className="text-[#C8A24A] font-semibold mb-4">
                                Consultoría y Gestión A&A Ltda.
                            </p>

                            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.08] text-[#071B3A] max-w-[760px]">
                                Asesoría contable
                                tributarias y laborales con un enfoque claro,
                                cercano y profesional.

                            </h1>

                            <p className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed">
                                Acompañamos a emprendedores, trabajadores independientes
                                y empresas en sus procesos contables, tributarios,
                                laborales y administrativos, entregando orientación clara
                                para tomar mejores decisiones.
                            </p>

                            <div className="mt-10 flex flex-col sm:flex-row gap-4">
                                <a
                                    href="https://wa.me/56931087761"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#071B3A] text-white px-8 py-4 rounded-xl font-medium text-center shadow-lg hover:scale-[1.02] transition"
                                >
                                    Solicitar asesoría
                                </a>

                                <a
                                    href="#services"
                                    className="border border-[#C8A24A] text-[#071B3A] px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-[#C8A24A]/10 transition"
                                >
                                    Ver servicios
                                    <ChevronRight size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Logo */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-[720px]">
                                <div
                                    className="
                                    bg-white
                                    rounded-[36px]
                                    p-2
                                    border border-[#C8A24A]/10
                                    shadow-[0_35px_90px_rgba(7,27,58,0.12)]
                                    "
                                >
                                    <img
                                        src={logo}
                                        alt="Logo"
                                        className="
                                    w-full
                                    scale-110
                                    rounded-[24px]
                                    object-cover
                                    "
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Franja de confianza */}
            <section>
                <div className="max-w-[1500px] mx-auto max-w-7xl border-t border-[#C8A24A]/15"></div>
                <div className="max-w-7xl mx-auto px-6 py-8">

                    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

                        {features.map((feature, index) => {
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={index}
                                    className="flex items-start gap-4"
                                >
                                    <div
                                        className="
                    w-14 h-14
                    rounded-full
                    border
                    border-[#C8A24A]/30
                    flex
                    items-center
                    justify-center
                    shrink-0
                    "
                                    >
                                        <Icon
                                            size={24}
                                            className="text-[#C8A24A]"
                                        />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-[#071B3A]">
                                            {feature.title}
                                        </h3>

                                        <p className="text-sm text-gray-600 mt-1">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}

                    </div>

                </div>
                <div className="max-w-[1500px] mx-auto max-w-7xl border-t border-[#C8A24A]/15"></div>
            </section>
        </>
    );
};

export default Hero;