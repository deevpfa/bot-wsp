import { cn } from "@/constants/common";
import {
    IconAdjustmentsBolt,
    IconChartFunnel,
    IconCloud,
    IconCurrencyDollar,
    IconEaseInOut,
    IconHeart,
    IconHelp,
    IconLockSquare,
    IconRouteAltLeft,
    IconTerminal2,
    IconBrandWhatsapp
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
    const features = [
        {
            title: "Automatización 24/7",
            description:
                "Chatbots que responden preguntas y realizan tareas repetitivas todo el día.",
            icon: <IconTerminal2 />,
        },
        {
            title: "Respuestas Rápidas y Personalizadas",
            description:
                "Chatbots que brindan respuestas rápidas y ajustadas a cada cliente.",
            icon: <IconEaseInOut />,
        },
        {
            title: "Reducción de Costos",
            description:
                "Menos intervención humana, menores costos operativos.",
            icon: <IconChartFunnel />,
        },
        {
            title: "Uso Eficiente de WhatsApp",
            description: "mplementamos WhatsApp Business para comunicación directa y en tiempo real.",
            icon: <IconBrandWhatsapp />,
        },
        {
            title: "Seguridad y Privacidad",
            description: "Comunicaciones seguras y encriptadas.",
            icon: <IconLockSquare />,
        },
        {
            title: "Precios Transparentes",
            description: "Sin costos ocultos, sin sorpresas.",
            icon: <IconCurrencyDollar />,
        },
    ];
    return (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3  relative z-10 py-10 max-w-7xl mx-auto">
            {features.map((feature, index) => (
                <Feature key={feature.title} {...feature} index={index} />
            ))}
        </div>
    );
}

const Feature = ({
    title,
    description,
    icon,
    index,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col px-4 lg:px-0  lg:border-r-[0.2px] py-6 lg:py-10 relative group/feature text-white",
                (index === 0 || index === 3) && "lg:border-l-[0.2px] text-white",
                index < 3 && "lg:border-b-[0.2px] text-white"
            )}
        >
            {index < 3 && (
                <div className="opacity-0 lg:group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-colors-neutral-600 to-transparent pointer-events-none" />
            )}
            {index >= 3 && (
                <div className="opacity-0 lg:group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-colors-neutral-600 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-3 lg:px-10 text-white dark:text-white">
                {icon}
            </div>
            <div className="lg:text-lg text-sm font-bold mb-2 relative z-10 px-3 lg:px-10">
                <div className="absolute left-0 inset-y-0 h-6 lg:group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-colors-neutral-300  transition-all duration-200 origin-center" />
                <span className="lg:group-hover/feature:translate-x-2 transition duration-200 inline-block text-white dark:text-white">
                    {title}
                </span>
            </div>
            <p className="lg:text-sm text-xs text-white dark:text-white max-w-xs relative z-10 px-3 lg:px-10">
                {description}
            </p>
        </div>
    );
};
