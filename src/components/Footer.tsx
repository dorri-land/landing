import { Twitter, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="dorri logo" className="h-8 w-8" />
              <span className="text-xl font-medium lowercase bg-gradient-primary bg-clip-text text-transparent">
                dorri
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Your memory layer for the real world. Never forget who you met, 
              what you heard, or why it mattered.
            </p>
            <div className="flex gap-4 mb-4">
              <a href="https://twitter.com/dorri-land" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </a>
              <a href="https://linkedin.com/in/dorri-land" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </a>
              <a href="https://tiktok.com/@dorri.land" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                  <path d="M12.75 2.25h3A.75.75 0 0 1 16.5 3v2.25a3.75 3.75 0 0 0 3.75 3.75h.75a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-1.5v5.25a6.75 6.75 0 1 1-6.75-6.75.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75 2.25 2.25 0 1 0 2.25 2.25V3a.75.75 0 0 1 .75-.75z" />
                </svg>
              </a>
            </div>
            <div className="mb-4">
              <a href="mailto:hello@dorri.land" className="text-muted-foreground hover:text-primary underline transition-colors text-sm">hello@dorri.land</a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-foreground transition-colors">How it Works</a></li>
              <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Dorri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;