import {
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPhoneAlt,
  FaWpforms,
} from "react-icons/fa";

const contactItems = [
  {
    icon: FaEnvelope,
    title: "Correo",
    text: "asesorias.alexandra12@gmail.com",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Atención",
    text: "Santa Juana / Concepción / Online",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-12 bg-[#071B3A] text-white overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#C8A24A]/10 rounded-full blur-3xl" />

      <div className="relative max-w-[1600px] mx-auto px-6 xl:px-16">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">

          <div>
            <span className="text-[#C8A24A] font-semibold">
              Contacto
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 leading-tight max-w-xl">
              Agenda tu asesoría y conversemos sobre tu negocio
            </h2>

            <p className="mt-5 text-white/75 leading-relaxed max-w-xl">
              Atención presencial en Santa Juana o Concepción previa coordinación.
              También contamos con atención remota para todo Chile.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/56931087761"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#C8A24A] text-[#071B3A] px-7 py-3 rounded-full font-bold hover:bg-[#d8b85c] transition"
              >
                <FaWhatsapp />
                Escribir por WhatsApp
              </a>

              <a
                href="https://forms.gle/duVP5mGsAhy8xy9x8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border border-white/25 text-white px-7 py-3 rounded-full font-semibold hover:bg-white/10 transition"
              >
                <FaWpforms />
                Completar formulario
              </a>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-[#C8A24A] transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-[#C8A24A]" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-[#C8A24A] transition"
                aria-label="Instagram"
              >
                <FaInstagram className="text-[#C8A24A]" />
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#C8A24A]/15 flex items-center justify-center mb-4">
                    <Icon className="text-[#C8A24A]" />
                  </div>

                  <h3 className="font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-white/70 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;