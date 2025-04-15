
import { Link } from 'react-router-dom';
import { Check, Zap, Database, Monitor, Smartphone, Server } from 'lucide-react';
import { BugIllustration } from '@/components/bug-illustration';
import { AnimatedBugBanner } from '@/components/animated-bug-banner';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { SectionTitle } from '@/components/ui/section-title';
import { ServiceCard } from '@/components/ui/service-card';
import { TestimonialCard } from '@/components/ui/testimonial-card';
import { PrimaryCta, SecondaryCta } from '@/components/ui/cta-button';
import { ToolCard } from '@/components/ui/tool-card';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 px-6 md:py-24 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Squashing Bugs<br />Since Day One.
              </h1>
              <h2 className="text-xl md:text-2xl mb-6 text-gray-600">
                Test smart. Release fearless.
              </h2>
              <p className="text-lg mb-8 text-gray-700">
                Tired of bugs ruining your product releases?<br />
                Talk to us—we're the QA experts who make sure bugs don't even get a chance to live.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <PrimaryCta asChild>
                  <Link to="/contact">Talk to Our QA Squad</Link>
                </PrimaryCta>
                <SecondaryCta asChild>
                  <Link to="/contact">Get a Free Bug Audit</Link>
                </SecondaryCta>
              </div>
            </div>
            <div className="lg:pl-10 animate-scale-in">
              <BugIllustration />
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto mt-16">
            <AnimatedBugBanner />
            <p className="text-center text-lg font-medium mt-4">
              "We test. You grow."
            </p>
            <p className="text-center text-gray-600">
              Because quality software is good business.
            </p>
          </div>
        </section>
        
        {/* Why QA Matters */}
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              title="Why QA Matters"
              subtitle="Quality assurance isn't just a nice-to-have—it's a business necessity."
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <Check className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Detect defects early and reduce release risk</h3>
                    <p className="text-gray-600">Finding bugs early in the development cycle saves up to 15x the cost of fixing them after release.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <Check className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Boost customer trust and brand reputation</h3>
                    <p className="text-gray-600">88% of users are less likely to return to a website after a bad experience.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <Check className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Save cost by preventing production failures</h3>
                    <p className="text-gray-600">A single hour of downtime costs enterprises an average of $100,000.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <Check className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Support CI/CD with stable pipelines</h3>
                    <p className="text-gray-600">Automated testing enables 3x more frequent deployments with 24% faster recovery times.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <Check className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Improve UX and accessibility compliance</h3>
                    <p className="text-gray-600">Accessible applications reach 15% more users while avoiding potential legal issues.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <h3 className="text-2xl font-bold mb-6 text-center">The Cost of Poor Quality</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="font-medium">Bug found during development</span>
                    <span className="font-bold text-green-600">$100</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="font-medium">Bug found during testing</span>
                    <span className="font-bold text-yellow-600">$500</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="font-medium">Bug found in production</span>
                    <span className="font-bold text-red-600">$10,000+</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="font-medium">Lost customer due to bugs</span>
                    <span className="font-bold text-red-600">Priceless</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-md">
                  <p className="text-blue-700 font-medium text-center">
                    Investing in quality isn't an expense—it's a strategic advantage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Services */}
        <section className="py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              title="Our Services"
              subtitle="End-to-end QA services that actually end bugs."
              align="center"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                title="Automation Testing"
                description="Accelerate releases with scalable test suites using Selenium, Cypress, Playwright and more."
                icon={Zap}
              />
              <ServiceCard
                title="Salesforce Testing"
                description="Specialized automation for complex Salesforce apps with Provar expertise."
                icon={Server}
              />
              <ServiceCard
                title="Mobile & Web QA"
                description="End-to-end testing for Android, iOS, and responsive web applications."
                icon={Smartphone}
              />
              <ServiceCard
                title="CI/CD & DevOps QA"
                description="Integrate testing into your pipelines with Jenkins, GitHub Actions, and more."
                icon={Database}
              />
              <ServiceCard
                title="Cross-Browser Testing"
                description="Ensure compatibility across browsers and devices with BrowserStack and LambdaTest."
                icon={Monitor}
              />
              <ServiceCard
                title="Functional Testing"
                description="Manual exploratory testing, smoke and regression testing by QA experts."
                icon={Check}
              />
            </div>
            
            <div className="flex justify-center mt-10">
              <PrimaryCta asChild>
                <Link to="/services">View All Services</Link>
              </PrimaryCta>
            </div>
          </div>
        </section>
        
        {/* Tools & Platforms */}
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              title="Tools & Platforms"
              subtitle="We're experts in the tools that make modern QA possible."
              align="center"
            />
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <ToolCard
                name="Selenium"
                imageUrl="https://www.selenium.dev/images/selenium_logo_square_green.png"
              />
              <ToolCard
                name="Cypress"
                imageUrl="https://avatars.githubusercontent.com/u/8908513"
              />
              <ToolCard
                name="Playwright"
                imageUrl="https://playwright.dev/img/playwright-logo.svg"
              />
              <ToolCard
                name="Appium"
                imageUrl="https://avatars.githubusercontent.com/u/3221291"
              />
              <ToolCard
                name="Provar"
                imageUrl="https://www.provartesting.com/wp-content/uploads/2022/12/New-Provar-Logo-Vertical.png"
              />
              <ToolCard
                name="Jenkins"
                imageUrl="https://jenkins.io/images/logos/jenkins/jenkins.png"
              />
              <ToolCard
                name="BrowserStack"
                imageUrl="https://www.browserstack.com/images/layout/browserstack-logo-600x315.png"
              />
              <ToolCard
                name="GitHub Actions"
                imageUrl="https://avatars.githubusercontent.com/u/44036562"
              />
            </div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              title="Why Choose Us"
              subtitle="We're a pure QA company, and we're proud of it."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-bold mb-3">Specialists, Not Generalists</h3>
                  <p className="text-gray-600">
                    While others treat QA like a checkbox, we treat it like the secret weapon it is. Quality is our only focus.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-bold mb-3">Tool-Agnostic Strategies</h3>
                  <p className="text-gray-600">
                    We know all the tools, but we bring the mindset that makes them powerful. Solutions based on your needs, not our preferences.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-bold mb-3">Real-World Experience</h3>
                  <p className="text-gray-600">
                    Our team has helped enterprises and startups across industries ship confidently with battle-tested QA strategies.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-bold mb-3">Collaborative Partnership</h3>
                  <p className="text-gray-600">
                    We collaborate with your developers, not block them. We're part of your team, committed to your success.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-xl font-bold mb-3">End-to-End Partnership</h3>
                  <p className="text-gray-600">
                    From strategy to execution, we tailor our QA approach based on your product, tech stack, and timelines.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-100">
                  <h3 className="text-xl font-bold mb-3 text-blue-800">Think Like a User</h3>
                  <p className="text-blue-700">
                    We don't just test functionality—we test with empathy, curiosity, and a real-world lens to ensure your users have the best experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Client Testimonials */}
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              title="Client Testimonials"
              subtitle="Don't take our word for it—hear what our clients say."
              align="center"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TestimonialCard
                content="Their QA team is genuinely passionate about finding bugs. They don't just test, they think creatively about edge cases we'd never considered."
                author="Sarah Johnson"
                position="CTO"
                company="TechStart Inc."
              />
              <TestimonialCard
                content="We struggled with flaky tests for months before BugSquashers came in. They rebuilt our automation framework and cut our release cycle time in half."
                author="Michael Chen"
                position="VP of Engineering"
                company="Data Solutions"
              />
              <TestimonialCard
                content="The Salesforce testing expertise from BugSquashers is unmatched. They automated tests we thought were impossible to automate."
                author="Priya Patel"
                position="Salesforce Admin"
                company="CloudTech Solutions"
              />
            </div>
          </div>
        </section>
        
        {/* Final CTA */}
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-primary text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to release with confidence?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Let's build a smarter, faster QA process together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <PrimaryCta 
                asChild
                className="bg-white text-primary hover:bg-gray-100"
              >
                <Link to="/contact">Get a Free Bug Audit</Link>
              </PrimaryCta>
              <SecondaryCta 
                asChild
                className="border-white text-white hover:bg-white/10"
              >
                <Link to="/contact">Talk to QA Expert</Link>
              </SecondaryCta>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
