import type { ReactNode } from 'react';
import { useRegisterHover } from './RegisterHoverContext';

type RegisterButtonProps = {
  children?: ReactNode;
  className?: string;
  href?: string;
  size?: 'sm' | 'md' | 'lg';
};

const sizeClasses: Record<string, string> = {
  sm: 'px-5 py-2 text-base',
  md: 'px-7 py-3 text-lg',
  lg: 'px-9 py-4 text-xl md:text-2xl',
};

export default function RegisterButton({
  children = 'REGISTER NOW',
  className = '',
  href = '#register',
  size = 'md',
}: RegisterButtonProps) {
  const { setRegisterHovered } = useRegisterHover();
  return (
    <a
      href={href}
      onMouseEnter={() => setRegisterHovered(true)}
      onMouseLeave={() => setRegisterHovered(false)}
      className={`group relative inline-flex items-center gap-2 border-[3px] border-ink bg-e-purple font-display uppercase tracking-tight text-ink shadow-hard transition-all duration-150 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-hard-sm active:translate-x-[6px] active:translate-y-[6px] active:shadow-none ${sizeClasses[size]} ${className}`}
    >
      <span>{children}</span>
      <span className="transition-transform duration-150 group-hover:translate-x-1">→</span>
    </a>
  );
}
