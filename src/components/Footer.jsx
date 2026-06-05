import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#C8A24A]">
      <div className="max-w-[1600px] mx-auto px-6 py-4">

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Consultoría y Gestión A&A Ltda.
          </p>

          <div className="flex items-center gap-3">

            <a
              href="https://www.linkedin.com/in/alexandra-pedreros-a14729208?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#071B3A] hover:text-[#C8A24A] transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={18} />
            </a>

            <a
              href="https://www.instagram.com/asesorias_alexandra._/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#071B3A] hover:text-[#C8A24A] transition"
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;