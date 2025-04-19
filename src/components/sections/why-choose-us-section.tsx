
import { SectionTitle } from '@/components/ui/section-title';

export function WhyChooseUsSection() {
  return (
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
  );
}
