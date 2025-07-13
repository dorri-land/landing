import { Button } from "@/components/ui/button";
import { ArrowRight, Waves, Calendar, Mic } from "lucide-react";
import heroImage from "@/assets/ocean-hero.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen pt-16 flex items-center relative overflow-hidden bg-slate-50">
      {/* Organic gradient background */}
      <div className="absolute inset-0">
        {/* Main gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"></div>
        
        {/* Wave-like organic shapes */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-blue-200/30 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/4 left-0 w-80 h-80 bg-gradient-to-br from-indigo-100/50 to-blue-100/40 rounded-full blur-3xl transform -translate-x-1/2"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-blue-200/30 to-indigo-100/40 rounded-full blur-3xl transform translate-y-1/2"></div>
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-gradient-to-tr from-indigo-100/30 to-blue-100/50 rounded-full blur-3xl"></div>
        </div>
        
        {/* Subtle mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/20 to-indigo-50/30"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-slate-700">
              Remember 
              <span className="bg-gradient-secondary bg-clip-text text-transparent"> everyone </span>
               you meet.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Never forget who you met, where you met them, or what you talked about. 
              Dorri captures and contextualizes your real-world networking moments, 
              turning your memorries into meaningful relationships that last.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8" asChild>
              <a href="https://tally.so/r/wkjLjM" target="_blank" rel="noopener noreferrer">
                Get Early Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-white/80 border-slate-200 text-slate-700 hover:bg-white hover:border-slate-300">
              Watch Demo
            </Button>
          </div>
          
                      <div className="grid grid-cols-3 gap-8 pt-8 max-w-2xl mx-auto">
              <div className="text-center">
                <Waves className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <div className="text-sm text-slate-600">Smart Networking</div>
              </div>
              <div className="text-center">
                <Calendar className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <div className="text-sm text-slate-600">Event Integration</div>
              </div>
              <div className="text-center">
                <Mic className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <div className="text-sm text-slate-600">Voice Capture</div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;