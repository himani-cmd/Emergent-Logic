import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft, Search } from 'lucide-react';

export const metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900 flex items-center justify-center px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <div className="text-9xl font-bold text-white/10 mb-4">404</div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-xl text-white/70 mb-8">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg" className="bg-white text-violet-900 hover:bg-violet-100">
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
              <Search className="w-5 h-5 mr-2" />
              Contact Us
            </Button>
          </Link>
        </div>
        
        <div className="mt-12 text-white/50">
          <p>Looking for something specific?</p>
          <div className="flex flex-wrap gap-4 justify-center mt-4">
            <Link href="/services" className="text-violet-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/blog" className="text-violet-300 hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-violet-300 hover:text-white transition-colors">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
