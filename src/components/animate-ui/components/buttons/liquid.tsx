'use client';

import * as React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

export interface LiquidButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children?: React.ReactNode;
  variant?: 'default' | 'destructive' | 'secondary' | 'ghost' | 'outline';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  delay?: string;
  fillHeight?: string;
  hoverScale?: number;
  tapScale?: number;
}

const variantStyles: Record<string, { bg: string; color: string; border: string; text: string; hoverText: string }> = {
  default: {
    bg: '#f59e0b',
    color: '#d97706',
    border: 'rgba(217, 119, 6, 0.4)',
    text: '#ffffff',
    hoverText: '#ffffff'
  },
  secondary: {
    bg: 'rgba(254, 243, 199, 0.6)',
    color: '#d97706',
    border: 'rgba(245, 158, 11, 0.35)',
    text: '#92400e',
    hoverText: '#ffffff'
  },
  outline: {
    bg: '#ffffff',
    color: '#18181b',
    border: '#e4e4e7',
    text: '#27272a',
    hoverText: '#ffffff'
  },
  ghost: {
    bg: 'transparent',
    color: 'rgba(245, 158, 11, 0.15)',
    border: 'transparent',
    text: '#18181b',
    hoverText: '#18181b'
  },
  destructive: {
    bg: '#ef4444',
    color: '#b91c1c',
    border: 'transparent',
    text: '#ffffff',
    hoverText: '#ffffff'
  }
};

const sizeStyles: Record<string, string> = {
  default: 'h-11 px-6 text-[0.95rem]',
  sm: 'h-9 px-4 text-[0.875rem]',
  lg: 'h-13 px-8 text-[1.05rem]',
  icon: 'size-11 p-0'
};

export function LiquidButton({
  children,
  variant = 'secondary',
  size = 'default',
  delay = '0.3s',
  fillHeight = '3px',
  hoverScale = 1.02,
  tapScale = 0.98,
  className = '',
  style,
  ...props
}: LiquidButtonProps) {
  const currentVariant = variantStyles[variant] || variantStyles.secondary;

  return (
    <motion.button
      whileTap={{ scale: tapScale }}
      whileHover={{
        scale: hoverScale,
        '--liquid-button-fill-width': '100%',
        '--liquid-button-fill-height': '100%',
        '--liquid-button-delay': delay,
        transition: {
          '--liquid-button-fill-width': { duration: 0 },
          '--liquid-button-fill-height': { duration: 0 },
          '--liquid-button-delay': { duration: 0 }
        }
      }}
      className={`relative inline-flex items-center justify-center gap-2 font-semibold rounded-2xl cursor-pointer select-none overflow-hidden transition-all duration-200 outline-none shadow-sm ${sizeStyles[size] || sizeStyles.default} ${className}`}
      style={
        {
          '--liquid-button-color': currentVariant.color,
          '--liquid-button-background-color': currentVariant.bg,
          '--liquid-button-fill-width': '-1%',
          '--liquid-button-fill-height': fillHeight,
          '--liquid-button-delay': '0s',
          minHeight: '50px',
          borderRadius: '18px',
          padding: '14px 26px',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: `1.5px solid ${currentVariant.border}`,
          color: currentVariant.text,
          background:
            'linear-gradient(var(--liquid-button-color) 0 0) no-repeat calc(200% - var(--liquid-button-fill-width, -1%)) 100% / 200% var(--liquid-button-fill-height, 0.2em)',
          backgroundColor: 'var(--liquid-button-background-color)',
          transition: `background ${delay} var(--liquid-button-delay, 0s), color ${delay} ${delay}, background-position ${delay} calc(${delay} - var(--liquid-button-delay, 0s)), transform 0.2s ease, border-color 0.2s ease`,
          ...style
        } as React.CSSProperties
      }
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}

export default LiquidButton;
