'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { 
  Menu, X, ChevronRight, Sparkles, Zap, Target, Users, 
  ArrowRight, CheckCircle, Star, Phone, Mail, MapPin,
  Lightbulb, TrendingUp, Shield, Clock, Globe, Code,
  BarChart3, MessageSquare, Settings, Layers, Database,
  Rocket, Award, Heart, ExternalLink, Send, Facebook,
  Twitter, Linkedin, Instagram, ChevronDown
} from 'lucide-react';

// Navigation Component
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className={`text-xl font-bold ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}>Emergent Logic</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors hover:text-violet-600 ${
                  scrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}
            <Link href="/admin">
              <Button variant="outline" className="border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white">
                Admin
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={scrolled ? 'text-gray-900' : 'text-white'} />
            ) : (
              <Menu className={scrolled ? 'text-gray-900' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white rounded-2xl shadow-xl p-6 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 text-gray-700 font-medium hover:text-violet-600"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Link href="/admin" className="block mt-4">
              <Button className="w-full bg-violet-600 hover:bg-violet-700">
                Admin Login
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-violet-500/20 text-violet-200 border-violet-400/30 px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Digital Solutions
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Business with
            <span className="block bg-gradient-to-r from-violet-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Emergent Intelligence
            </span>
          </h1>
          
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            We combine cutting-edge AI technology with proven digital strategies to help businesses 
            achieve unprecedented growth and efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact">
              <Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100 px-8 py-6 text-lg font-semibold">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a href="#services">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg">
                Our Services
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Projects Delivered', value: '200+' },
              { label: 'Happy Clients', value: '150+' },
              { label: 'Team Members', value: '25+' },
              { label: 'Years Experience', value: '8+' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/50" />
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const services = [
    {
      icon: Database,
      title: 'CRM Implementation',
      description: 'Salesforce, HubSpot, and custom CRM solutions tailored to your business needs.',
      features: ['Custom Setup', 'Data Migration', 'Team Training', 'Ongoing Support'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Marketing Automation',
      description: 'Automate your marketing workflows to nurture leads and drive conversions.',
      features: ['Email Campaigns', 'Lead Scoring', 'Workflow Design', 'Analytics'],
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technology.',
      features: ['Custom Design', 'E-commerce', 'Web Apps', 'SEO Optimization'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to grow your online presence and revenue.',
      features: ['SEO/SEM', 'Social Media', 'Content Strategy', 'PPC Campaigns'],
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: Sparkles,
      title: 'AI Integration',
      description: 'Leverage artificial intelligence to automate processes and gain insights.',
      features: ['Chatbots', 'Predictive Analytics', 'Process Automation', 'AI Consulting'],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Turn your data into actionable insights with custom dashboards and reports.',
      features: ['Data Analysis', 'Custom Dashboards', 'Reporting', 'KPI Tracking'],
      color: 'from-indigo-500 to-blue-500'
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-violet-100 text-violet-700">
            What We Offer
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions to transform your business and drive growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
              <CardHeader>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-violet-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  const values = [
    { icon: Lightbulb, title: 'Innovation', description: 'We stay ahead with cutting-edge solutions' },
    { icon: Shield, title: 'Trust', description: 'Building lasting relationships through integrity' },
    { icon: Target, title: 'Results', description: 'Focused on delivering measurable outcomes' },
    { icon: Heart, title: 'Passion', description: 'Dedicated to excellence in everything we do' },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge className="mb-4 bg-violet-100 text-violet-700">
              About Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Driving Digital
              <span className="block text-violet-600">Transformation</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Emergent Logic is a full-service digital agency specializing in CRM implementation, 
              marketing automation, web development, and AI-powered solutions. We help businesses 
              of all sizes leverage technology to achieve their goals.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Based in Surrey, BC, we serve clients across Canada and beyond, bringing together 
              expertise in Salesforce, HubSpot, and custom development to deliver exceptional results.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-violet-100 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-violet-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{value.title}</h4>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-violet-100 to-indigo-100 p-8">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <Award className="w-20 h-20 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Excellence Award</h3>
                  <p className="text-white/80">Top Digital Agency 2025</p>
                </div>
              </div>
            </div>
            {/* Floating Cards */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center">
                  <Users className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">150+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Blog Section
function BlogSection() {
  const posts = [
    {
      title: 'HubSpot vs Salesforce: Which CRM is Right for You?',
      excerpt: 'A comprehensive comparison to help you choose the best CRM for your business needs.',
      category: 'CRM',
      date: 'Mar 15, 2026',
      readTime: '8 min read'
    },
    {
      title: 'What is CRM Implementation?',
      excerpt: 'Learn the essential steps and best practices for successful CRM implementation.',
      category: 'Implementation',
      date: 'Mar 10, 2026',
      readTime: '6 min read'
    },
    {
      title: 'Marketing Automation: A Complete Guide',
      excerpt: 'Discover how marketing automation can transform your customer engagement strategy.',
      category: 'Marketing',
      date: 'Mar 5, 2026',
      readTime: '10 min read'
    },
    {
      title: 'What is AEO? Answer Engine Optimization Explained',
      excerpt: 'Stay ahead of the curve with AI-powered search optimization strategies.',
      category: 'SEO',
      date: 'Feb 28, 2026',
      readTime: '7 min read'
    },
  ];

  return (
    <section id="blog" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-violet-100 text-violet-700">
            Latest Insights
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            From Our Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert insights and guides to help you navigate the digital landscape
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white cursor-pointer">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">{post.category}</Badge>
                <CardTitle className="text-lg group-hover:text-violet-600 transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success('Message sent successfully! We\'ll get back to you soon.');
        setFormData({ first_name: '', last_name: '', email: '', phone: '', message: '' });
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <Badge className="mb-4 bg-violet-100 text-violet-700">
              Get In Touch
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Start Your
              <span className="block text-violet-600">Digital Journey</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to transform your business? Get in touch with our team to discuss 
              your project and discover how we can help you achieve your goals.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Our Office</h4>
                  <p className="text-gray-600">Surrey, British Columbia, Canada</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                  <p className="text-gray-600">hello@emergentlogic.ca</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                  <p className="text-gray-600">+1 (604) 555-0123</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t">
              <p className="text-gray-600 mb-4">Follow us on social media</p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <button key={i} className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-violet-100 hover:text-violet-600 transition-colors">
                    <Icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="first_name">First Name</Label>
                      <Input
                        id="first_name"
                        value={formData.first_name}
                        onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="last_name">Last Name</Label>
                      <Input
                        id="last_name"
                        value={formData.last_name}
                        onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="mt-1"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-violet-600 hover:bg-violet-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Emergent Logic</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              AI-powered digital solutions for businesses ready to transform. 
              CRM implementation, marketing automation, web development, and more.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-violet-600 transition-colors">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-violet-400 transition-colors">CRM Implementation</a></li>
              <li><a href="#services" className="hover:text-violet-400 transition-colors">Marketing Automation</a></li>
              <li><a href="#services" className="hover:text-violet-400 transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-violet-400 transition-colors">Digital Marketing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-violet-400 transition-colors">About Us</a></li>
              <li><a href="#blog" className="hover:text-violet-400 transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-violet-400 transition-colors">Contact</a></li>
              <li><Link href="/admin" className="hover:text-violet-400 transition-colors">Admin</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Emergent Logic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
