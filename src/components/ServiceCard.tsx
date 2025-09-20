import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg border border-border hover:shadow-lg transition-shadow duration-300">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="mb-4">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}