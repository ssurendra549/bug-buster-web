
import { Link } from 'react-router-dom';
import { Check, Zap, Database, Monitor, Smartphone, Users, Shield, Brain, CheckCircleIcon, CogIcon, CloudIcon, ClipboardListIcon, Accessibility } from 'lucide-react';
import { ServiceCard } from '@/components/ui/service-card';
import { SectionTitle } from '@/components/ui/section-title';
import { PrimaryCta } from '@/components/ui/cta-button';

export function ServicesSection() {
  return (
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
  );
}
