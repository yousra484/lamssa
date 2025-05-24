import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeaderLink from '@/components/ui/header-link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#E8DFD3] shadow-sm border-b border-primary/10 sticky top-0 z-50">
      <div className="container mx-auto px-4">
       

        {/* Main header */}
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/1f2e651b-d5c2-4856-8fd7-994eb6294273.png" 
              alt="لمسة حرة" 
              className="h-12 md:h-16 w-auto transition-transform hover:scale-105"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 space-x-reverse">
            <HeaderLink href="/#" isAnchor>
              الرئيسية
            </HeaderLink>
            <HeaderLink href="#products" isAnchor>
              الكتالوج
            </HeaderLink>
            <HeaderLink href="#artisans" isAnchor>
              الحرفيات
            </HeaderLink>
            <HeaderLink href="#stories" isAnchor>
              قصتي مع الخياطة
            </HeaderLink>
            <HeaderLink href="#contact" isAnchor>
              اتصل بنا
            </HeaderLink>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="ابحث عن منتجاتك المفضلة..."
                className="w-full px-3 py-1.5 pr-8 rounded-full border border-primary/20 focus:outline-none focus:ring-1 focus:ring-primary/30 bg-white/80 text-sm"
              />
              <Search className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-primary/60 h-3.5 w-3.5" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2 space-x-reverse">
            <Button variant="ghost" size="sm" className="text-primary/80 hover:text-primary">
              <User className="h-5 w-5" />
              <span className="hidden md:inline mr-2">حسابي</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-primary/80 hover:text-primary relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="hidden md:inline mr-2">السلة</span>
              <span className="absolute -top-2 -right-2 bg-burgundy-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-terracotta-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-cream-200 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <HeaderLink href="/">
                الرئيسية
              </HeaderLink>
              <HeaderLink href="#products" isAnchor>
                الكتالوج
              </HeaderLink>
              <HeaderLink href="#artisans" isAnchor>
                الحرفيات
              </HeaderLink>
              <HeaderLink href="#stories" isAnchor>
                قصتي مع الخياطة
              </HeaderLink>
              <HeaderLink href="#contact" isAnchor>
                اتصل بنا
              </HeaderLink>
            </nav>
            
            {/* Mobile Search */}
            <div className="mt-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="ابحث عن منتجاتك المفضلة..."
                  className="w-full px-4 py-2 pr-10 rounded-full border border-cream-300 focus:outline-none focus:ring-2 focus:ring-terracotta-500 bg-white"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-terracotta-500 h-4 w-4" />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
