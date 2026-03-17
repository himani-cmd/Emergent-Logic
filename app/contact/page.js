'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Mail, MapPin, Clock, Send, CheckCircle, Calendar } from 'lucide-react';

const faqs = [
  { q: 'How quickly will you respond to my inquiry?', a: 'We respond to all inquiries within 24 hours during business days. For urgent projects, mention it in your message and we\'ll prioritize your request.' },
  { q: 'Do you offer free consultations?', a: 'Yes! We offer a free 30-minute strategy call to understand your business needs and discuss how we can help. No obligation, no pressure—just a conversation about your goals.' },
  { q: 'What information should I include in my message?', a: 'Share your business name, the services you\'re interested in (CRM, marketing automation, web development, etc.), your timeline, and any specific challenges you\'re facing. The more details, the better we can prepare.' },
  { q: 'Do you work with clients outside of Canada?', a: 'Yes! While we\'re based in Surrey, BC, we serve clients across Canada and the United States. All our work is done remotely, so location is never a barrier.' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ first_name: '', last_name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
        toast.success('Message sent! We\'ll get back to you within 24 hours.');
        setSubmitted(true);
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
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/10 text-white border-white/20">Contact Us</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's start a conversation</h1>
            <p className="text-xl text-white/70">
              Contact Emergent Logic Consulting for CRM implementation, marketing automation, web development, and digital marketing services. Based in Surrey, BC, Canada, we serve B2B clients across Canada and the US.
            </p>
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Book a Free 30-Minute Strategy Call</h2>
              <p className="text-xl text-gray-600">No obligation. No sales pressure. Just a straight conversation about your goals.</p>
            </div>
            
            {/* Calendly Embed */}
            <div className="bg-gray-50 rounded-2xl p-4 mb-8">
              <iframe
                src="https://calendly.com/himani-emergentlogics/30min?hide_gdpr_banner=1"
                width="100%"
                height="700"
                frameBorder="0"
                className="rounded-xl"
                title="Schedule a call with Emergent Logic"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Or Send Us a Message</h2>
            <p className="text-gray-600">Prefer email? Fill out the form and we'll get back to you within 24 hours.</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in touch</h3>
              <p className="text-gray-600 mb-8">Have a project in mind? We're here to help. Reach out through any of the channels below or fill out the contact form.</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a href="mailto:info@emergent-logic.ca" className="text-violet-600 hover:underline">info@emergent-logic.ca</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                    <p className="text-gray-600">Surrey, BC, Canada</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Office Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="first_name">First Name</Label>
                        <Input id="first_name" value={formData.first_name} onChange={(e) => setFormData({ ...formData, first_name: e.target.value })} required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="last_name">Last Name</Label>
                        <Input id="last_name" value={formData.last_name} onChange={(e) => setFormData({ ...formData, last_name: e.target.value })} required className="mt-1" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} className="mt-1" placeholder="Tell us about your project..." />
                    </div>
                    <Button type="submit" className="w-full bg-violet-600 hover:bg-violet-700" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'} <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-violet-100 text-violet-700">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Before you reach out</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, i) => (
              <Card key={i} className="border-0 shadow-lg">
                <CardHeader><CardTitle className="text-lg">{faq.q}</CardTitle></CardHeader>
                <CardContent><p className="text-gray-600">{faq.a}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </main>
  );
}
