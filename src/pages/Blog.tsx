
import { useState } from 'react';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { SectionTitle } from '@/components/ui/section-title';
import { BlogCard } from '@/components/ui/blog-card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';

// Sample blog data - in a real app, this would come from an API or CMS
const sampleBlogs = [
  {
    id: 1,
    title: "Best Practices for Web Automation Testing in 2023",
    excerpt: "Learn the top automation testing strategies that will help you build reliable, maintainable test suites for your web applications.",
    date: "April 10, 2023",
    author: "Sarah Johnson",
    slug: "best-practices-web-automation-testing",
    tags: ["automation", "selenium", "testing"],
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
  },
  {
    id: 2,
    title: "Mobile Testing Challenges and How to Overcome Them",
    excerpt: "Mobile testing presents unique challenges compared to web. Here's how we approach them with Appium and other tools.",
    date: "March 22, 2023",
    author: "Michael Chen",
    slug: "mobile-testing-challenges-solutions",
    tags: ["mobile", "appium", "testing"],
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 3,
    title: "Setting Up a Robust CI/CD Pipeline for Continuous Testing",
    excerpt: "A step-by-step guide to integrate your test automation into Jenkins, GitHub Actions, or other CI/CD tools for maximum efficiency.",
    date: "February 18, 2023",
    author: "Priya Patel",
    slug: "cicd-pipeline-continuous-testing",
    tags: ["devops", "CI/CD", "jenkins"],
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 4,
    title: "Test Data Management Strategies for QA Teams",
    excerpt: "Effective test data management is crucial for reliable testing. Here's our approach to handling test data for different scenarios.",
    date: "January 29, 2023",
    author: "Alex Rodriguez",
    slug: "test-data-management-strategies",
    tags: ["testing", "data", "best practices"],
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80",
  },
  {
    id: 5,
    title: "Mastering Salesforce Testing with Provar",
    excerpt: "Salesforce testing requires specialized approaches. Discover how Provar makes testing complex Salesforce implementations easier.",
    date: "January 10, 2023",
    author: "Lisa Wong",
    slug: "salesforce-testing-provar-guide",
    tags: ["salesforce", "provar", "automation"],
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
  },
  {
    id: 6,
    title: "The Future of Test Automation: AI and ML Approaches",
    excerpt: "How artificial intelligence and machine learning are transforming test automation and what it means for QA professionals.",
    date: "December 5, 2022",
    author: "Daniel Smith",
    slug: "future-test-automation-ai-ml",
    tags: ["AI", "machine learning", "future"],
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
];

// Extract all unique tags
const allTags = [...new Set(sampleBlogs.flatMap(blog => blog.tags))];

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Filter blogs based on search term and selected tag
  const filteredBlogs = sampleBlogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTag = selectedTag ? blog.tags.includes(selectedTag) : true;
    
    return matchesSearch && matchesTag;
  });
  
  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-50 to-blue-50 py-16 px-6 md:py-20 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              title="Our QA Blog"
              subtitle="Insights, guides, and thought leadership on software testing and quality assurance."
            />
            
            {/* Search and Filter */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input 
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {allTags.map(tag => (
                  <Badge 
                    key={tag} 
                    variant={selectedTag === tag ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => handleTagClick(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Blog Posts */}
        <section className="py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            {filteredBlogs.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold mb-4">No articles found</h3>
                <p className="text-gray-600">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBlogs.map(blog => (
                  <BlogCard 
                    key={blog.id}
                    title={blog.title}
                    excerpt={blog.excerpt}
                    date={blog.date}
                    author={blog.author}
                    slug={blog.slug}
                    imageUrl={blog.imageUrl}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
