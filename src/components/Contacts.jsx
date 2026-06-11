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
                sm:text-[38px]
                md:text-[50px]
                lg:text-[54px]
                xl:text-[50px]
                sm:leading-[0.98]
                leading-[1.08]
                tracking-[-0.03em]">
              Agenda tu asesoría y conversemos sobre tu negocio
            </h2>

            <p className="mt-4
             md:mt-5 text-sm
             md:text-base 
             text-white/75
             leading-relaxed max-w-xl">
              Atención presencial en Santa Juana o Concepción previa coordinación.
              También contamos con atención remota para todo Chile.
            </p>

            <div className="mt-6 md:mt-7 flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href="https://wa.me/56931087761"
                target="_blank"
                rel="noopener noreferrer"
                className="
                inline-flex
                items-center
                justify-center
                gap-2
                bg-[#071B3A]
                text-white
                w-[298px]
                md:w-[250px]
                h-[42px]
                md:h-[50px]
                rounded-full
                font-semibold
                text-sm md:text-base 
                border
                border-white/20
                hover:bg-[#0b2c5c]
                transition
    "
              >
                <FaWhatsapp size={18} />
                Escribir por WhatsApp
              </a>

              <a
                href="https://forms.gle/duVP5mGsAhy8xy9x8"
                target="_blank"
                rel="noopener noreferrer"
                className="
                w-[298px]
                md:w-[250px]
                h-[42px]
                md:h-[50px]
                border
                border-[#C8A24A]
                text-white
                rounded-full
                font-semibold
                text-sm md:text-base 
                flex
                items-center
                justify-center
                gap-2
                hover:bg-white/10
                transition
              "
              >
                <FaWpforms size={16} />
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
                  p-4
                  border
                  border-white/10
                  flex
                  flex-col
                  items-center
                  text-center
                "
                >
                  <div
                    className="
                    w-10 h-10
                    rounded-xl
                    bg-[#C8A24A]/15
                    flex
                    items-center
                    justify-center
                    mb-4
                  "
                  >
                    <Icon className="text-[#C8A24A]" />
                  </div>

                  <div className="flex flex-col items-center">
                    <h3 className="font-bold text-sm md:text-base">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-white/70 text-sm
                                md:text-base leading-relaxed">
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