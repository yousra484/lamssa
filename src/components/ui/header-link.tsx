import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface HeaderLinkProps {
  href: string;
  children: React.ReactNode;
  isAnchor?: boolean;
  className?: string;
}

const HeaderLink = ({ href, children, isAnchor = false, className }: HeaderLinkProps) => {
  const baseClasses = "text-terracotta-800 hover:text-burgundy-600 transition-colors text-base";
  
  if (isAnchor) {
    return (
      <a 
        href={href} 
        className={cn(baseClasses, className)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link 
      to={href} 
      className={cn(baseClasses, className)}
    >
      {children}
    </Link>
  );
};

export default HeaderLink;
