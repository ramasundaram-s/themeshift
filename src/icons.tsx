import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ThemeIconProps {
  theme: string;
  size?: number;
  color?: string;
}

const iconVariants = {
  initial: { scale: 0, opacity: 0, rotate: -180 },
  animate: { scale: 1, opacity: 1, rotate: 0 },
  exit: { scale: 0, opacity: 0, rotate: 180 },
};

export const ThemeIcon: React.FC<ThemeIconProps> = ({
  theme,
  size = 24,
  color = 'currentColor',
}) => {
  const getIcon = () => {
    switch (theme) {
      case 'light':
        return (
          <motion.svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={iconVariants}
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </motion.svg>
        );

      case 'dark':
        return (
          <motion.svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={iconVariants}
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </motion.svg>
        );

      case 'sepia':
        return (
          <motion.svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={iconVariants}
          >
            <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
            <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
          </motion.svg>
        );

      case 'high-contrast':
        return (
          <motion.svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={iconVariants}
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2v20" />
            <path d="M12 12L2 12" />
          </motion.svg>
        );

      default:
        return null;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={theme}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.3 }}
      >
        {getIcon()}
      </motion.div>
    </AnimatePresence>
  );
};

export const ThemeToggleButton: React.FC<{
  currentTheme: string;
  onClick: () => void;
  size?: number;
  color?: string;
}> = ({ currentTheme, onClick, size = 24, color = 'currentColor' }) => {
  return (
    <button
      onClick={onClick}
      style={{
        background: 'none',
        border: 'none',
        padding: 8,
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      aria-label={`Toggle ${currentTheme} theme`}
    >
      <ThemeIcon theme={currentTheme} size={size} color={color} />
    </button>
  );
};
