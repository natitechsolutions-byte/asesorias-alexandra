import alexandra from "../assets/ale-oficina.JPEG";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaQuoteLeft,
} from "react-icons/fa";

const About = () => {
  return (
    <section id="quiensomos" className="relative py-12 md:py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto ">
        <div className="relative mx-auto px-5 md:px-6 grid lg:grid-cols-[1fr_1fr] gap-10 md:gap-10 lg:gap-12 items-center">

          <div className="text-center lg:text-left max-w-[380px] sm:max-w-[460px] md:max-w-[720px] lg:max-w-[580px] mx-auto lg:mx-0">
            <p className="text-sm md:text-base text-[#C8A24A] font-semibold mb-3 md:mb-4">
              Quiénes somos
            </p>

            <h2 className=" 
                                font-[600]
                                text-[31px]text-[#071B3A]
                                font-[600]
                                text-[31px]
                                sm:text-[38px]
                                md:text-[48px]
                                lg:text-[54px]
                                xl:text-[50px]
                                leading-[0.98]
                                tracking-[-0.03em]
                
              ">
              Acompañamiento profesional para ordenar y fortalecer tu negocio.
            </h2>

            <p 
             className="
                                mt-5 md:mt-6
                                 text-justify
                                sm:text-justify
                                lg:text-justify
                                text-sm
                                md:text-base
                                text-gray-700
                                leading-[1.7]
                                md:leading-relaxed
                                max-w-full
                                md:max-w-[640px]
                                lg:max-w-[530px]
                                mx-auto
                                lg:mx-0">
              Consultoría y Gestión A&A Ltda. nace como una iniciativa profesional de asesoría, consultoría y gestión empresarial,
              orientada a acompañar a emprendedores, trabajadores independientes y empresas en la organización de sus procesos contables,
              tributarios, laborales y administrativos.
            </p>
            <p 
            className="
                                mt-5 md:mt-6
                                 text-justify
                                sm:text-justify
                                lg:text-justify
                                text-sm
                                md:text-base
                                text-gray-700
                                leading-[1.7]
                                md:leading-relaxed
                                max-w-full
                                md:max-w-[640px]
                                lg:max-w-[530px]
                                mx-auto
                                lg:mx-0">
              A través de Asesorías Alexandra, entregamos un servicio cercano, claro y responsable, enfocado no solo en cumplir trámites,
              sino también en ayudar a cada cliente a comprender su situación, ordenar su información y tomar mejores decisiones para
              el desarrollo de su negocio.
            </p>

            <div className="flex justify-center md:justify-start">
              <Link
                to="/quiensomos/historia"
                className="inline-flex items-center gap-2 mt-6 md:mt-8 bg-[#071B3A] text-white px-6 md:px-7 py-3 rounded-full text-sm md:text-base font-semibold hover:bg-[#0b2c5c] transition shadow-[0_12px_30px_rgba(7,27,58,0.16)]"
              >
                Conoce nuestra historia
                <FaArrowRight size={16} className="md:w-[18px] md:h-[18px]" />
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute -inset-3 md:-inset-4 bg-[#C8A24A]/10 rounded-[2rem] blur-2xl"></div>

            <div className="relative bg-white/90 backdrop-blur-md rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-5 shadow-[0_20px_55px_rgba(7,27,58,0.11)] md:shadow-[0_28px_70px_rgba(7,27,58,0.13)] border border-white/70 w-full max-w-[390px] md:max-w-[560px]">

              <div className="overflow-hidden rounded-[1.2rem] md:rounded-[1.5rem] bg-[#f8f8f8] h-[280px] sm:h-[280px] md:h-[450px]">
                <img
                  src={alexandra}
                  alt="Alexandra Pedreros Palma"
                  className="w-full h-full object-cover scale-110"
                  style={{
                    objectPosition: "center 20%",
                  }}
                />
              </div>

              <div className="text-center pt-4 md:pt-6">
                <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.24em] text-[#C8A24A] font-bold">
                  Fundadora
                </span>

                <h2 className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold text-[#071B3A] mt-2 leading-tight">
                  Alexandra Pedreros Palma
                </h2>

                <p className="mt-1 md:mt-2 text-sm md:text-base text-[#C8A24A] font-semibold">
                  Contadora Pública y Auditora
                </p>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;