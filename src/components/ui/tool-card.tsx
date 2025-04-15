
import { cn } from "@/lib/utils";

interface ToolCardProps {
  name: string;
  imageUrl: string;
  className?: string;
}

export function ToolCard({ 
  name, 
  imageUrl,
  className 
}: ToolCardProps) {
  return (
    <div className={cn(
      "p-4 border rounded-lg flex flex-col items-center justify-center hover:shadow-md transition-shadow duration-300 bg-white",
      className
    )}>
      <img 
        src={imageUrl} 
        alt={name} 
        className="h-16 w-16 object-contain mb-3" 
      />
      <p className="text-center font-medium">{name}</p>
    </div>
  );
}
