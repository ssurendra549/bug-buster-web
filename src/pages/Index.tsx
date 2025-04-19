import { Link } from 'react-router-dom';
import { Check, Zap, Database, Monitor, Smartphone, Users, Shield, Brain,CheckCircleIcon,CogIcon,CloudIcon,ClipboardListIcon,Accessibility} from 'lucide-react';
import { HeroImage } from '@/components/hero-image';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { SectionTitle } from '@/components/ui/section-title';
import { ServiceCard } from '@/components/ui/service-card';
import { TestimonialCard } from '@/components/ui/testimonial-card';
import { PrimaryCta, SecondaryCta } from '@/components/ui/cta-button';
import { ToolCard } from '@/components/ui/tool-card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { useEffect, useState } from 'react';
import { access } from 'fs';

const HeroPunchlines = [
  "We don't just test. We stop bugs before they're born.",
  "We don't just run scripts—we build smarter ways to make it bulletproof",
  "Your users deserve flawless. We deliver it.",
  "No more patching after launch. We catch it before release.",
  "From Provar to Playwright, we speak every QA language."
];

const HomePage = () => {
  const [currentPunchlineIndex, setCurrentPunchlineIndex] = useState(0);
  
  useEffect(() => {
    // Auto-rotate through punch lines every 5 seconds
    const interval = setInterval(() => {
      setCurrentPunchlineIndex((prev) => (prev + 1) % HeroPunchlines.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="h-screen py-12 px-6 md:py-16 md:px-12 lg:px-20 bg-blue-50">     
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-1/2 space-y-3">
              <h2 className="text-xl md:text-xl font-bold text-blue-900">
                Tired of bugs ruining your product releases?
              </h2>
              
              <p className="text-sm md:text-base text-gray-700">
                We're the QA experts who make sure bugs don't even get a chance to live.
              </p>
              <p className="text-sm md:text-base text-gray-700">
                We kill bugs before they’re born.
              </p>
              
              {/* Carousel for punch lines - moved below the text */}
              <div className="h-20 mt-2">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                  value={currentPunchlineIndex}
                  onValueChange={(value) => setCurrentPunchlineIndex(value)}
                >
                  <CarouselContent className="ml-0">
                    {HeroPunchlines.map((line, index) => (
                      <CarouselItem key={index} className="pl-0 text-sm md:text-base">
                        <div className="p-1">
                          <h2 className="text-base md:text-lg font-bold text-blue-900">{line}</h2>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <PrimaryCta 
                  asChild 
                  className="bg-black hover:bg-gray-800 text-white text-sm py-2 px-3 h-auto"
                >
                  <Link to="/contact">Talk to Our QA Squad</Link>
                </PrimaryCta>
                <SecondaryCta 
                  asChild 
                  className="border-black text-black hover:bg-gray-100 text-sm py-2 px-3 h-auto"
                >
                  <Link to="/services">Get a Free Bug Audit</Link>
                </SecondaryCta>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center items-center">
              <HeroImage />
            </div>
          </div>
        </section>
        
        {/* Our Services */}
        <section className="py-16 px-6 md:px-12 lg:px-28">
          <div className="max-w-7xl mx-auto">
            <SectionTitle
              title="Our Services"
              subtitle="End-to-end QA services that actually end bugs."
              align="center"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard
                title="Functional Testing"
                description="Manual exploratory testing, smoke and regression testing by QA experts."
                icon={CheckCircleIcon}
              />
              <ServiceCard
                title="Automation Testing"
                description="Accelerate releases with scalable test suites using Selenium, Cypress, Playwright and more."
                icon={CogIcon}
              />
              <ServiceCard
                title="Salesforce Testing"
                description="Specialized automation for complex Salesforce apps with Provar expertise."
                icon={CloudIcon}
              />
              <ServiceCard
                title="Mobile & Web QA"
                description="End-to-end testing for Android, iOS, and responsive web applications."
                icon={Smartphone}
              />
              <ServiceCard
                title="CI/CD & DevOps QA"
                description="Integrate testing into your pipelines with Jenkins, GitHub Actions, and more."
                icon={ClipboardListIcon}
              />
              <ServiceCard
                title="Cross-Browser Testing"
                description="Ensure compatibility across browsers and devices with BrowserStack and LambdaTest."
                icon={Monitor}
              />
              <ServiceCard
                title="Performance Testing"
                description="Identify bottlenecks and optimize your application for speed and scalability."
                icon={Zap}
              />
              <ServiceCard
                title="Security Testing"
                description="Protect your application from vulnerabilities with comprehensive security assessments."
                icon={Shield}
              />
              <ServiceCard
                title="Database Testing"
                description="Ensure data integrity, validate queries, and optimize database performance."
                icon={Database}
              />
              <ServiceCard
                title="Accessibility Testing"
                description="Ensure your application is usable and inclusive for people with disabilities."
                icon={Accessibility}
              />
              <ServiceCard
                title="AI/ML Testing"
                description="Validate AI/ML models for accuracy, bias, and performance with specialized testing."
                icon={Brain}
              />
              <ServiceCard
                title="QA Audit & Team Management"
                description="Comprehensive QA audits to identify gaps and improve your testing strategy. Manage and empower QA teams to deliver quality at every stage."
                icon={Users}
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
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
                imageUrl="https://provar.com/wp-content/uploads/elementor/thumbs/Provar_navy_new-tag-qfdhvey067hofe37atl5qbj018nqzl2qzcwky11pao.png"
              />
              <ToolCard 
                name="WebdriverIO"
                imageUrl="https://webdriver.io/img/webdriverio.png" 
              />
              <ToolCard
                name="JMeter"
                imageUrl="https://jmeter.apache.org/images/jmeter.png"
               />
              <ToolCard 
                name="k6" 
                imageUrl="https://avatars.githubusercontent.com/u/28234837" 
              />
              <ToolCard
                name="Jenkins"
                imageUrl="https://jenkins.io/images/logos/jenkins/jenkins.png"
              />
              <ToolCard
                name="BrowserStack"
                imageUrl="https://www.browserstack.com/images/layout/browserstack-logo-600x315.png"
              />
            </div>
            <div className="flex justify-center mt-10">
              <PrimaryCta asChild>
                <Link to="/tools">Explore All Tools</Link>
              </PrimaryCta>
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

        {/*QA Value Section - Tile Style*/}
<section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
    
    {/* Tile: Why QA Matters */}
    <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 h-full flex flex-col transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:border-blue-500">
      <h2 className="text-2xl font-bold mb-6 text-center">Why QA Matters</h2>
      <div className="space-y-5 flex-grow">
        {[
          "Catch bugs early, reduce risk",
          "Boost user trust",
          "Prevent outages",
          "Enable fast releases",
          "Ensure accessibility",
        ].map((point, index) => (
          <div key={index} className="flex items-start space-x-3">
            <Check className="h-5 w-5 text-blue-600 mt-1" />
            <p className="text-gray-700">{point}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 bg-green-50 p-3 rounded text-center">
        <p className="text-green-700 font-medium text-sm">
          QA accelerates delivery, protects your brand & delights users.
        </p>
      </div>
    </div>

    {/* Tile: Cost of Poor Quality */}
    <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 h-full flex flex-col transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:border-red-500">
      <h2 className="text-2xl font-bold mb-6 text-center">Cost of Poor Quality</h2>
      <div className="space-y-5 flex-grow">
        {[
          { label: "Bug in development", cost: "$100", color: "text-green-600" },
          { label: "Bug in QA", cost: "$500", color: "text-yellow-500" },
          { label: "Bug in production", cost: "$10,000+", color: "text-red-600" },
          { label: "Lost customer", cost: "Priceless", color: "text-red-600" },
        ].map(({ label, cost, color }, index) => (
          <div key={index} className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-700">{label}</span>
            <span className={`font-semibold ${color}`}>{cost}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 bg-blue-50 p-3 rounded text-center">
        <p className="text-blue-700 font-medium text-sm">
          Quality saves time, money & reputation.
        </p>
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
                content="We struggled with flaky tests for months before Flyhigh came in. They rebuilt our automation framework and cut our release cycle time in half."
                author="Michael Chen"
                position="VP of Engineering"
                company="Data Solutions"
              />
              <TestimonialCard
                content="The Salesforce testing expertise from Flyhigh is unmatched. They automated tests we thought were impossible to automate."
                author="Priya Patel"
                position="Salesforce Admin"
                company="CloudTech Solutions"
              />
            </div>
          </div>
        </section>
        
        {/* Final CTA */}
        <section className="py-12 px-6 md:py-16 md:px-12 lg:px-20 bg-blue-50">

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
                className="bg-white text-primary hover:bg-gray-100"
              >
                <Link to="/contact">Talk to QA Expert</Link>
              </SecondaryCta >
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
