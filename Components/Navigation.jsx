import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createPageUrl } from "../utils/index.js";
import { Menu, X, Telescope } from "lucide-react";
import { Button } from "./ui/button.jsx";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Research", href: "#research" },
    { name: "Photography", href: "#photography" },
    { name: "Outdoors", href: "#outdoors" }
  ];

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const isHomePage = window.location.pathname === createPageUrl("Home") || window.location.pathname === '/';
      if (!isHomePage) {
        navigate(createPageUrl("Home") + href);
      } else {
        const element = document.getElementById(href.substring(1));
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Telescope className="w-8 h-8 text-blue-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Pablo M. Sánchez Alarcón
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
            >
              Contact
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium w-full text-left"
                >
                  {item.name}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('#contact')}
                className="w-full mt-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}