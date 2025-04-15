
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { SectionTitle } from '@/components/ui/section-title';
import { PrimaryCta } from '@/components/ui/cta-button';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 px-6 md:py-24 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              We're a Pure QA Company. And We're Proud of It.
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              While others treat QA like a checkbox, we treat it like the secret weapon it is.
              We don't just find bugs—we prevent them. We don't just run scripts—we build smarter 
              ways to make software bulletproof.
            </p>
          </div>
        </section>
        
        {/* Who We Are */}
        <section className="py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Who We Are"
                className="mb-6"
              />
              <div className="prose max-w-none">
                <p>
                  We're a team of passionate testers, automation specialists, and quality engineers who 
                  live and breathe software testing. From Salesforce testing with Provar to cutting-edge 
                  automation using Selenium, Cypress, Playwright, and Appium—we bring deep tool expertise, 
                  process innovation, and a "test early, test smart" mindset.
                </p>
                <p>
                  Based in Hyderabad, we're building something special—one bug-free release at a time.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg font-medium mb-4">To put quality at the heart of every product.</p>
              <p className="text-gray-700">
                Whether you're a startup or a unicorn, we believe QA isn't optional—it's critical. 
                We're here to help you release confidently, scale faster, and build products your 
                users can trust.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              title="Our Values"
              subtitle="These principles guide everything we do."
              align="center"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Quality is Culture</h3>
                <p className="text-gray-700">
                  We don't chase bugs—we build systems that stop them from happening. Quality is 
                  a mindset that permeates everything we do, from planning to delivery.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Tools Don't Define Us</h3>
                <p className="text-gray-700">
                  We know the tools—but we bring the mindset that makes them powerful. We choose the 
                  right solution for each unique challenge, not the one we're most comfortable with.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Teamwork is Our Superpower</h3>
                <p className="text-gray-700">
                  We collaborate with your developers, not block them. We believe in partnership, 
                  knowledge sharing, and collective ownership of quality.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Think Like a User</h3>
                <p className="text-gray-700">
                  We test with empathy, curiosity, and a real-world lens. Technical excellence means 
                  nothing if it doesn't translate to a great user experience.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Superpowers */}
        <section className="py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              title="Our Superpowers"
              subtitle="Areas where we shine the brightest."
            />
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Salesforce Testing with Provar</h3>
                  <p className="text-gray-600">
                    We specialize in automating complex Salesforce apps with deep expertise in Provar, 
                    handling UI flows, custom objects, and sandbox automation.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Web Automation using Selenium, Cypress, Playwright</h3>
                  <p className="text-gray-600">
                    From traditional Selenium frameworks to modern tools like Cypress and Playwright, 
                    we build reliable, maintainable web automation suites.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Mobile Testing with Appium, WebdriverIO</h3>
                  <p className="text-gray-600">
                    We've mastered the challenges of mobile app testing across real devices and 
                    emulators for both native and hybrid applications.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">DevOps CI/CD with Jenkins, Bamboo, GitHub Actions</h3>
                  <p className="text-gray-600">
                    We integrate testing seamlessly into your deployment pipelines, with expertise in 
                    parallelization, test gating, and reporting.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Cross-device/cloud testing on BrowserStack, LambdaTest, AWS Device Farm</h3>
                  <p className="text-gray-600">
                    We ensure your applications work flawlessly across browsers, devices, and operating 
                    systems through cloud testing platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Real People. Real Passion. */}
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Real People. Real Passion.
            </h2>
            <p className="text-xl opacity-90 mb-8">
              We're not a factory. We're not a vendor.<br />
              We're your QA partners—problem solvers, thinkers, and champions of clean code.
            </p>
            <p className="text-lg mb-8">
              Whether you're struggling with flaky tests or no tests at all—we're here to help.
            </p>
            <PrimaryCta 
              asChild
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <Link to="/contact">Let's Talk Quality</Link>
            </PrimaryCta>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
