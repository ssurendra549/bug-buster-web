
import { Link } from 'react-router-dom';
import { PrimaryCta, SecondaryCta } from '@/components/ui/cta-button';

export function CTASection() {
  return (
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
          </SecondaryCta>
        </div>
      </div>
    </section>
  );
}
