
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  content: string;
  author: string;
  position: string;
  company: string;
  imageUrl?: string;
  className?: string;
}

export function TestimonialCard({ 
  content, 
  author, 
  position, 
  company,
  imageUrl,
  className 
}: TestimonialCardProps) {
  return (
    <div className={cn(
      "p-6 bg-white rounded-lg border shadow-sm",
      className
    )}>
      <Quote className="h-8 w-8 text-primary/30 mb-4" />
      <p className="text-gray-700 mb-6 italic">"{content}"</p>
      <div className="flex items-center">
        {imageUrl && (
          <div className="mr-4">
            <img 
              src={imageUrl} 
              alt={author} 
              className="h-12 w-12 rounded-full object-cover"
            />
          </div>
        )}
        <div>
          <h4 className="font-bold">{author}</h4>
          <p className="text-sm text-gray-600">{position}, {company}</p>
        </div>
      </div>
    </div>
  );
}
