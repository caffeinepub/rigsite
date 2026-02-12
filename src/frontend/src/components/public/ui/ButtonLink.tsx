import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';
import { buttonVariants } from '@/components/ui/button';

interface ButtonLinkProps extends VariantProps<typeof buttonVariants> {
  to: string;
  children: ReactNode;
  className?: string;
}

export default function ButtonLink({ to, children, variant, size, className }: ButtonLinkProps) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <Link to={to}>{children}</Link>
    </Button>
  );
}
