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
            "Evaluación inicial de la idea de negocio.",
            "Revisión del momento adecuado para formalizar.",
            "Orientación sobre tipos de empresa y estructuras jurídicas.",
            "Comparación entre persona natural y empresa.",
            "Régimen tributario más adecuado según cada caso.",
            "Inicio de actividades ante el SII.",
            "Habilitación y uso inicial de facturación electrónica.",
            "Revisión de obligaciones tributarias y administrativas iniciales.",
            "Costos y responsabilidades asociadas a la formalización.",
            "Contratación de trabajadores y obligaciones laborales básicas.",
            "Recomendaciones iniciales para comenzar de forma ordenada.",
            "Recomendaciones para evitar errores al comenzar.",
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
            "Revisión de obligaciones tributarias mensuales.",
            "Revisión de honorarios y documentos tributarios del período.",
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
            "Preparación y presentación de Formulario 29 (F29). ",
            "Revisión mensual de compras y ventas registradas en el SII.",
            "Cálculo de IVA débito y crédito fiscal.",
            "Registro contable de operaciones mensuales.",
            "Registro contable de operaciones.",
            "Registro de ingresos, gastos y honorarios.",
            "Conciliaciones bancarias.",
            "Estados de Resultados.",
            "Balances y prebalances.",
            "Revisión de obligaciones tributarias mensuales.",
            "Análisis básico de la situación contable y tributaria del negocio.",
            "Ordenamiento y respaldo de documentación contable.",
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
            "Revisión de obligaciones tributarias mensuales",
            "Registro contable de operaciones mensuales.",
            "Registro de ingresos, gastos y honorarios.",
            "⁠Conciliaciones bancarias.",
            "⁠⁠Estados de Resultados.",
            "Balances y prebalances.",
            "⁠⁠Contratos de trabajo.",
            "⁠⁠Anexos de contrato.",
            "⁠⁠Liquidaciones de sueldo.",
            "⁠⁠Finiquitos.",
            "⁠⁠Cartas de aviso.",
            "Gestión de cotizaciones previsionales.",
            "⁠Administración de Previred.",
            "⁠⁠Registro Electrónico Laboral.",
            "Tramitación de licencias médicas.",
            "⁠Revisión de obligaciones laborales y previsionales mensuales.",
            "Atención de consultas vía WhatsApp y correo electrónico.",


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
            "Regularización de situaciones tributarias ante el SII.",
            "Revisión de observaciones, inconsistencias o bloqueos tributarios.",
            "⁠Convenios de pago y revisión de deudas tributarias.",
            "⁠Revisión de multas, intereses y giros pendientes.",
            "Revisión de devoluciones retenidas.",
            "⁠Observaciones de Operación Renta.",
            "Presentación de peticiones administrativas ante el SII.",
            "Inicio de actividades ante el SII.",
            "Término de giro.",
            "Ampliación, modificación o actualización de giro.",
            "Actualización de información tributaria del contribuyente.",
            "⁠Regularización de documentación pendiente.",
            "⁠Apoyo en procesos de formalización de empresas.",
            "Tramitación y apoyo en verificación de actividad.",
            "Revisión de antecedentes para facturación electrónica.",
            "Asesoría específica en materias contables, tributarias, laborales o administrativas.",

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
            "Declaración de Renta para empresas Pro Pyme General.",
            "Declaración de Renta para empresas Pro Pyme Transparente.",
            "Declaración de Renta para personas naturales.",
            "Revisión de propuesta de renta para trabajadores dependientes.",
            "Declaración de Renta para contribuyentes que emiten boletas de honorarios.",
            "⁠Revisión y análisis de propuesta de declaración del SII.",
            "Revisión de observaciones de Operación Renta.",
            "⁠Rectificación de declaraciones de renta.",
            "⁠Revisión de devoluciones retenidas.",
            "Determinación de impuestos asociados a la enajenación de bienes raíces."
        ],
    },
];