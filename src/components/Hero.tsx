import { Button } from "@/components/ui/button";
import { ArrowRight, Waves, Calendar, Mic, MapPin, Search } from "lucide-react";
import heroImage from "@/assets/ocean-hero.jpg";
import bg5 from "@/assets/bg1.png";

const Hero = () => {
  return (
    <section className="min-h-screen pt-16 flex items-center relative overflow-hidden bg-slate-50">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <img
          src={bg5}
          alt=""
          className="w-full h-full object-cover object-center"
          draggable={false}
        />
        {/* You can keep the gradient overlays for extra effect */}
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-semibold leading-tight text-slate-700">
              Your  
              <span className="bg-gradient-secondary bg-clip-text text-transparent"> memory layer </span>
              for <br /> the
               <span className="bg-gradient-secondary bg-clip-text text-transparent"> real world</span>.
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Never forget who you met, where you met them, or what you talked about. 
              Dorri captures and contextualizes your real-world networking moments, 
              turning your memories into meaningful connections that last.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8" asChild>
              <a href="https://tally.so/r/wkjLjM" target="_blank" rel="noopener noreferrer">
                Get Early Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-white/45 border-slate-200 text-slate-700 hover:bg-white/65 hover:border-slate-300">
            <a href="#how-it-works">
                How it works
              </a>
            </Button>
          </div>
          
                      <div className="grid grid-cols-4 gap-8 pt-8 max-w-3xl mx-auto">
              <div className="text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-sm text-slate-600">Attend Events</div>
              </div>
              <div className="text-center">
                <Mic className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-sm text-slate-600">Save Memories</div>
              </div>
              <div className="text-center">
                <Search className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-sm text-slate-600">Smart Recall</div>
              </div>
              <div className="text-center">
                <Waves className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-sm text-slate-600">Act & Connect</div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;