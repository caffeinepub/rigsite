import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
  subtitle?: string;
}

export default function SectionHeading({ children, className, subtitle }: SectionHeadingProps) {
  return (
    <div className={cn('mb-8', className)}>
      <h2 className="text-3xl md:text-4xl font-bold mb-2">{children}</h2>
      {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
