import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Calendar, Mic } from "lucide-react";
import heroImage from "@/assets/hero-network.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen pt-16 bg-gradient-subtle">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Your AI-Powered
                <span className="bg-gradient-primary bg-clip-text text-transparent block">
                  Memory for Human Connections
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Never forget who you met, where you met them, or what you talked about. 
                MemoryLink captures and contextualizes your real-world networking moments, 
                so you can build meaningful relationships that last.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Get Early Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Watch Demo
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <Users className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-sm text-muted-foreground">Smart Networking</div>
              </div>
              <div className="text-center">
                <Calendar className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-sm text-muted-foreground">Event Integration</div>
              </div>
              <div className="text-center">
                <Mic className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-sm text-muted-foreground">Voice Capture</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={heroImage} 
              alt="AI-powered networking visualization"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;