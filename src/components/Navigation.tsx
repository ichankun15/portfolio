import { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import {
  Home,
  User,
  Briefcase,
  Code,
  GraduationCap,
  Mail,
  FolderOpen,
  Menu,
  X,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import DarkMode from "@/components/ui/darkmode";

interface NavigationProps {
  onModeSwitch: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onModeSwitch }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

const navItems = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: User },
  { to: "/experience", label: "Experience", icon: Briefcase },
  { to: "/projects", label: "Projects", icon: FolderOpen },
  { to: "/skills", label: "Skills", icon: Code },
  { to: "/education", label: "Education", icon: GraduationCap },
  { to: "/contact", label: "Contact", icon: Mail },
];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Custom function to check if a link is active
  const isLinkActive = (to: string) => {
    if (to === "/portfolio") {
      // For home page, only active if exactly matching /portfolio
      return location.pathname === "/portfolio";
    }
    // For other pages, check if current path starts with the link path
    return location.pathname.startsWith(to);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center justify-between w-full">
        {/* Left: Logo/Branding */}
        <div className="flex items-center gap-2">
          <NavLink
            to="/portfolio"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            {/* <Home size={20} /> */}
            <span>iChan</span>
          </NavLink>
        </div>
        {/* Center: Navigation Links */}
        <div className="flex items-center gap-1">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/portfolio"} // exact match for home
              className={({ isActive }) =>
                `relative group flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                }`
              }
            >
              <Icon size={16} />
              <span>{label}</span>
              {/* Tooltip */}
              <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 scale-90 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:scale-100 transition bg-foreground text-background text-xs px-2 py-1 rounded-md shadow-md whitespace-nowrap z-10">
                {label}
              </span>
            </NavLink>
          ))}
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-3">
          <DarkMode />

          {/* Mode Toggle */}
          <Button
            onClick={onModeSwitch}
            variant="outline"
            size="sm"
            className="group"
            title="Switch to Terminal Mode"
          >
            <Terminal className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
            CLI Mode
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden flex items-center justify-between w-full">
        {/* Logo/Brand */}
        <NavLink
          to="/portfolio"
          className="flex items-center gap-2 text-lg font-semibold"
        >
          {/* <Home size={20} /> */}
          <span>iChan</span>
        </NavLink>

        {/* Right side controls */}
        <div className="flex items-center gap-2">
          <DarkMode />

          {/* Mobile Menu Toggle */}
          <Button
            onClick={toggleMobileMenu}
            variant="ghost"
            size="sm"
            className="p-2"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-lg">
          <div className="container mx-auto px-6 py-4">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between mb-8">
              <NavLink
                to="/portfolio"
                className="flex items-center gap-2 text-lg font-semibold"
                onClick={closeMobileMenu}
              >
                {/* <Home size={20} /> */}
                <span>iChan</span>
              </NavLink>

              <Button
                onClick={toggleMobileMenu}
                variant="ghost"
                size="sm"
                className="p-2"
              >
                <X size={20} />
              </Button>
            </div>

            {/* Mobile Menu Items */}
            <div className="space-y-2 mb-8">
              {navItems.map(({ to, label, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/portfolio"}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 w-full ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "bg-gray-100 dark:bg-gray-800 text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    }`
                  }
                >
                  <Icon size={20} />
                  <span>{label}</span>
                </NavLink>
              ))}
            </div>

            {/* Mobile Mode Toggle */}
            <div className="border-t border-border pt-6">
              <Button
                onClick={() => {
                  onModeSwitch();
                  closeMobileMenu();
                }}
                variant="outline"
                size="lg"
                className="w-full group"
                title="Switch to Terminal Mode"
              >
                <Terminal className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                Switch to CLI Mode
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
