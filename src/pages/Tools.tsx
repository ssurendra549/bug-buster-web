
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { SectionTitle } from '@/components/ui/section-title';
import { ToolCard } from '@/components/ui/tool-card';
import { Bamboo, Github, Gitlab, Bitbucket, ShieldCheck, Cucumber } from 'lucide-react';

export default function Tools() {
  const tools = [
    {
      name: "Bamboo",
      description: "Continuous integration and deployment server",
      icon: Bamboo,
      imageUrl: "https://seeklogo.com/images/B/bamboo-logo-8D64504634-seeklogo.com.png"
    },
    {
      name: "GitHub",
      description: "Version control and collaboration platform",
      icon: Github,
      imageUrl: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
    },
    {
      name: "GitLab",
      description: "Complete DevOps platform",
      icon: Gitlab,
      imageUrl: "https://about.gitlab.com/images/press/logo/png/gitlab-icon-rgb.png"
    },
    {
      name: "Bitbucket",
      description: "Git code management for teams",
      icon: Bitbucket,
      imageUrl: "https://wac-cdn.atlassian.com/dam/jcr:c942540c-53ae-4357-bfec-c0d9fc771e50/Bitbucket-blue.svg"
    },
    {
      name: "Security Testing Tools",
      description: "Comprehensive security testing suite",
      icon: ShieldCheck,
      imageUrl: "https://cdn-icons-png.flaticon.com/512/6941/6941697.png"
    },
    {
      name: "Cucumber",
      description: "Behavior Driven Development tool",
      icon: Cucumber,
      imageUrl: "https://cucumber.io/img/cucumber-logo.svg"
    },
    {
      name: "TestNG",
      description: "Testing framework for Java",
      imageUrl: "https://testng.org/images/testng-logo.png"
    },
    {
      name: "SpecFlow",
      description: "BDD framework for .NET",
      imageUrl: "https://specflow.org/wp-content/uploads/2021/05/specflow-logo-new.svg"
    },
    {
      name: "Docker",
      description: "Containerization platform",
      imageUrl: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Our Testing Tools & Technologies"
            subtitle="We leverage industry-leading tools to deliver exceptional quality assurance"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-blue-500">
                {tool.icon && (
                  <tool.icon className="h-12 w-12 mb-4 text-primary" />
                )}
                <img 
                  src={tool.imageUrl} 
                  alt={tool.name} 
                  className="h-16 w-16 object-contain mb-4" 
                />
                <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                <p className="text-gray-600 text-center">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
