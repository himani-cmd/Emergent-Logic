'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import { trackLeadGeneration } from '@/lib/analytics';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Mail, MapPin, Clock, Send, CheckCircle, Calendar, Ear, Target, FileText, DollarSign, ThumbsUp, Phone } from 'lucide-react';

const expectations = [
  { icon: Ear, text: 'We listen to your business challenges' },
  { icon: Target, text: 'We recommend the right CRM solution' },
  { icon: FileText, text: 'We give you a clear project scope' },
  { icon: DollarSign, text: 'We provide an exact price quote' },
  { icon: ThumbsUp, text: 'You decide if we are the right fit' },
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
        trackLeadGeneration({
          formName: 'contact_form',
          location: '/contact',
          leadSource: 'website_contact_page',
        });
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
      
      <section className="pt-32 pb-16 bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-white/10 text-white border-white/20">Contact Us</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Talk CRM</h1>
          <p className="text-xl text-white/70 max-w-3xl">Greater Vancouver's CRM and marketing automation experts. Book a free strategy call or send us a message.</p>
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
              <p className="text-xl text-gray-600">No obligation. No sales pressure. Just a straight conversation about your goals and how we can help.</p>
            </div>
            
            {/* What to expect */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">What to expect on the call:</h3>
              <div className="grid md:grid-cols-5 gap-4">
                {expectations.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                    <item.icon className="w-5 h-5 text-violet-500 flex-shrink-0" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Calendly Embed */}
            <div className="bg-gray-50 rounded-2xl p-4">
              <iframe
                src="https://calendly.com/emergent-logic/30min?hide_gdpr_banner=1"
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

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Or Send Us a Message</h2>
            <p className="text-gray-600">Prefer email? Fill out the form and we'll get back to you within 24 hours.</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in touch</h3>
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
                    <Phone className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <a href="tel:+17786526271" className="text-violet-600 hover:underline">778-652-6271</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                    <p className="text-gray-600">Surrey, BC, Canada</p>
                    <p className="text-gray-500 text-sm">Serving Greater Vancouver</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Response Time</h4>
                    <p className="text-gray-600">Within 24 hours on business days</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>We'll get back to you within 24 hours.</CardDescription>
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
                      <div><Label htmlFor="first_name">First Name</Label><Input id="first_name" value={formData.first_name} onChange={(e) => setFormData({ ...formData, first_name: e.target.value })} required className="mt-1" /></div>
                      <div><Label htmlFor="last_name">Last Name</Label><Input id="last_name" value={formData.last_name} onChange={(e) => setFormData({ ...formData, last_name: e.target.value })} required className="mt-1" /></div>
                    </div>
                    <div><Label htmlFor="email">Email</Label><Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="mt-1" /></div>
                    <div><Label htmlFor="phone">Phone</Label><Input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="mt-1" /></div>
                    <div><Label htmlFor="message">Message</Label><Textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} className="mt-1" placeholder="Tell us about your project..." /></div>
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

      <Footer />
      <CookieConsent />
    </main>
  );
}
