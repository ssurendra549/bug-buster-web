
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export function SectionTitle({ 
  title, 
  subtitle, 
  align = 'left',
  className 
}: SectionTitleProps) {
  return (
    <div className={cn(
      "mb-12",
      align === 'center' && "text-center",
      align === 'right' && "text-right",
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
    </div>
  );
}
