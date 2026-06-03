const plans = [
  {
    name: "Plan Tributario",
    description: "Ideal para cumplir obligaciones tributarias mensuales.",
    items: ["Declaración F29", "Revisión tributaria", "Orientación permanente"],
  },
  {
    name: "Plan Contable",
    description: "Para negocios que necesitan contabilidad mensual.",
    items: ["Contabilidad mensual", "Prebalance trimestral", "Trámites virtuales"],
  },
  {
    name: "Plan Empresa",
    description: "Planes personalizados según trabajadores y necesidades.",
    items: ["Remuneraciones", "Previred", "Gestión laboral y contable"],
  },
];

const Plans = () => {
  return (
    <section id="plans" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#C8A24A] font-semibold">Planes</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Planes de servicio
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white rounded-3xl p-8 shadow-md border border-gray-100"
            >
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="mt-3 text-gray-600">{plan.description}</p>

              <ul className="mt-6 space-y-3 text-gray-700">
                {plan.items.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>

              <a
                href="https://wa.me/56931087761"
                target="_blank"
                className="block mt-8 bg-[#071B3A] text-white text-center py-3 rounded-full hover:bg-[#0b2c5c]"
              >
                Consultar plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;