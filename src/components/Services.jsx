import { Calculator, FileText, Users, Building2 } from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Contabilidad",
    items: [
      "Contabilidad mensual",
      "Registro de compras y ventas",
      "Balances y estados financieros",
      "Informes de gestión",
    ],
  },
  {
    icon: FileText,
    title: "Tributación",
    items: [
      "Declaraciones F29",
      "Declaración de renta",
      "Inicio de actividades",
      "Trámites ante SII",
    ],
  },
  {
    icon: Users,
    title: "Laboral y remuneraciones",
    items: [
      "Contratos de trabajo",
      "Liquidaciones de sueldo",
      "Finiquitos",
      "Previred",
    ],
  },
  {
    icon: Building2,
    title: "Formalización de empresas",
    items: [
      "Constitución de empresas",
      "Obtención de RUT",
      "Facturación electrónica",
      "Acompañamiento completo",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#C8A24A] font-semibold">Servicios</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Soluciones para cada etapa de tu negocio
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="bg-[#f8f8f8] p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#071B3A] text-white flex items-center justify-center mb-5">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-bold mb-4">{service.title}</h3>

                <ul className="space-y-2 text-gray-600 text-sm">
                  {service.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;