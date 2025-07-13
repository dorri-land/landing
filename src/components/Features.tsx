import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Fish, Mic, Calendar, Search, Waves, Shell, Zap, MapPin } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Mic className="h-8 w-8 text-primary" />,
      title: "Smart Conversation Capture",
      description: "Record and transcribe key moments from events with AI-powered note-taking that captures your precious memorris.",
      details: ["Voice-to-text transcription", "Auto-summarization", "Key quotes extraction"]
    },
    {
      icon: <Calendar className="h-8 w-8 text-accent" />,
      title: "Event Context Integration",
      description: "Automatically connects with your calendar and location to tag conversations with event details.",
      details: ["Google Calendar sync", "Location tagging", "Luma/Meetup integration"]
    },
    {
      icon: <Fish className="h-8 w-8 text-primary" />,
      title: "AI Memory Assistant",
      description: "Your personal memory companion that remembers everyone you've met and what you discussed, like a faithful fish friend.",
      details: ["Semantic search", "Connection insights", "Follow-up suggestions"]
    },
    {
      icon: <Search className="h-8 w-8 text-accent" />,
      title: "Intelligent Recall",
      description: "Ask anything about your network and get instant, contextual answers about your connections.",
      details: ["Natural language queries", "Smart filtering", "Connection mapping"]
    },
    {
      icon: <Waves className="h-8 w-8 text-primary" />,
      title: "LinkedIn+ Integration",
      description: "Enhances your LinkedIn connections with real-world context and conversation history.",
      details: ["Profile enrichment", "Context preservation", "Auto-outreach templates"]
    },
    {
      icon: <Shell className="h-8 w-8 text-accent" />,
      title: "Follow-up Intelligence",
      description: "Get smart reminders and suggestions for when and how to reconnect with people, like finding pearls in your network.",
      details: ["Timing optimization", "Message templates", "Opportunity tracking"]
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Your Networking
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Superpower</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dorri transforms how you build and maintain professional relationships, 
            giving you the context and intelligence you need to connect meaningfully in the ocean of opportunities.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-muted/50">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Zap className="h-3 w-3 text-accent" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="text-lg px-8">
            Experience the Power
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;