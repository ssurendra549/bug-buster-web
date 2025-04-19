
import { Check } from 'lucide-react';

export function QAValueSection() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
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
  );
}
