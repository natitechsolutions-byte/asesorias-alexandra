import {
    Calculator,
    FileText,
    Building2,
    Users,
    ClipboardList,
    Landmark,
} from "lucide-react";

import {
    FaBuilding,
    FaFileInvoiceDollar,
    FaCalculator,
    FaUsers,
    FaUniversity,
    FaClipboardList,
} from "react-icons/fa";

export const servicesData = [
    {
        slug: "orientacion-emprendedores",
        icon: FaBuilding,
        title: "Orientación para Emprendedores y Nuevas Empresas",
        short:
            "Asesoría dirigida a personas que desean iniciar un negocio o que tienen dudas respecto a su formalización y obligaciones tributarias.",
        description:
            "Asesoría dirigida a personas que desean iniciar un negocio o que tienen dudas respecto a su formalización y obligaciones tributarias.",
        items: [
            "Evaluación para formalizar tu idea de negocio.",
            "Cuándo conviene formalizar un negocio.",
            "Orientación sobre tipos de empresas y estructuras jurídicas",
            "Persona natural o empresa: ventajas y diferencias.",
            "Régimen tributario más adecuado según cada caso.",
            "Inicio de actividades ante el SII.",
            "Orientación sobre obligaciones tributarias.",
            "Facturación electrónica.",
            "Obligaciones tributarias iniciales.",
            "Contratación de trabajadores.",
            "Costos y responsabilidades asociadas a la formalización.",
            "Planificación básica para iniciar un negocio de forma ordenada.",
        ],
    },
    {
        slug: "plan-tributario",
        icon: FaFileInvoiceDollar,
        title: "Plan Tributario",
        short:
            "Ideal para empresas y emprendedores que necesitan cumplir correctamente sus obligaciones tributarias mensuales.",
        description:
            "Ideal para empresas y emprendedores que necesitan cumplir correctamente sus obligaciones tributarias mensuales.",
        items: [
            "Preparación y presentación de Formulario 29 (F29).",
            "Revisión mensual de compras y ventas registradas en el SII.",
            "Cálculo de IVA débito y crédito fiscal.",
            "Declaración mensual de impuestos.",
            "Orientación tributaria.",
            "Atención de consultas vía WhatsApp y correo electrónico.",
        ],
    },
    {
        slug: "plan-tributario-contable",
        icon: FaCalculator,
        title: "Plan Tributario y Contable",
        short:
            "Ideal para empresas y emprendedores que buscan cumplir sus obligaciones tributarias y mantener un control ordenado de la información financiera de su negocio.",
        description:
            "Ideal para empresas y emprendedores que buscan cumplir sus obligaciones tributarias y mantener un control ordenado de la información financiera de su negocio.",
        items: [
            "Preparación y presentación de Formulario 29 (F29).",
            "Revisión mensual de compras y ventas registradas en el SII.",
            "Cálculo de IVA débito y crédito fiscal.",
            "⁠Declaración mensual de impuestos.",
            "⁠Orientación tributaria.",
            "Registro contable de operaciones.",
            "Registro de ingresos, gastos y honorarios.",
            "Libro Diario.",
            "Libro Mayor.",
            "Conciliaciones bancarias.",
            "Estados de Resultados.",
            "Balances y prebalances.",
            "⁠Atención de consultas vía WhatsApp y correo electrónico.",
        ],
    },
    {
        slug: "plan-integral-empresa",
        icon: FaUsers,
        title: "Plan Integral Empresa",
        short:
            "Ideal para empresas con trabajadores que requieren apoyo tributario, contable y laboral.",
        description:
            "Ideal para empresas con trabajadores que requieren apoyo tributario, contable y laboral.",
        items: [
            "Preparación y presentación de Formulario 29 (F29).",
            "⁠Revisión mensual de compras y ventas registradas en el SII.",
            "⁠Cálculo de IVA débito y crédito fiscal.",
            "⁠Declaración mensual de impuestos.",
            "⁠Orientación tributaria.",
            "Registro contable de operaciones.",
            "⁠Registro de ingresos, gastos y honorarios.",
            "⁠Libro Diario.",
            "⁠⁠Libro Mayor.",
            "⁠Conciliaciones bancarias.",
            "⁠⁠Estados de Resultados.",
            "⁠Balances.",
            "⁠⁠Prebalances.",
            "⁠⁠Contratos de trabajo.",
            "⁠⁠Anexos de contrato.",
            "⁠⁠Liquidaciones de sueldo.",
            "⁠⁠Finiquitos.",
            "⁠⁠Cartas de aviso.",
            "Gestión de cotizaciones previsionales.",
            "⁠Administración de Previred.",
            "⁠⁠Registro Electrónico Laboral.",
            "⁠Gestión de licencias médicas.",
            "⁠⁠Orientación respecto de obligaciones laborales y previsionales.",
            "⁠⁠Atención de consultas vía WhatsApp, correo electrónico."


        ],
    },
{
    slug: "servicios-complementarios",
        icon: ClipboardList,
            title: "Servicios Complementarios",
                short:
    "Además de nuestros planes de asesoría permanente, ofrecemos apoyo en situaciones específicas y requerimientos particulares de empresas y contribuyentes.",
        description:
    "Además de nuestros planes de asesoría permanente, ofrecemos apoyo en situaciones específicas y requerimientos particulares de empresas y contribuyentes.",
        items: [
            "Regularización de situaciones tributarias ante el Servicio de Impuestos Internos (SII).",
            "Revisión y análisis de observaciones tributarias.",
            "⁠Convenios de pago y revisión de deudas tributarias.",
            "⁠Análisis y revisión de casos tributarios específicos.",
            "⁠Modificaciones y actualizaciones de información tributaria.",
            "⁠Inicio de actividades.",
            "⁠Ampliación o modificación de giro.",
            "⁠Término de giro.",
            "⁠Regularización de documentación pendiente.",
            "⁠Apoyo en procesos de formalización de empresas.",
            "⁠Revisión de cumplimiento tributario y administrativo.",
            "⁠Orientación para emprendedores y empresas que inician actividades.",
            "⁠Observaciones de Operación Renta.",
            "⁠Revisión de devoluciones retenidas.",
            "⁠Análisis de inconsistencias tributarias.",
            "⁠Actualización de actividades económicas.",
            "⁠Presentación de peticiones administrativas ante el SII.",
            "⁠Revisión de multas e intereses tributarios.",
            "⁠Orientación en materias contables, tributarias, laborales y administrativas"


        ],
    },
{
    slug: "declaracion-renta",
        icon: FaUniversity,
            title: "Declaración de Renta",
                short:
    "Ofrecemos asesoría y preparación de declaraciones de renta para empresas y personas naturales, analizando cada caso de forma individual para determinar las obligaciones tributarias y beneficios aplicables.",
        description:
    "Ofrecemos asesoría y preparación de declaraciones de renta para empresas y personas naturales, analizando cada caso de forma individual para determinar las obligaciones tributarias y beneficios aplicables.",
        items: [
            "⁠Declaración de Renta para empresas acogidas a Régimen Pro Pyme General (14 D N°3)",
            " ⁠Declaración de Renta para empresas acogidas a Régimen Transparente (14 D N°8).",
            "⁠Declaración de Renta para personas naturales.",
            "⁠Declaración de Renta para trabajadores dependientes.",
            "⁠Declaración de Renta para contribuyentes que emiten boletas de honorarios.",
            "⁠Revisión de observaciones de Operación Renta.",
            "⁠Rectificaciones de declaraciones de renta.",
            "⁠Análisis de propuestas elaboradas por el Servicio de Impuestos Internos.",
            "⁠Revisión de devoluciones retenidas.",
            "⁠Determinación y cálculo de impuestos asociados a la enajenación de bienes raíces.",
            "⁠Orientación tributaria relacionada con procesos de Operación Renta."
        ],
    },
];