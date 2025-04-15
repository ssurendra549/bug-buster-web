
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  slug: string;
  imageUrl?: string;
  className?: string;
}

export function BlogCard({ 
  title, 
  excerpt, 
  date, 
  author, 
  slug,
  imageUrl,
  className 
}: BlogCardProps) {
  return (
    <article className={cn(
      "bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300",
      className
    )}>
      {imageUrl && (
        <div className="aspect-video w-full overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Calendar className="mr-2 h-4 w-4" />
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{author}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
          <Link to={`/blog/${slug}`}>{title}</Link>
        </h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <Link 
          to={`/blog/${slug}`} 
          className="text-primary font-medium hover:underline"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}
