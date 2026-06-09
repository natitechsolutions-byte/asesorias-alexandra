import {
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
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
      id="contacto"
      className="relative py-10 md:py-12 bg-[#071B3A] text-white overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[320px] md:w-[420px] h-[320px] md:h-[420px] bg-[#C8A24A]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-6 xl:px-16">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-10 items-center">

          <div>
            <span className="text-sm md:text-base text-[#C8A24A] font-semibold">
              Contacto
            </span>

            <h2 className="
                font-playfair
                font-[600]
                text-[35px]
                sm:text-[44px]
                md:text-[58px]
                lg:text-[58px]
                xl:text-[48px]
                leading-[1]
                sm:leading-[0.98]
                tracking-[-0.04em]">
              Agenda tu asesoría y conversemos sobre tu negocio
            </h2>

            <p className="mt-4 md:mt-5 text-sm md:text-base text-white/75 leading-relaxed max-w-xl">
              Atención presencial en Santa Juana o Concepción previa coordinación.
              También contamos con atención remota para todo Chile.
            </p>

            <div className="mt-6 md:mt-7 flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href="https://wa.me/56931087761"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#C8A24A] text-[#071B3A] px-6 md:px-7 py-3 rounded-full text-sm md:text-base font-bold hover:bg-[#d8b85c] transition"
              >
                <FaWhatsapp />
                Escribir por WhatsApp
              </a>

              <a
                href="https://forms.gle/duVP5mGsAhy8xy9x8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border border-white/25 text-white px-6 md:px-7 py-3 rounded-full text-sm md:text-base font-semibold hover:bg-white/10 transition"
              >
                <FaWpforms />
                Completar formulario
              </a>
            </div>
          </div>

          <div className="space-y-3 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    bg-white/10
                    backdrop-blur-md
                    rounded-2xl
                    p-3
                    md:p-4
                    border
                    border-white/10
                    flex
                    items-center
                    gap-3
                    md:block
                  "
                >
                  <div className="w-9 h-9 md:w-10 md:h-10 shrink-0 rounded-xl bg-[#C8A24A]/15 flex items-center justify-center md:mb-4">
                    <Icon className="text-[#C8A24A]" />
                  </div>

                  <div>
                    <h3 className="font-bold text-sm md:text-base">
                      {item.title}
                    </h3>

                    <p className="mt-1 md:mt-2 text-white/70 text-xs md:text-sm leading-relaxed break-words">
                      {item.text}
                    </p>
                  </div>
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