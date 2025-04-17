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
      "p-4 rounded-lg bg-slate-50 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md",
      className
    )}>
      <img 
        src={imageUrl} 
        alt={name} 
        className="h-16 w-16 object-contain mb-3" 
      />
      <p className="text-center font-medium text-gray-700">{name}</p>
    </div>
  );
}
