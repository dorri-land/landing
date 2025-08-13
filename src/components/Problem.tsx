import { Card } from "@/components/ui/card";
import { AlertCircle, FileText, Users, Clock } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: <Users className="h-8 w-8 text-destructive" />,
      title: "LinkedIn Strangers",
      description: "500+ connections but can't remember how you met half of them. That 'mutual friend' from 3 months ago? No clue.",
      impact: "Lost opportunities and cold follow-ups"
    },
    {
      icon: <FileText className="h-8 w-8 text-destructive" />,
      title: "Scattered Memories",
      description: "Notes everywhere: voice recordings, Google Docs, Notion, napkin scribbles, photos, messages to self. Good luck finding anything.",
      impact: "Valuable insights buried in chaos"
    },
    {
      icon: <Clock className="h-8 w-8 text-destructive" />,
      title: "Networking Fatigue",
      description: "After 20+ events this year, networking feels superficial. You meet so many people but nothing sticks. What's the point?",
      impact: "Time and energy wasted"
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-destructive" />,
      title: "Forgotten Conversations",
      description: "That conversation about a potential partnership? The startup idea someone shared? The job opportunity they mentioned? All lost in the fog of countless conversations.",
      impact: "Missed connections and opportunities"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-100 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Modern Networking is
            <span className="text-destructive"> Broken</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            You attend networking events, conferences, and coffee chats. You make great connections. 
            But like Dory, your memories drift away and you can't remember the details that matter.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {problems.map((problem, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all border-l-4 border-l-destructive/20 hover:border-l-destructive/40">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-destructive/10">
                  {problem.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{problem.title}</h3>
                  <p className="text-muted-foreground mb-3 text-sm leading-relaxed">{problem.description}</p>
                  <div className="text-xs font-medium text-destructive bg-destructive/5 px-2 py-1 rounded">
                    {problem.impact}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-card border border-border rounded-xl p-8 max-w-4xl mx-auto">
            <div className="text-2xl mb-4">😤</div>
            <blockquote className="text-lg italic text-muted-foreground mb-4">
              "I'm tired of feeling like I'm building a network of strangers. 
              I want to remember why each connection matters and actually use my network when I need it."
            </blockquote>
            <div className="text-sm text-muted-foreground">— Every ambitious professional</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;