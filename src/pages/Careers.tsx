
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { SectionTitle } from '@/components/ui/section-title';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CareersPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-16 px-6 md:py-24 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join the Bug-Squashing Revolution.
            </h1>
            <p className="text-xl opacity-90 mb-6">
              We're hiring QA legends, automation nerds, and testing storytellers.
            </p>
            <p className="text-lg opacity-80">
              If you love breaking things, making them better, and owning your craft—we want to hear from you.
            </p>
          </div>
        </section>
        
        {/* Why Work With Us */}
        <section className="py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              title="Why Work With Us"
              subtitle="At BugSquashers, we're building a different kind of QA culture."
              align="center"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <h3 className="text-xl font-bold mb-4">Real-World Projects</h3>
                <p className="text-gray-600 mb-4">
                  Work on actual products and applications, not contrived examples. Build experience that matters.
                </p>
                <div className="flex items-center text-primary">
                  <Check className="h-5 w-5 mr-2" />
                  <span>No dummy projects</span>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <h3 className="text-xl font-bold mb-4">Flat Hierarchy</h3>
                <p className="text-gray-600 mb-4">
                  Your ideas matter regardless of your years of experience. We foster true ownership and autonomy.
                </p>
                <div className="flex items-center text-primary">
                  <Check className="h-5 w-5 mr-2" />
                  <span>True ownership</span>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <h3 className="text-xl font-bold mb-4">Technical Growth</h3>
                <p className="text-gray-600 mb-4">
                  Master industry-leading tools like Provar, Selenium, Appium, Jenkins, and many more.
                </p>
                <div className="flex items-center text-primary">
                  <Check className="h-5 w-5 mr-2" />
                  <span>Continuous learning</span>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <h3 className="text-xl font-bold mb-4">Build Your Profile</h3>
                <p className="text-gray-600 mb-4">
                  Attend meetups, contribute to open source, and establish yourself as a thought leader in QA.
                </p>
                <div className="flex items-center text-primary">
                  <Check className="h-5 w-5 mr-2" />
                  <span>Community participation</span>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <h3 className="text-xl font-bold mb-4">Flexible Work</h3>
                <p className="text-gray-600 mb-4">
                  Hybrid model in Hyderabad or remote options available. Work where you're most productive.
                </p>
                <div className="flex items-center text-primary">
                  <Check className="h-5 w-5 mr-2" />
                  <span>Work-life balance</span>
                </div>
              </div>
              
              <div className="bg-blue-50 p-8 rounded-lg shadow-sm border border-blue-100">
                <h3 className="text-xl font-bold mb-4 text-blue-800">Our Culture</h3>
                <p className="text-blue-700 mb-4">
                  We believe in creating a workplace where quality engineers thrive, innovate, and grow together.
                </p>
                <div className="flex items-center text-blue-600">
                  <Check className="h-5 w-5 mr-2" />
                  <span>Team-first mentality</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Open Roles */}
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              title="Open Roles"
              subtitle="Ready to join our bug-squashing team? We're hiring!"
            />
            
            <div className="space-y-6">
              {/* QA Automation Engineer */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold">QA Automation Engineer</h3>
                    <p className="text-gray-500">Selenium/Playwright Specialist</p>
                  </div>
                  <Button asChild>
                    <Link to="/contact" className="flex items-center">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
                <hr className="my-6" />
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold mb-2">What You'll Do:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Design and build automation frameworks from scratch</li>
                      <li>Create efficient, maintainable test scripts for complex web applications</li>
                      <li>Integrate test suites with CI/CD pipelines for continuous testing</li>
                      <li>Mentor junior team members and improve automation practices</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-2">What You'll Need:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>3+ years of experience with Selenium, Cypress, or Playwright</li>
                      <li>Strong programming skills in Java, JavaScript, or Python</li>
                      <li>Experience with test design patterns and framework architecture</li>
                      <li>Knowledge of CI/CD tools like Jenkins, GitHub Actions</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Salesforce QA */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold">Salesforce QA</h3>
                    <p className="text-gray-500">Provar Specialist</p>
                  </div>
                  <Button asChild>
                    <Link to="/contact" className="flex items-center">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
                <hr className="my-6" />
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold mb-2">What You'll Do:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Automate Salesforce applications using Provar</li>
                      <li>Create robust test plans for custom Salesforce implementations</li>
                      <li>Manage test data and configurations across Salesforce sandboxes</li>
                      <li>Ensure quality across Lightning components and custom objects</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-2">What You'll Need:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>2+ years of experience testing Salesforce applications</li>
                      <li>Proficiency with Provar or similar Salesforce testing tools</li>
                      <li>Understanding of Salesforce data models and configurations</li>
                      <li>Experience with Salesforce deployments and release cycles</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Mobile QA */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold">Mobile QA Engineer</h3>
                    <p className="text-gray-500">Appium Expert</p>
                  </div>
                  <Button asChild>
                    <Link to="/contact" className="flex items-center">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
                <hr className="my-6" />
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold mb-2">What You'll Do:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Design and implement mobile testing strategies for iOS and Android</li>
                      <li>Create Appium automation frameworks for native and hybrid apps</li>
                      <li>Set up and manage device farms and mobile testing infrastructure</li>
                      <li>Test across various device types, screen sizes, and OS versions</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-2">What You'll Need:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>2+ years of experience in mobile application testing</li>
                      <li>Proficiency with Appium and mobile testing frameworks</li>
                      <li>Understanding of iOS and Android development processes</li>
                      <li>Experience with cloud device testing platforms</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* QA Analyst */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold">QA Analyst</h3>
                    <p className="text-gray-500">Manual + Exploratory Testing</p>
                  </div>
                  <Button asChild>
                    <Link to="/contact" className="flex items-center">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
                <hr className="my-6" />
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold mb-2">What You'll Do:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Create and execute test plans for web and mobile applications</li>
                      <li>Conduct exploratory testing to uncover hidden issues</li>
                      <li>Create detailed, reproducible bug reports</li>
                      <li>Collaborate with developers to resolve issues quickly</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-2">What You'll Need:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>1+ years of experience in manual testing</li>
                      <li>Strong analytical and problem-solving abilities</li>
                      <li>Excellent communication and documentation skills</li>
                      <li>Basic understanding of web technologies and APIs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Application CTA */}
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Don't See a Perfect Fit?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              We're always looking for talented QA professionals to join our team. 
              Send us your CV anyway, and let's connect!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                asChild
                size="lg" 
                variant="secondary"
              >
                <Link to="/contact">Apply Now</Link>
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Link to="/contact">Drop Your CV</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CareersPage;
