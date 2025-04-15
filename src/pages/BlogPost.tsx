
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { BlogPostContent } from '@/components/blog-post-content';
import { BlogCard } from '@/components/ui/blog-card';

// Sample blog data - in a real app, this would come from an API or CMS
const sampleBlogs = [
  {
    id: 1,
    title: "Best Practices for Web Automation Testing in 2023",
    date: "April 10, 2023",
    author: "Sarah Johnson",
    slug: "best-practices-web-automation-testing",
    tags: ["automation", "selenium", "testing"],
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
    content: `
      <h2>The Evolution of Web Automation Testing</h2>
      <p>Web automation testing has come a long way from the early days of simple record-and-replay tools. In 2023, the focus has shifted towards creating maintainable, reliable test suites that integrate seamlessly with modern development workflows.</p>
      
      <p>The landscape of testing tools continues to evolve, with Cypress and Playwright gaining significant traction alongside the established Selenium. Each tool has its strengths, and choosing the right one depends on your specific requirements.</p>
      
      <h2>Key Best Practices for 2023</h2>
      
      <h3>1. Adopt the Page Object Model (POM)</h3>
      <p>The Page Object Model remains one of the most effective patterns for creating maintainable test automation code. By separating the test logic from the page structure, you create more resilient tests that are easier to update when the UI changes.</p>
      <p>Example POM implementation:</p>
      <pre><code>
class LoginPage {
  constructor(driver) {
    this.driver = driver;
    this.usernameField = By.id('username');
    this.passwordField = By.id('password');
    this.loginButton = By.css('.login-button');
  }
  
  async login(username, password) {
    await this.driver.findElement(this.usernameField).sendKeys(username);
    await this.driver.findElement(this.passwordField).sendKeys(password);
    await this.driver.findElement(this.loginButton).click();
  }
}
      </code></pre>
      
      <h3>2. Implement Robust Waiting Strategies</h3>
      <p>Flaky tests are often caused by timing issues. Instead of using hard-coded waits, implement intelligent waiting strategies:</p>
      <ul>
        <li>Wait for specific elements to be visible, clickable, or present</li>
        <li>Wait for network requests to complete</li>
        <li>Wait for page load events</li>
        <li>Use custom wait conditions for complex scenarios</li>
      </ul>
      
      <h3>3. Leverage API Testing Alongside UI Tests</h3>
      <p>Not everything needs to be tested through the UI. Create a testing pyramid with more API tests than UI tests for faster, more reliable test suites.</p>
      <p>For UI-dependent features, consider setting up the test state via API calls before running the UI test to reduce test execution time.</p>
      
      <h3>4. Implement Visual Testing</h3>
      <p>Traditional assertions may miss visual regressions. Tools like Percy, Applitools, and BackstopJS allow you to catch visual changes that functional tests might miss.</p>
      
      <h3>5. Run Tests in Parallel</h3>
      <p>Long-running test suites delay feedback. Configure your tests to run in parallel to dramatically reduce execution time. Most modern test runners support parallelization out of the box.</p>
      
      <h2>Tooling Recommendations</h2>
      <p>Based on our experience working with dozens of clients, here are our recommended tools for different scenarios:</p>
      
      <h3>For New Projects</h3>
      <p>Consider Playwright or Cypress for their excellent developer experience, built-in waiting strategies, and comprehensive debugging tools.</p>
      
      <h3>For Enterprise Applications</h3>
      <p>Selenium remains strong for cross-browser testing at scale, especially when combined with Selenium Grid or cloud providers like BrowserStack or LambdaTest.</p>
      
      <h3>For Fast Feedback Cycles</h3>
      <p>Cypress shines for component testing and integration with modern JavaScript frameworks, providing near-instant feedback during development.</p>
      
      <h2>Conclusion</h2>
      <p>The keys to successful web automation in 2023 are maintainability, reliability, and speed. By implementing these best practices, you'll create test suites that provide genuine value to your team instead of becoming maintenance burdens.</p>
      
      <p>Remember that automation is a means to an end—higher quality software delivered faster. Keep that goal in mind as you develop your testing strategy.</p>
    `
  },
  {
    id: 2,
    title: "Mobile Testing Challenges and How to Overcome Them",
    date: "March 22, 2023",
    author: "Michael Chen",
    slug: "mobile-testing-challenges-solutions",
    tags: ["mobile", "appium", "testing"],
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    content: `
      <h2>The Unique Challenges of Mobile Testing</h2>
      <p>Mobile testing presents distinct challenges that web testing doesn't. From device fragmentation to different operating systems, network conditions, and unique UI paradigms, mobile testing requires specific approaches and tools.</p>
      
      <h2>Challenge 1: Device Fragmentation</h2>
      <p>With thousands of Android devices and multiple iOS devices with different screen sizes, resolutions, and hardware capabilities, testing across devices can be overwhelming.</p>
      
      <h3>Solution: Strategic Device Selection</h3>
      <p>Use analytics to identify the most common devices among your user base. Create a priority matrix considering:</p>
      <ul>
        <li>Top devices by user numbers</li>
        <li>OS version representation</li>
        <li>Screen size coverage</li>
        <li>Manufacturer representation (for Android)</li>
      </ul>
      
      <p>Supplement physical devices with cloud testing platforms like:</p>
      <ul>
        <li>BrowserStack</li>
        <li>AWS Device Farm</li>
        <li>Firebase Test Lab</li>
      </ul>
      
      <h2>Challenge 2: Native, Hybrid, or Web App Testing Differences</h2>
      <p>Different types of mobile apps require different testing approaches and tools.</p>
      
      <h3>Solution: Tailored Testing Strategies</h3>
      
      <p>For native apps:</p>
      <ul>
        <li>Use native testing frameworks (XCTest for iOS, Espresso for Android)</li>
        <li>Verify native behavior and performance</li>
        <li>Test deep linking and app permissions</li>
      </ul>
      
      <p>For hybrid apps:</p>
      <ul>
        <li>Use Appium for cross-platform testing</li>
        <li>Test both webview and native components</li>
        <li>Verify proper interactions between native and web layers</li>
      </ul>
      
      <p>For mobile web:</p>
      <ul>
        <li>Focus on responsive design testing</li>
        <li>Test touch interactions</li>
        <li>Verify mobile-specific features (e.g., GPS)</li>
      </ul>
      
      <h2>Challenge 3: Gestures and Touch Interactions</h2>
      <p>Mobile apps rely heavily on gestures like swipe, pinch, tap-and-hold that are difficult to automate reliably.</p>
      
      <h3>Solution: Gesture Automation Libraries</h3>
      <p>Appium provides APIs for advanced gesture automation:</p>
      
      <pre><code>
// Example of swipe gesture in Appium
driver.executeScript('mobile: scroll', {direction: 'down', element: elementId});

// Example of pinch gesture in Appium
driver.executeScript('mobile: pinch', {
  scale: 0.5,
  velocity: 1,
  element: elementId
});
      </code></pre>
      
      <p>For more complex gestures, consider tools like:</p>
      <ul>
        <li>Maestro for Android</li>
        <li>XCUITest's gesture APIs for iOS</li>
      </ul>
      
      <h2>Challenge 4: Network Conditions</h2>
      <p>Mobile apps need to work across different network conditions, from fast Wi-Fi to spotty 3G connections.</p>
      
      <h3>Solution: Network Condition Simulation</h3>
      <ul>
        <li>Use Charles Proxy or similar tools to throttle connections</li>
        <li>Test offline functionality</li>
        <li>Verify graceful handling of network transitions</li>
        <li>Implement automated tests that run under different network conditions</li>
      </ul>
      
      <h2>Challenge 5: Battery Consumption and Performance</h2>
      <p>Mobile apps that drain battery or perform poorly won't be used for long.</p>
      
      <h3>Solution: Performance Monitoring</h3>
      <ul>
        <li>Use Android Profiler and Xcode Instruments for detailed analysis</li>
        <li>Implement automated performance testing with Appium</li>
        <li>Monitor CPU, memory, and battery usage during test execution</li>
        <li>Set performance budgets and alert on regressions</li>
      </ul>
      
      <h2>Recommended Tooling for Mobile Testing</h2>
      
      <h3>Cross-Platform Automation</h3>
      <ul>
        <li>Appium: The industry standard for cross-platform mobile testing</li>
        <li>WebdriverIO: Modern framework that works well with Appium</li>
        <li>Detox: For React Native applications</li>
      </ul>
      
      <h3>Platform-Specific Tools</h3>
      <ul>
        <li>iOS: XCUITest, EarlGrey</li>
        <li>Android: Espresso, UI Automator</li>
      </ul>
      
      <h3>Visual Testing</h3>
      <ul>
        <li>Applitools: For visual testing across devices</li>
        <li>Percy: For visual regression testing</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Mobile testing is complex, but with the right strategy and tools, you can build a robust testing process that ensures quality across devices and platforms. Remember that a combination of automated and manual testing will provide the best coverage for mobile applications.</p>
    `
  },
  {
    id: 3,
    title: "Setting Up a Robust CI/CD Pipeline for Continuous Testing",
    date: "February 18, 2023",
    author: "Priya Patel",
    slug: "cicd-pipeline-continuous-testing",
    tags: ["devops", "CI/CD", "jenkins"],
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    content: `
      <h2>The Importance of CI/CD for Test Automation</h2>
      <p>Continuous Integration and Continuous Delivery (CI/CD) pipelines have become an essential part of modern software development. When integrated with test automation, they provide a powerful mechanism for ensuring software quality throughout the development lifecycle.</p>
      
      <p>In this post, we'll walk through the process of setting up a robust CI/CD pipeline that incorporates different types of testing to catch issues early and provide fast feedback to developers.</p>
      
      <h2>The Ideal CI/CD Pipeline for Testing</h2>
      <p>An effective testing pipeline should include multiple stages of testing, with each stage providing a different level of confidence and feedback:</p>
      
      <ol>
        <li><strong>Static Analysis</strong>: Linting, type checking, security scanning</li>
        <li><strong>Unit Tests</strong>: Fast tests that verify individual components</li>
        <li><strong>API Tests</strong>: Verifying the contract between services</li>
        <li><strong>Integration Tests</strong>: Testing how components work together</li>
        <li><strong>UI Tests</strong>: End-to-end tests of the user interface</li>
        <li><strong>Performance Tests</strong>: Ensuring the system meets performance requirements</li>
      </ol>
      
      <h2>Setting Up Your CI/CD Pipeline</h2>
      
      <h3>Step 1: Choose Your CI/CD Platform</h3>
      <p>Several excellent options are available:</p>
      <ul>
        <li><strong>Jenkins</strong>: The most flexible, with extensive plugin support</li>
        <li><strong>GitHub Actions</strong>: Great for GitHub-hosted projects with simple configuration</li>
        <li><strong>GitLab CI</strong>: Well-integrated if you're using GitLab</li>
        <li><strong>CircleCI/Travis CI</strong>: Cloud-based options with good scaling</li>
        <li><strong>Azure DevOps</strong>: Strong choice for Microsoft ecosystem</li>
      </ul>
      
      <h3>Step 2: Define Your Pipeline Stages</h3>
      <p>Let's look at a sample Jenkins pipeline definition:</p>
      
      <pre><code>
pipeline {
    agent any
    stages {
        stage('Static Analysis') {
            steps {
                sh 'npm run lint'
                sh 'npm run type-check'
                sh 'npm run security-scan'
            }
        }
        stage('Unit Tests') {
            steps {
                sh 'npm run test:unit'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('API Tests') {
            steps {
                sh 'npm run test:api'
            }
        }
        stage('Deploy to Test') {
            steps {
                sh './deploy-to-test.sh'
            }
        }
        stage('Integration Tests') {
            steps {
                sh 'npm run test:integration'
            }
        }
        stage('UI Tests') {
            steps {
                sh 'npm run test:e2e'
            }
        }
        stage('Performance Tests') {
            steps {
                sh 'npm run test:performance'
            }
        }
    }
    post {
        always {
            publishHTML(target: [
                allowMissing: false,
                alwaysLinkToLastBuild: false,
                keepAll: true,
                reportDir: 'coverage',
                reportFiles: 'index.html',
                reportName: 'Coverage Report'
            ])
            publishHTML(target: [
                allowMissing: false,
                alwaysLinkToLastBuild: false,
                keepAll: true,
                reportDir: 'test-results',
                reportFiles: 'index.html',
                reportName: 'Test Report'
            ])
        }
    }
}
      </code></pre>
      
      <h3>Step 3: Optimize for Speed and Reliability</h3>
      <p>Long-running pipelines delay feedback. Optimize using:</p>
      
      <ul>
        <li><strong>Parallelization</strong>: Run tests in parallel when possible</li>
        <li><strong>Test Splitting</strong>: Distribute tests across multiple runners</li>
        <li><strong>Caching</strong>: Cache dependencies and build artifacts</li>
        <li><strong>Selective Testing</strong>: Only run tests affected by changes</li>
      </ul>
      
      <p>Example of test parallelization in GitHub Actions:</p>
      
      <pre><code>
jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        shard: [1, 2, 3, 4]
    steps:
      - uses: actions/checkout@v2
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm run test -- --shard=\$\{\{ matrix.shard \}\}/\$\{\{ strategy.job-total \}\}
      </code></pre>
      
      <h3>Step 4: Set Up Comprehensive Reporting</h3>
      <p>Good reporting helps quickly identify and fix issues:</p>
      
      <ul>
        <li>Test results with failure details</li>
        <li>Code coverage reports</li>
        <li>Screenshots and videos of UI test failures</li>
        <li>Performance test results</li>
      </ul>
      
      <p>Consider tools like:</p>
      <ul>
        <li>Allure Report</li>
        <li>JUnit XML with Jenkins/GitHub plugins</li>
        <li>Mochawesome for JavaScript tests</li>
      </ul>
      
      <h3>Step 5: Configure Notifications</h3>
      <p>Keep the team informed of pipeline status:</p>
      
      <ul>
        <li>Email notifications for failures</li>
        <li>Slack/Teams integration</li>
        <li>Dashboard displays in the office</li>
      </ul>
      
      <h2>Advanced CI/CD Testing Techniques</h2>
      
      <h3>Feature Toggles</h3>
      <p>Deploy code behind feature flags to separate deployment from release:</p>
      
      <pre><code>
if (featureFlag.isEnabled('new-checkout-flow')) {
  // Run the new code
} else {
  // Run the old code
}
      </code></pre>
      
      <h3>Canary Deployments</h3>
      <p>Roll out changes to a small percentage of users before full deployment, monitoring for issues.</p>
      
      <h3>A/B Testing in CI/CD</h3>
      <p>Integrate A/B testing to gather data on feature performance and user preferences.</p>
      
      <h2>Common Challenges and Solutions</h2>
      
      <h3>Flaky Tests</h3>
      <p>Tests that sometimes pass and sometimes fail undermine confidence in the pipeline.</p>
      <p>Solutions:</p>
      <ul>
        <li>Automatic retry of failed tests</li>
        <li>Quarantine flaky tests</li>
        <li>Detailed logging for debugging</li>
      </ul>
      
      <h3>Environment Management</h3>
      <p>Test environments can be difficult to provision and maintain.</p>
      <p>Solutions:</p>
      <ul>
        <li>Containerization with Docker</li>
        <li>Infrastructure-as-Code with Terraform</li>
        <li>Ephemeral environments for each test run</li>
      </ul>
      
      <h3>Test Data Management</h3>
      <p>Tests need consistent data to be reliable.</p>
      <p>Solutions:</p>
      <ul>
        <li>Reset database to known state before tests</li>
        <li>Mock external services</li>
        <li>Generate test data programmatically</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>A well-designed CI/CD pipeline with comprehensive testing is a powerful tool for ensuring software quality. By catching issues early and providing fast feedback, it helps teams deliver better software more confidently and more frequently.</p>
      
      <p>The investment in setting up such a pipeline pays off quickly in terms of reduced bugs, faster release cycles, and better developer experience.</p>
    `
  },
  // Additional blog posts would be defined similarly
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // Find the current blog post
  const post = sampleBlogs.find(blog => blog.slug === slug);
  
  // If post not found, redirect to blog listing
  useEffect(() => {
    if (!post) {
      navigate('/blog');
    }
  }, [post, navigate]);
  
  // Get related posts (in a real app, you would use tags or categories for this)
  const relatedPosts = post 
    ? sampleBlogs
        .filter(blog => blog.id !== post.id)
        .filter(blog => blog.tags.some(tag => post.tags.includes(tag)))
        .slice(0, 3) 
    : [];
  
  if (!post) {
    return null; // Will redirect via useEffect
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <BlogPostContent 
            title={post.title}
            date={post.date}
            author={post.author}
            content={post.content}
            tags={post.tags}
            imageUrl={post.imageUrl}
          />
          
          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-8 border-t">
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map(blog => (
                  <BlogCard 
                    key={blog.id}
                    title={blog.title}
                    excerpt=""
                    date={blog.date}
                    author={blog.author}
                    slug={blog.slug}
                    imageUrl={blog.imageUrl}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
