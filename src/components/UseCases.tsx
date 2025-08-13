import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Rocket, Building2, Briefcase, Users, Target, Calendar, MessageSquare } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Students & Early Career Professionals",
      subtitle: "Build your network from the ground up",
      description: "Whether you're attending career fairs, networking events, or actively seeking opportunities, every conversation matters. Build authentic relationships that lead to internships, jobs, and mentorship.",
      scenarios: [
        "Career fair conversations with company reps",
        "Networking events and industry meetups",
        "Alumni connections and referral requests",
        "Informational interviews and career advice"
      ],
      benefits: [
        "Never forget who offered to help or refer you",
        "Remember specific advice from professionals",
        "Build authentic relationships that lead to opportunities",
        "Follow up effectively with everyone you meet"
      ],
      color: "border-l-primary"
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: "Startup Founders",
      subtitle: "Turn every conversation into opportunity",
      description: "You're constantly networking at investor events, conferences, and pitch competitions. Meeting 20+ new contacts weekly who could become investors, partners, or customers.",
      scenarios: [
        "Investor pitch meetings and feedback sessions",
        "Conference networking and partnership discussions",
        "Mentor office hours and advisor meetings",
        "Customer discovery interviews and user research"
      ],
      benefits: [
        "Track investor interest and feedback over time",
        "Remember partnership opportunities and next steps",
        "Build investor relationships through consistent follow-up",
        "Turn casual conversations into business opportunities"
      ],
      color: "border-l-primary"
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Researchers & Academics",
      subtitle: "Navigate the world of academic collaboration",
      description: "You attend conferences, workshops, and research meetings where collaboration opportunities and knowledge sharing happen constantly. Need to track conversations, potential collaborators, and research insights.",
      scenarios: [
        "Conference presentations and poster sessions",
        "Research collaboration discussions",
        "Grant proposal brainstorming sessions",
        "Academic networking and mentorship"
      ],
      benefits: [
        "Remember research collaboration opportunities",
        "Never lose track of who's working on what in your field",
        "Recall valuable insights from conference conversations",
        "Build academic networks that advance your research"
      ],
      color: "border-l-primary"
    },
    {
      icon: <Building2 className="h-8 w-8 text-primary" />,
      title: "Venture Capitalists",
      subtitle: "Manage hundreds of founder relationships",
      description: "You take 10+ meetings daily with founders, partners, and industry experts. Need to recall details about hundreds of startups and maintain relationships across your portfolio.",
      scenarios: [
        "Founder pitch meetings and due diligence",
        "Portfolio company check-ins and board meetings",
        "LP meetings and fundraising discussions",
        "Industry expert consultations and research"
      ],
      benefits: [
        "Recall specific startup details and traction metrics",
        "Track founder progress and milestone commitments",
        "Connect startups with relevant resources in your network",
        "Maintain relationship context across hundreds of contacts"
      ],
      color: "border-l-primary"
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "Sales & Business Development",
      subtitle: "Build authentic client relationships",
      description: "You have regular coffee meetings with prospects and clients. Need to track relationship development over time and turn casual conversations into business opportunities.",
      scenarios: [
        "Client discovery meetings and needs assessment",
        "Prospect coffee chats and relationship building",
        "Partnership discussions and collaboration planning",
        "Industry event networking and lead generation"
      ],
      benefits: [
        "Remember client preferences and pain points",
        "Track relationship development milestones",
        "Turn casual conversations into sales opportunities",
        "Build authentic relationships beyond transactions"
      ],
      color: "border-l-primary"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Event Organizers & Community Builders",
      subtitle: "Track sponsor relationships and venue contacts",
      description: "You're constantly reaching out to sponsors, venues, and partners. Need to remember previous conversations, commitments, and relationship context to make follow-ups more effective.",
      scenarios: [
        "Sponsor outreach and relationship building",
        "Venue negotiations and partnership discussions",
        "Previous event follow-ups and feedback",
        "Sponsor commitment tracking and renewals"
      ],
      benefits: [
        "Remember sponsor preferences and past commitments",
        "Track venue availability and pricing discussions",
        "Build stronger relationships through conversation history",
        "Turn casual sponsor chats into long-term partnerships",
        "Bonus: Help attendees remember conversations too! 🎉"
      ],
      color: "border-l-primary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-8 sm:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Who Uses
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Dorri?</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            From college students building their first network to VCs managing hundreds of relationships, 
            Dorri adapts to your networking style and professional needs.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className={`group p-8 hover:shadow-xl transition-all duration-500 md:hover:scale-105 border-l-4 border-l-accent relative overflow-hidden`}>
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-muted/50 group-hover:scale-110 transition-transform duration-300">
                  {useCase.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1 transition-colors duration-300">{useCase.title}</h3>
                  <p className="text-primary font-medium text-sm">{useCase.subtitle}</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                {useCase.description}
              </p>
              
              {/* Truncated content with bottom fade - expands on hover */}
              <div className="relative mb-4 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6 max-h-32 group-hover:max-h-none transition-all duration-700 ease-out overflow-hidden">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-primary" />
                      Common Scenarios
                    </h4>
                    <ul className="space-y-2">
                      {useCases[index].scenarios.map((scenario, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {scenario}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2 text-sm">
                      <Target className="h-4 w-4 text-primary" />
                      Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {useCases[index].benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Bottom fade overlay - disappears on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card via-card/80 to-transparent pointer-events-none group-hover:opacity-0 transition-opacity duration-700 ease-out" />
                
                {/* Interactive hint - disappears on hover */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 group-hover:opacity-0 transition-opacity duration-700 ease-out">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
                    <span className="text-xs font-medium text-primary">Hover to see all</span>
                    <div className="w-1 h-1 bg-primary rounded-full animate-pulse" />
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

export default UseCases; 