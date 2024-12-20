import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

// export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>; // type instead of interface, since we're not adding custom props

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, children, disabled, type = 'button', ...props }, ref) => {
  return (
    <button
      className={cn('w-auto rounded-full bg-black border-transparent px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 font-semibold hover:opacity-75 transition', className)}
      ref={ref}
      {...props}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
