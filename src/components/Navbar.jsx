import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoAA from "../assets/logoNavbar.png";
import { useNavigate } from "react-router-dom";

const navItems = [
  { name: "Inicio", section: "home", path: "/" },
  { name: "Quiénes somos", section: "quiensomos", path: "/quiensomos" },
  { name: "Planes y servicios", section: "services", path: "/services" },
  { name: "Preguntas", section: "preguntas", path: "/preguntas" },
  { name: "Contacto", section: "contacto", path: "/contacto" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileItem, setActiveMobileItem] = useState(null);
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

  const handleMobileClick = (item) => {
    setActiveMobileItem(item.section);

    setTimeout(() => {
      goToSection(item.section, item.path);
      setIsOpen(false);
      setActiveMobileItem(null);
    }, 180);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-[#C8A24A]/20 shadow-[0_8px_30px_rgba(7,27,58,0.06)]">
      <nav className="max-w-7xl mx-auto px-5 md:px-6 h-[78px] md:h-[86px] flex justify-between items-center">
        
        {/* LOGO + TEXTO */}
        <button
          onClick={() => goToSection("home", "/")}
          className="flex items-center min-w-0"
        >
          <img
            src={logoAA}
            alt="A&A"
            className="h-12 md:h-14 lg:h-16 w-auto object-contain shrink-0"
          />

          <div className="hidden sm:block w-[2px] h-11 md:h-12 bg-[#C8A24A] rounded-full mx-5"></div>

          <div className="hidden sm:flex flex-col items-start leading-tight">
            <h3 className="font-semibold text-[#071B3A] text-[14px] md:text-[15px] lg:text-[16px] whitespace-nowrap">
              Consultoría y Gestión A&A Ltda.
            </h3>

            <p className="text-[12px] md:text-[13px] lg:text-[14px] text-[#C8A24A] font-medium mt-1 whitespace-nowrap">
              Asesoría, consultoría y gestión empresarial
            </p>
          </div>
        </button>

        {/* MENÚ DESKTOP */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10 text-[#071B3A]">
          {navItems.map((item) => (
            <button
              key={item.section}
              onClick={() => goToSection(item.section, item.path)}
              className="
                relative
                text-[15px]
                font-semibold
                tracking-normal
                whitespace-nowrap
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

        {/* BOTÓN MOBILE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden w-11 h-11 rounded-full border border-[#C8A24A]/40 flex items-center justify-center text-[#071B3A]"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#C8A24A] to-transparent"></div>

      {/* MENÚ MOBILE */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-[#C8A24A]/20 shadow-xl">
          <div className="px-5 py-5 flex flex-col gap-2 text-[#071B3A] font-semibold">
            {navItems.map((item) => {
              const isActive = activeMobileItem === item.section;

              return (
                <button
                  key={item.section}
                  onMouseEnter={() => setActiveMobileItem(item.section)}
                  onMouseLeave={() => setActiveMobileItem(null)}
                  onClick={() => handleMobileClick(item)}
                  className={`
                    w-full
                    px-4
                    py-3.5
                    rounded-2xl
                    text-left
                    text-[15px]
                    font-semibold
                    border
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "bg-white text-[#C8A24A] border-[#C8A24A]/30 shadow-[0_12px_30px_rgba(7,27,58,0.18)] translate-x-1"
                        : "bg-transparent text-[#071B3A] border-transparent shadow-none"
                    }
                  `}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;