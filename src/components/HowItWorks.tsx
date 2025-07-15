import { Card } from "@/components/ui/card";
import { ArrowRight, MapPin, Mic, Waves } from "lucide-react";
import logo from "@/assets/logo.png";

const HowItWorks = () => {
  const steps = [
    {
      icon: <MapPin className="h-12 w-12 text-primary" />,
      title: "Attend Events",
      description: "Go to conferences, meetups, or hackathons as usual. Dorri detects events through your calendar and location.",
      step: "01"
    },
    {
      icon: <Mic className="h-12 w-12 text-accent" />,
      title: "Capture memories",
      description: "Use voice recording or quick notes to capture who you meet and what you discuss. Dorri handles the heavy lifting.",
      step: "02"
    },
    {
      icon: <img src={logo} alt="dorri logo" className="h-12 w-12" />,
      title: "AI Processing",
      description: "Advanced AI organizes, summarizes, and enriches your conversations with LinkedIn data and event context.",
      step: "03"
    },
    {
      icon: <Waves className="h-12 w-12 text-accent" />,
      title: "Smart Recall",
      description: "Ask questions like 'Who did I meet at the biotech summit who works at Sanofi?' and get instant, accurate answers.",
      step: "04"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            How It
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dorri seamlessly integrates into your networking workflow, 
            capturing and organizing your connections without changing how you naturally interact in the sea of opportunities.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-8 text-center hover:shadow-xl transition-all h-full">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
                <div className="mb-6 flex justify-center pt-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
              
              {index < steps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 h-8 w-8 text-muted-foreground z-10" />
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-card border border-border rounded-2xl p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Example Use Cases</h3>
              <div className="space-y-4">
                <div className="bg-muted/30 rounded-lg p-4">
                  <div className="font-medium text-sm mb-1">Query:</div>
                  <div className="text-primary italic">"Who did I meet at MIT biotech summit who offered referrals?"</div>
                </div>
                <div className="bg-muted/30 rounded-lg p-4">
                  <div className="font-medium text-sm mb-1">Result:</div>
                  <div className="text-muted-foreground">Ana Rodriguez, Senior R&D at Sanofi. Discussed clinical AI applications. Offered to refer for summer internships.</div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Smart Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Auto-tags conversations with event details</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Links photos to people and events</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Suggests follow-up timing and messaging</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Monthly summaries of networking insights</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;