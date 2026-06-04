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
              href="#"
              className="text-[#071B3A] hover:text-[#C8A24A] transition"
            >
              <FaLinkedinIn size={18} />
            </a>

            <a
              href="#"
              className="text-[#071B3A] hover:text-[#C8A24A] transition"
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