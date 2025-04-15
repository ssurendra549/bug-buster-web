
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {isSubmitted ? (
        <div className="bg-green-50 p-4 rounded-md text-green-800 mb-6">
          Thank you for your message! We'll get back to you shortly.
        </div>
      ) : null}
      
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" required />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" required />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="company">Company</Label>
        <Input id="company" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="service">What do you need help with?</Label>
        <Select>
          <SelectTrigger id="service">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="automation">Automation Testing</SelectItem>
            <SelectItem value="salesforce">Salesforce QA</SelectItem>
            <SelectItem value="mobile">Mobile Testing</SelectItem>
            <SelectItem value="cicd">CI/CD</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" rows={5} required />
      </div>
      
      <Button 
        type="submit" 
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
