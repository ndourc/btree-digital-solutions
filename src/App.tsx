import { useState } from "react";
import { 
  Code, 
  Palette, 
  Megaphone, 
  Search, 
  Shield, 
  ChevronRight,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { ServiceCard } from "./components/ServiceCard";
import { ProjectCard } from "./components/ProjectCard";
import { TestimonialCard } from "./components/TestimonialCard";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold text-primary tracking-tight">BTree</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
                <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">Portfolio</a>
                <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Start Your Project</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Innovate. Develop. Thrive.<br />
                <span className="text-blue-200">Solutions For Business</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                We combine deep technical expertise with a client-centric, agile approach to deliver 
                tailored, robust, and scalable web solutions that drive measurable results and fuel 
                your business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold">
                  Start Your Project
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold">
                  Request a Consultation
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzU4MzUwMDIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Software development team collaboration"
                  className="rounded-lg shadow-2xl"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-400 rounded-lg opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-300 rounded-full opacity-60 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Different / Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">Why We're Different</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We don't just build software—we craft solutions that become integral parts of your business success story.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Code}
              title="Custom Software Development"
              description="Tailored web applications and enterprise solutions built with cutting-edge technology to solve your unique business challenges and scale with your growth."
            />
            <ServiceCard
              icon={Palette}
              title="UI/UX Design"
              description="User-centered design that combines thorough research, intuitive interfaces, and compelling visuals to create experiences your customers will love."
            />
            <ServiceCard
              icon={Megaphone}
              title="Digital Marketing"
              description="Strategic content marketing, social media campaigns, and PPC management that amplifies your brand and drives qualified leads to your business."
            />
            <ServiceCard
              icon={Search}
              title="SEO Optimization"
              description="Comprehensive technical SEO, strategic keyword optimization, and authoritative link building that elevates your search rankings and online visibility."
            />
            <ServiceCard
              icon={Shield}
              title="IT Support as a Service"
              description="Proactive managed IT services, robust infrastructure support, and essential cybersecurity measures that keep your business running smoothly and securely."
            />
            <div className="md:col-span-2 lg:col-span-1 flex items-center justify-center">
              <div className="text-center">
                <Button variant="outline" size="lg" className="group border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  Learn More About Our Services
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio / Case Studies Section */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">Our Impactful Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how we've transformed businesses through innovative web solutions and strategic digital initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Project Helios"
              description="A comprehensive enterprise resource management platform that streamlined operations and increased efficiency by 40% for a mid-size manufacturing company."
              imageUrl="https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTgzNTUwMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              imageAlt="Enterprise resource management dashboard"
            />
            <ProjectCard
              title="Catalyst CRM"
              description="A custom customer relationship management system that helped a growing startup organize their sales process and triple their conversion rates."
              imageUrl="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMHBsYXRmb3JtfGVufDF8fHx8MTc1ODM2Njk4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              imageAlt="Business analytics and CRM interface"
            />
            <ProjectCard
              title="Quantum ERP"
              description="An integrated enterprise solution that unified multiple business processes and provided real-time insights for data-driven decision making."
              imageUrl="https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwc29mdHdhcmUlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4MzY2OTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              imageAlt="Enterprise software dashboard interface"
            />
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              View All Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">Trusted By Leading Businesses</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See what our clients say about partnering with BTree for their digital transformation journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="BTree transformed our operations with a custom web application that perfectly fits our workflow. Their team's dedication and expertise made all the difference."
              clientName="Sarah Chen"
              clientTitle="CEO"
              clientCompany="TechFlow Solutions"
            />
            <TestimonialCard
              quote="Their UI/UX expertise is unparalleled. Our new platform not only looks amazing but has significantly improved our customer engagement and satisfaction."
              clientName="Michael Rodriguez"
              clientTitle="Product Director"
              clientCompany="InnovateCorp"
            />
            <TestimonialCard
              quote="The team's agile approach and clear communication throughout the project exceeded our expectations. They truly became an extension of our team."
              clientName="Emily Johnson"
              clientTitle="CTO"
              clientCompany="DataSync Enterprises"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">Ready to Build Something Amazing?</h2>
              <p className="text-xl text-muted-foreground">
                Let's discuss your project and discover how BTree can deliver personalized solutions 
                that drive your business forward with expert guidance every step of the way.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-600 mr-4" />
                    <span className="text-gray-700">hello@btree.dev</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-600 mr-4" />
                    <span className="text-gray-700">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-blue-600 mr-4" />
                    <span className="text-gray-700">San Francisco, CA</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4 text-gray-900">Why Choose BTree?</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Proven track record with 100+ successful projects</li>
                    <li>• Agile development methodology</li>
                    <li>• Long-term partnership approach</li>
                    <li>• Cutting-edge technology expertise</li>
                    <li>• Dedicated project management</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg border border-border">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@company.com"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <Input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell us about your project..."
                      rows={4}
                      className="w-full"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                    Send Your Inquiry
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-6">BTree</div>
              <p className="text-gray-400 leading-relaxed">
                Your trusted partner for innovative web solutions, custom software development, 
                and digital transformation that drives business growth.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Custom Software Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Digital Marketing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SEO Optimization</a></li>
                <li><a href="#" className="hover:text-white transition-colors">IT Support as a Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Resources</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Technology Stack</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 BTree. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}