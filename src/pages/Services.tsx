
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { SectionTitle } from '@/components/ui/section-title';
import { PrimaryCta } from '@/components/ui/cta-button';
import { Link } from 'react-router-dom';
import { Zap, Server, Smartphone, Check, Database, Monitor } from 'lucide-react';

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 md:py-24 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              End-to-End QA Services That Actually End Bugs.
            </h1>
            <p className="text-xl opacity-90">
              From strategy to execution, we tailor our QA approach based on your product, tech stack, and timelines. 
              No fluff. Just real testing with real results.
            </p>
          </div>
        </section>
        
        {/* Core Services */}
        <section className="py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              title="Our Core Services"
              subtitle="Comprehensive quality assurance solutions for your entire product lifecycle."
              align="center"
            />
            
            {/* Automation Testing */}
            <div className="mb-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <div className="bg-blue-50 p-8 rounded-lg">
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Automation Testing</h3>
                  <p className="text-gray-700">
                    Accelerate releases and reduce manual effort with robust, maintainable test automation.
                  </p>
                </div>
              </div>
              
              <div className="lg:col-span-2 space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h4 className="font-bold mb-2">Frameworks & Tools</h4>
                  <p className="text-gray-600">
                    We're experts in Selenium, Cypress, Playwright, WebdriverIO and can build frameworks 
                    from scratch or optimize your existing solutions.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h4 className="font-bold mb-2">Scalable Test Suites</h4>
                  <p className="text-gray-600">
                    Our automation solutions scale with your product, with optimized execution time,
                    parallel processing, and clean code practices.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h4 className="font-bold mb-2">Reporting & Dashboards</h4>
                  <p className="text-gray-600">
                    Custom reporting solutions that provide actionable insights, with dashboards
                    that give visibility to stakeholders at all levels.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h4 className="font-bold mb-2">API + UI Combined Strategies</h4>
                  <p className="text-gray-600">
                    We build pyramids of testing that balance API and UI automation for maximum
                    coverage with minimum execution time.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Salesforce Testing */}
            <div className="mb-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <div className="bg-indigo-50 p-8 rounded-lg">
                  <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                    <Server className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Salesforce Testing</h3>
                  <p className="text-gray-700">
                    We specialize in automating complex Salesforce applications with Provar expertise.
                  </p>
                </div>
              </div>
              
              <div className="lg:col-span-2 space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h4 className="font-bold mb-2">UI Flows & Custom Objects</h4>
                  <p className="text-gray-600">
                    Comprehensive testing of custom Salesforce implementations, including Lightning components,
                    custom objects, and complex business processes.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h4 className="font-bold mb-2">Provar CI Integration</h4>
                  <p className="text-gray-600">
                    Seamless integration of Provar tests into your CI pipeline, ensuring quality
                    checks with every code push and deployment.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h4 className="font-bold mb-2">Test Data Management</h4>
                  <p className="text-gray-600">
                    Strategies for test data generation, management and cleanup in Salesforce sandboxes,
                    ensuring reliable and repeatable tests.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h4 className="font-bold mb-2">Sandbox Automation</h4>
                  <p className="text-gray-600">
                    Automated solutions for sandbox refresh processes, configuration, and
                    data preparation for testing.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Mobile Testing */}
            <div className="mb-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <div className="bg-purple-50 p-8 rounded-lg">
                  <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Smartphone className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Mobile Testing</h3>
                  <p className="text-gray-700">
                    From real devices to emulators—we've got your mobile apps covered for quality.
                  </p>
                </div>
              </div>
              
              <div className="lg:col-span-2 space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h4 className="font-bold mb-2">Android & iOS Expertise</h4>
                  <p className="text-gray-600">
                    Comprehensive testing across both major mobile platforms using Appium, 
                    XCUITest, and Espresso for native capabilities.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h4 className="font-bold mb-2">Real Devices & Emulators</h4>
                  <p className="text-gray-600">
                    Testing strategies that balance real device testing with emulators/simulators 
                    for optimal coverage and cost efficiency.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h4 className="font-bold mb-2">Visual Validation</h4>
                  <p className="text-gray-600">
                    Screen comparison, layout validation, and responsive design verification 
                    across different screen sizes and orientations.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h4 className="font-bold mb-2">Native + Hybrid Apps</h4>
                  <p className="text-gray-600">
                    Testing expertise for both fully-native applications and hybrid approaches 
                    using technologies like React Native or Flutter.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Functional & Manual Testing */}
            <div className="mb-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <div className="bg-green-50 p-8 rounded-lg">
                  <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Check className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Functional & Manual Testing</h3>
                  <p className="text-gray-700">
                    Sometimes, human eyes matter most for finding critical usability issues.
                  </p>
                </div>
              </div>
              
              <div className="lg:col-span-2 space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h4 className="font-bold mb-2">Exploratory Testing</h4>
                  <p className="text-gray-600">
                    Structured approach to free-form testing that uncovers issues automated tests often miss,
                    with session-based techniques for maximum effectiveness.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h4 className="font-bold mb-2">Standard Test Cycles</h4>
                  <p className="text-gray-600">
                    Comprehensive smoke, sanity, regression, and user acceptance testing protocols
                    to ensure quality at every development stage.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h4 className="font-bold mb-2">Edge Case Analysis</h4>
                  <p className="text-gray-600">
                    Identification of boundary conditions and unexpected user flows that might 
                    break your application in production.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h4 className="font-bold mb-2">Usability Testing</h4>
                  <p className="text-gray-600">
                    Evaluation of your application's user experience from real-world perspectives,
                    with actionable recommendations for improvement.
                  </p>
                </div>
              </div>
            </div>
            
            {/* CI/CD Integration */}
            <div className="mb-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <div className="bg-orange-50 p-8 rounded-lg">
                  <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <Database className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">CI/CD + DevOps QA Integration</h3>
                  <p className="text-gray-700">
                    We bake quality assurance into your delivery pipelines for continuous quality.
                  </p>
                </div>
              </div>
              
              <div className="lg:col-span-2 space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h4 className="font-bold mb-2">Pipeline Integration</h4>
                  <p className="text-gray-600">
                    Expert setup of test automation in Jenkins, GitHub Actions, Bamboo, and 
                    other CI/CD platforms with quality gates.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h4 className="font-bold mb-2">Parallel Execution</h4>
                  <p className="text-gray-600">
                    Optimized test execution strategies that minimize pipeline time while 
                    maximizing coverage, with distributed testing architectures.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h4 className="font-bold mb-2">Reporting & Notifications</h4>
                  <p className="text-gray-600">
                    Integrated reporting systems with email notifications, Slack alerts, 
                    and dashboard visualizations of test results.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h4 className="font-bold mb-2">Zero-Downtime Checks</h4>
                  <p className="text-gray-600">
                    Post-deployment validation strategies that verify critical application 
                    functionality without user impact.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Cross-Browser & Device Testing */}
            <div className="mb-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <div className="bg-cyan-50 p-8 rounded-lg">
                  <div className="h-12 w-12 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
                    <Monitor className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Cross-Browser & Cross-Device Testing</h3>
                  <p className="text-gray-700">
                    Test everywhere your users are to ensure consistent experiences.
                  </p>
                </div>
              </div>
              
              <div className="lg:col-span-2 space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h4 className="font-bold mb-2">Cloud Testing Platforms</h4>
                  <p className="text-gray-600">
                    Expertise with BrowserStack, LambdaTest, and other cloud testing platforms
                    for wide coverage of browsers and devices.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h4 className="font-bold mb-2">Responsive Testing</h4>
                  <p className="text-gray-600">
                    Verification of responsive designs across breakpoints, with visual comparison 
                    tools to catch layout issues early.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h4 className="font-bold mb-2">Browser Compatibility</h4>
                  <p className="text-gray-600">
                    Strategic testing across browser versions, with focus on your user analytics 
                    to prioritize the most important combinations.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h4 className="font-bold mb-2">Accessibility Compliance</h4>
                  <p className="text-gray-600">
                    Testing for WCAG compliance across platforms, ensuring your application 
                    works for all users regardless of abilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* How We Prevent Bugs */}
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              title="How We Prevent Bugs"
              subtitle="Preventing bugs isn't magic. It's mindset."
              align="center"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Product-Centric Testing</h3>
                <p className="text-gray-700">
                  We think like your users, not just your devs. Our testing approach focuses on
                  real user journeys and business-critical paths rather than just code coverage.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Early Feedback Loops</h3>
                <p className="text-gray-700">
                  Catch bugs in dev, not post-production. We implement shift-left practices that bring
                  testing earlier in the development cycle for faster feedback and cheaper fixes.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Smart Automation</h3>
                <p className="text-gray-700">
                  Test once, scale forever. We build maintainable automation frameworks that grow with
                  your product without becoming brittle or flaky over time.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Quality-Driven Culture</h3>
                <p className="text-gray-700">
                  We collaborate, not block. Our approach helps foster a team culture where quality is
                  everyone's responsibility, and testing is viewed as an enabler, not a bottleneck.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Continuous Improvement</h3>
                <p className="text-gray-700">
                  Every sprint. Every retro. We test smarter each time. Our projects include regular 
                  reviews and optimization of test processes and automation for ongoing improvement.
                </p>
              </div>
              
              <div className="bg-blue-50 p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-blue-800">Custom QA Solutions</h3>
                <p className="text-blue-700">
                  We build plug-and-play QA teams tailored to your environment, with the right mix of
                  skills, tools and processes to solve your specific quality challenges.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Custom QA Help?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              We build plug-and-play QA teams tailored to your environment. Let's discuss your specific needs.
            </p>
            <PrimaryCta 
              asChild
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <Link to="/contact">Book a Discovery Call</Link>
            </PrimaryCta>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
