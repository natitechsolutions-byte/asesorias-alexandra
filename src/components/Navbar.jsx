import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoAA from "../assets/logoNavbar.png";
import { useNavigate } from "react-router-dom";

const navItems = [
    { name: "Quiénes somos", section: "about", path: "/quiensomos" },
    { name: "Servicios y planes", section: "services", path: "/services" },
    { name: "Preguntas", section: "preguntas", path: "/preguntas" },
    { name: "Contacto", section: "contacto", path: "/contacto" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const goToSection = (section, path = "/") => {
        navigate(path);

        setTimeout(() => {
            const element = document.getElementById(section);

            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }, 300);
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-[#C8A24A]/20 shadow-[0_8px_30px_rgba(7,27,58,0.06)]">
            <nav className="max-w-[1600px]  mx-auto px-5 md:px-6 py-2 flex justify-between items-center">

                <button
                    onClick={() => goToSection("home", "/")}
                    className="flex items-center gap-4"
                >
                    <img
                        src={logoAA}
                        alt="A&A"
                        className="h-12 md:h-14 w-auto object-contain"
                    />

                    {/* Línea vertical */}
                    <div className="hidden sm:block w-[2px] h-12 bg-[#C8A24A] rounded-full"></div>

                    <div className="flex flex-col">
                        <h3 className="font-semibold text-[#071B3A] text-sm md:text-base leading-tight">
                            Consultoría y Gestión A&A Ltda.
                        </h3>

                        <p className="hidden sm:block text-xs md:text-sm text-[#C8A24A] font-medium mt-1">
                            Asesoría, consultoría y gestión empresarial
                        </p>
                    </div>
                </button>

                <div className="hidden lg:flex items-center gap-10 text-base font-semibold text-[#071B3A]">
                    {navItems.map((item) => (
                        <button
                            key={item.section}
                            onClick={() => goToSection(item.section, item.path)}
                            className="
                            relative
                            hover:text-[#C8A24A]
                            transition-all
                            duration-300
                            after:absolute
                            after:left-0
                            after:-bottom-1
                            after:h-[2px]
                            after:w-0
                            after:bg-[#C8A24A]
                            after:transition-all
                            after:duration-300
                            hover:after:w-full
                            "
                        >
                            {item.name}
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden w-11 h-11 rounded-full border border-[#C8A24A]/40 flex items-center justify-center text-[#071B3A]"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            <div className="h-[2px] bg-gradient-to-r from-transparent via-[#C8A24A] to-transparent"></div>

            {isOpen && (
                <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-[#C8A24A]/20 shadow-xl">
                    <div className="px-6 py-5 flex flex-col gap-4 text-[#071B3A] font-semibold">
                        {navItems.map((item) => (
                            <button
                                key={item.section}
                                onClick={() => {
                                    goToSection(item.section);
                                    setIsOpen(false);
                                }}
                                className="py-2 border-b border-gray-100 hover:text-[#C8A24A] transition text-left"
                            >
                                {item.name}
                            </button>
                        ))}

                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;