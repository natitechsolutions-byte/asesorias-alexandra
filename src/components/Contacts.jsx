import { Mail, MapPin, Clock, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#071B3A] text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-[#C8A24A] font-semibold">Contacto</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Agenda tu asesoría
          </h2>

          <p className="mt-6 text-white/80">
            Atención presencial en Santa Juana o Concepción previa coordinación.
            También atención remota para todo Chile mediante Google Meet o Zoom.
          </p>
        </div>

        <div className="bg-white/10 rounded-3xl p-8 space-y-5">
          <p className="flex gap-3 items-center">
            <Phone className="text-[#C8A24A]" />
            +56 9 3108 7761
          </p>

          <p className="flex gap-3 items-center">
            <Mail className="text-[#C8A24A]" />
            asesorias.alexandra12@gmail.com
          </p>

          <p className="flex gap-3 items-center">
            <MapPin className="text-[#C8A24A]" />
            Santa Juana / Concepción / Todo Chile online
          </p>

          <p className="flex gap-3 items-center">
            <Clock className="text-[#C8A24A]" />
            Lunes a viernes de 09:00 a 18:00 hrs
          </p>

          <a
            href="https://wa.me/56931087761"
            target="_blank"
            className="block bg-[#C8A24A] text-[#071B3A] text-center py-3 rounded-full font-semibold hover:bg-[#d8b85c]"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;