
import { Link } from 'react-router-dom';
import { SectionTitle } from '@/components/ui/section-title';
import { ToolCard } from '@/components/ui/tool-card';
import { PrimaryCta } from '@/components/ui/cta-button';

export function ToolsSection() {
  return (
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
  );
}
