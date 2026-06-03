const faqs = [
  {
    q: "¿Debo presentar F29 todos los meses?",
    a: "Sí. Una vez iniciado el giro, generalmente debe presentarse mensualmente, incluso si no hay movimientos.",
  },
  {
    q: "¿Necesito iniciar actividades para emitir boletas o facturas?",
    a: "Sí. Primero se debe realizar el inicio de actividades ante el SII y habilitar los documentos correspondientes.",
  },
  {
    q: "¿Cómo formalizo mi emprendimiento?",
    a: "El proceso puede incluir constitución de empresa, obtención de RUT, inicio de actividades y facturación electrónica.",
  },
];

const Faq = () => {
  return (
    <section id="faq" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#C8A24A] font-semibold">Preguntas frecuentes</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Dudas comunes
          </h2>
        </div>

        <div className="space-y-5">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#f8f8f8] p-6 rounded-2xl">
              <h3 className="font-bold text-lg">{faq.q}</h3>
              <p className="mt-2 text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;