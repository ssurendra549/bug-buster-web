
import { SectionTitle } from '@/components/ui/section-title';
import { TestimonialCard } from '@/components/ui/testimonial-card';

export function TestimonialsSection() {
  return (
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
  );
}
