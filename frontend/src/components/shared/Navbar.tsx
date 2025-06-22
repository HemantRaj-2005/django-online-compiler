
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../mode-toggle";
import { Home, LogIn, Search } from "lucide-react";

const Navbar = () => {
  
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/30 backdrop-blur-lg border-b border-border/50 py-3 px-6 shadow-lg">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo */}
        <span
          className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent transition-transform duration-300 hover:scale-105"
        >
          Python Code Compiler
        </span>

        {/* Nav Links */}
        <div className="flex items-center gap-6">
          <span>
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-accent/50 hover:scale-105 transition-transform duration-200 hover:cursor-pointer"
            >
              <Home className="w-5 h-5 mr-2" />
              Home
            </Button>
          </span>

          <span>
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-accent/50 hover:scale-105 transition-transform duration-200 hover:cursor-pointer"
            >
              About
            </Button>
          </span>

          <span>
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-accent/50 hover:scale-105 transition-transform duration-200 hover:cursor-pointer"
            >
              <Search className="w-5 h-5 mr-2" />
              Search
            </Button>
          </span>

          {/* Mode toggle */}
          <ModeToggle />

          {/* Login Button */}
          <span>
            <Button
              variant="default"
              size="sm"
              className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 hover:scale-105 transition-all duration-300 hover:cursor-pointer"
            >
              <LogIn className="w-5 h-5 mr-2" />
              Login
            </Button>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
