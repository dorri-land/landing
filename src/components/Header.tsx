import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95vw] max-w-7xl z-50 bg-white/65 backdrop-blur rounded-2xl border border-white/90 shadow-lg">
      <div className="container mx-auto pl-12 pr-12 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="dorri logo" className="h-8 w-8" />
          <span className="text-2xl font-medium lowercase bg-gradient-primary bg-clip-text text-transparent">
            dorri
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
            How it Works
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
          {/* <a href="/demo" className="text-muted-foreground hover:text-foreground transition-colors">
            Demo
          </a> */}
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="hero" asChild>
            <a href="https://tally.so/r/wkjLjM" target="_blank" rel="noopener noreferrer">
              Get Early Access
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;