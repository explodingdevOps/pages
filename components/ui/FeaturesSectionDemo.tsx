import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Real-Time Data Updates",
      description:
        "Never miss an opportunity. Our data refreshes in real time, ensuring you always have the latest insights.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Advanced Filtering Options:",
      description:
        "Customize your search based on industries, funding stages, regions, and more for hyper-targeted results.",
      icon: <IconEaseInOut />,
    },
    {
      title: "In-Depth Analytics:",
      description:
        "Beyond raw data, our analytics tools uncover patterns, trends, and actionable insights.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Custom Dashboards:",
      description: "Personalize your view to track metrics and KPIs that matter most to you.",
      icon: <IconCloud />,
    },
    {
      title: "Founder and Investor Profiles:",
      description: "Access detailed profiles to discover influential players and potential collaborators.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Industry Benchmarking Tools:",
      description:
        "Compare your performance against industry leaders to identify gaps and opportunities.",
      icon: <IconHelp />,
    },
    {
      title: "Collaboration Features:",
      description:
        "Share dashboards, reports, and insights seamlessly with your team.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Secure and Reliable:",
      description: "Your data is protected with industry-standard security protocols, ensuring privacy and trust.",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
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

    <div className={cn( "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",(index === 0 || index === 4) && "lg:border-l dark:border-neutral-800", index < 4 && "lg:border-b dark:border-neutral-800")}>
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-0 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-0 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};