import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Bell, Users, Zap } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Supercharge Your Networking?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8">
            Join the waitlist for early access to MemoryLink. Be among the first to experience 
            AI-powered relationship intelligence that transforms how you connect.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" className="text-lg px-8">
              <Bell className="mr-2 h-5 w-5" />
              Join Waitlist
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              Schedule Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="p-6 text-center bg-primary-foreground/10 border-primary-foreground/20">
            <Users className="h-8 w-8 text-primary-foreground mx-auto mb-3" />
            <div className="text-2xl font-bold text-primary-foreground mb-1">500+</div>
            <div className="text-primary-foreground/70 text-sm">Early Access Signups</div>
          </Card>
          
          <Card className="p-6 text-center bg-primary-foreground/10 border-primary-foreground/20">
            <Zap className="h-8 w-8 text-primary-foreground mx-auto mb-3" />
            <div className="text-2xl font-bold text-primary-foreground mb-1">10x</div>
            <div className="text-primary-foreground/70 text-sm">Better Connection Recall</div>
          </Card>
          
          <Card className="p-6 text-center bg-primary-foreground/10 border-primary-foreground/20">
            <Bell className="h-8 w-8 text-primary-foreground mx-auto mb-3" />
            <div className="text-2xl font-bold text-primary-foreground mb-1">Q1</div>
            <div className="text-primary-foreground/70 text-sm">2025 Launch</div>
          </Card>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-primary-foreground/60 text-sm">
            🎯 Early access includes lifetime discount and priority feature requests
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;