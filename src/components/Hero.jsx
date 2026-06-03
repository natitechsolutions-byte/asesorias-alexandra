import logo from "../assets/logo.png";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative pt-36 pb-24 overflow-hidden"
        >
            <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <p className="text-[#C8A24A] font-semibold mb-4">
                        Consultoría y Gestión A&A Ltda.
                    </p>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#071B3A]">
                        Asesoría contable clara, cercana y profesional
                    </h1>

                    <p className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed">
                        Acompañamos a emprendedores, trabajadores independientes y empresas
                        en sus procesos contables, tributarios, laborales y administrativos,
                        entregando orientación clara para tomar mejores decisiones.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://wa.me/56931087761"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#071B3A] text-white px-8 py-3 rounded-full text-center hover:bg-[#0b2c5c] transition"
                        >
                            Solicitar asesoría
                        </a>

                        <a
                            href="#services"
                            className="border border-[#C8A24A] text-[#071B3A] px-8 py-3 rounded-full text-center hover:bg-[#C8A24A]/10 transition"
                        >
                            Ver servicios
                        </a>
                    </div>
                </div>

                {/* Logo premium integrado */}
                <div className="flex justify-center">
                    <div className="relative">

                        <div className="absolute inset-0  blur-3xl rounded-3xl"></div>

                        <div
                            className="
                            relative
                            bg-white/90
                            backdrop-blur-sm
                            rounded-[32px]
                            p-5
                            border border-[#C8A24A]/15
                            shadow-[0_25px_60px_rgba(7,27,58,0.12)]
                            "
                        >
                            <img
                                src={logo}
                                alt="Logo"
                                className="w-full max-w-lg rounded-2xl"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;