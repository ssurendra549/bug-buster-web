
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export function ServiceCard({ 
  title, 
  description, 
  icon: Icon,
  className 
}: ServiceCardProps) {
  return (
    <div className={cn(
      "p-6 border rounded-lg hover:shadow-md transition-shadow duration-300 bg-white",
      className
    )}>
      <div className="h-12 w-12 bg-primary/10 flex items-center justify-center rounded-lg mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
