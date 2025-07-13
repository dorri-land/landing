import { Card } from "@/components/ui/card";
import { Anchor, MessageSquare, Search, Clock } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: <MessageSquare className="h-8 w-8 text-destructive" />,
      title: "Forgotten Conversations",
      description: "You meet amazing people at events but forget what you talked about weeks later."
    },
    {
      icon: <Search className="h-8 w-8 text-destructive" />,
      title: "Lost Context",
      description: "LinkedIn connections lack the real-world context of where and how you met."
    },
    {
      icon: <Clock className="h-8 w-8 text-destructive" />,
      title: "Missed Opportunities",
      description: "Valuable connections slip through the cracks because you can't remember who offered what."
    },
    {
      icon: <Anchor className="h-8 w-8 text-destructive" />,
      title: "Networking Inefficiency",
      description: "At events, you struggle to find the right people to connect with and ask meaningful questions."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Modern Networking is
            <span className="text-destructive"> Broken</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            You attend conferences, hackathons, and meetups. You make great connections. 
            But like Dory, your memorries drift away and you can't remember the details that matter.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mb-4 flex justify-center">
                {problem.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground text-sm">{problem.description}</p>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-xl p-8 max-w-4xl mx-auto">
            <div className="text-2xl mb-4">💭</div>
            <blockquote className="text-lg italic text-muted-foreground">
              "I went to an amazing biotech summit, met a researcher who offered to refer me for internships, 
              connected on LinkedIn... and three weeks later I couldn't remember her name, 
              what company she worked for, or what we even discussed."
            </blockquote>
            <div className="text-sm text-muted-foreground mt-4">— Every networker ever</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;