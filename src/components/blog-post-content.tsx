
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { SectionTitle } from '@/components/ui/section-title';

interface BlogPostContentProps {
  title: string;
  date: string;
  author: string;
  content: string;
  tags?: string[];
  imageUrl?: string;
}

export function BlogPostContent({ 
  title, 
  date, 
  author, 
  content,
  tags = [],
  imageUrl
}: BlogPostContentProps) {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Scroll to top when blog post loads
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <article className="max-w-3xl mx-auto">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center text-primary mb-6 hover:underline"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to all posts
      </button>
      
      <SectionTitle 
        title={title}
        className="mb-4"
      />
      
      <div className="flex items-center text-gray-500 mb-8">
        <div className="flex items-center mr-6">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{date}</span>
        </div>
        <div className="flex items-center">
          <User className="h-4 w-4 mr-2" />
          <span>{author}</span>
        </div>
      </div>
      
      {imageUrl && (
        <div className="mb-8">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-auto rounded-lg"
          />
        </div>
      )}
      
      <div 
        className="prose max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-a:text-primary"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      
      {tags.length > 0 && (
        <div className="mt-8 pt-6 border-t">
          <div className="flex items-center flex-wrap gap-2">
            <Tag className="h-4 w-4 text-gray-500 mr-2" />
            {tags.map(tag => (
              <Link 
                key={tag}
                to={`/blog/tag/${tag.toLowerCase()}`}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
