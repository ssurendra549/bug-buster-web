
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { SectionTitle } from '@/components/ui/section-title';
import { ContactForm } from '@/components/contact-form';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 px-6 md:py-24 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something Bug-Free Together.
            </h1>
            <p className="text-xl opacity-90">
              We're ready to answer your questions and start a conversation about your QA needs.
            </p>
          </div>
        </section>
        
        {/* Contact Details and Form */}
        <section className="py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle
                title="Contact Us"
                subtitle="Reach out to discuss how we can help with your quality assurance needs."
                className="mb-10"
              />
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Email</h3>
                    <p className="text-gray-700 mb-1">For general inquiries:</p>
                    <a href="mailto:hello@bugsquashers.com" className="text-primary hover:underline">
                      hello@bugsquashers.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Phone</h3>
                    <p className="text-gray-700 mb-1">Weekdays 9am - 6pm IST:</p>
                    <a href="tel:+91XXXXXXXXXX" className="text-primary hover:underline">
                      +91 XXXX XXX XXX
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Office Location</h3>
                    <p className="text-gray-700 mb-1">Mallampet,</p>
                    <p className="text-gray-700">Hyderabad, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Working Hours</h3>
                    <p className="text-gray-700 mb-1">Monday - Friday: 9am - 6pm IST</p>
                    <p className="text-gray-700">Weekend: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 bg-gray-100 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4">Still struggling with...</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="text-red-500 mr-2">•</div>
                    <span>Flaky tests that break your CI pipeline?</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-red-500 mr-2">•</div>
                    <span>Production bugs that slip through manual testing?</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-red-500 mr-2">•</div>
                    <span>No visibility into your test coverage and quality?</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-red-500 mr-2">•</div>
                    <span>Slow, manual regression cycles delaying releases?</span>
                  </li>
                </ul>
                <p className="mt-4 font-medium">Let us change that.</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border">
              <h2 className="text-2xl font-bold mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
        
        {/* Map */}
        <section className="py-12 px-6 md:px-12 lg:px-20 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="h-96 rounded-lg overflow-hidden shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60894.58270218552!2d78.34135295979166!3d17.46221891848712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91fc9c1516b7%3A0x5b5f4a9b0e71684c!2sMallampet%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1681547618968!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Office location map"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
