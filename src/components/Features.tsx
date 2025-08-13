import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, Calendar, Search, Shell, Users, MapPin, Zap } from "lucide-react";
import logo from "@/assets/logo.png";

const Features = () => {
  const features = [
    {
      icon: <Mic className="h-8 w-8 text-primary" />,
      title: "Live Conversation Capture",
      description: "Dorri listens in on your real-world conversations, automatically capturing and summarizing what matters. No more frantic note-taking during coffee chats or networking events.",
      details: [
        "Real-time conversation listening",
        "Automatic key point extraction", 
        "Action item identification",
        "No manual note-taking required"
      ],
      highlight: "Capture conversations naturally, without breaking the flow"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Smart Context Integration",
      description: "Automatically connects conversations with your calendar, location, and events. Every memory is tagged with context so you know where, when, and why you met.",
      details: [
        "Google Calendar sync",
        "Location-based memory tagging",
        "Event association and context",
        "Automatic relationship mapping"
      ],
      highlight: "Rich context without manual work"
    },
    {
      icon: <img src={logo} alt="dorri logo" className="h-8 w-8" />,
      title: "AI Memory Assistant",
      description: "Your personal memory companion that remembers everyone you've met and what you discussed. Ask about your past conversations and find exactly what you need.",
      details: [
        "Natural language queries about your network",
        "Find how you met someone",
        "Search by topic, person, or context",
        "Semantic search across all conversations"
      ],
      highlight: "Ask anything about your network, get instant answers"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Personal CRM",
      description: "Built around people. Every connection is enriched with conversation history, personal context, and relationship insights. Your network becomes a searchable knowledge base of human relationships.",
      details: [
        "Person-centered relationship tracking",
        "Conversation history per contact",
        "Context and tag organization",
        "LinkedIn integration and enrichment"
      ],
      highlight: "Your network as a searchable knowledge base"
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Memory & Event View",
      description: "See your networking journey through time. Past events expand to show conversations, and future events suggest the best people to connect with based on your current needs.",
      details: [
        "Timeline view of all networking events",
        "Expandable conversation details",
        "Key insights and action items",
        "Connection recommendations for upcoming events"
      ],
      highlight: "Navigate your networking history and future strategically"
    },
    {
      icon: <Shell className="h-8 w-8 text-primary" />,
      title: "Follow-up Intelligence",
      description: "Get conversation summaries and takeaways in weekly/monthly digests. One-click action item follow-ups turn casual conversations into lasting relationships.",
      details: [
        "Weekly/monthly memory digests",
        "Event summaries and key takeaways",
        "One-click follow-up actions",
        "Smart timing recommendations"
      ],
      highlight: "Never let valuable connections slip away"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "MCP Integration",
      description: "Make AI tools personal with your real-world context. Dorri's MCP integration lets you reference your network knowledge, resources, and conversations in your AI-powered workflows.",
      details: [
        "Access real conversations in ChatGPT/Claude",
        "Reference your network knowledge and resources",
        "Personal context in AI responses",
        "Your network becomes AI-searchable"
      ],
      highlight: "Your real life becomes part of your digital workflow"
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
            giving you the context and intelligence you need to connect meaningfully.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`p-8 hover:shadow-xl transition-all hover:scale-105 ${
                index === features.length - 1 && features.length % 2 === 1 
                  ? 'lg:col-span-2 lg:max-w-2xl lg:mx-auto' 
                  : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-muted/50">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2 mb-4">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Zap className="h-3 w-3 text-accent" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="text-sm font-medium text-primary bg-primary/5 px-3 py-2 rounded-lg">
                    {feature.highlight}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;