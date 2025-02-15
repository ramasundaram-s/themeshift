import { useState, useEffect, useCallback } from 'react';
import { Theme, defaultThemes, getThemeVariables } from './themes';

const STORAGE_KEY = 'themeshift-current-theme';
const CUSTOM_THEMES_KEY = 'themeshift-custom-themes';

export interface UseThemeShiftOptions {
  defaultTheme?: string;
  transitionDuration?: number;
  storage?: Storage;
}

export interface CustomTheme extends Theme {
  id: string;
}

export function useThemeShift(options: UseThemeShiftOptions = {}) {
  const {
    defaultTheme = 'light',
    transitionDuration = 300,
    storage = typeof window !== 'undefined' ? window.localStorage : null,
  } = options;

  const [currentTheme, setCurrentTheme] = useState<string>(defaultTheme);
  const [customThemes, setCustomThemes] = useState<Record<string, CustomTheme>>({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Load saved theme and custom themes from storage
  useEffect(() => {
    if (storage) {
      const savedTheme = storage.getItem(STORAGE_KEY);
      if (savedTheme) {
        setCurrentTheme(savedTheme);
      }

      const savedCustomThemes = storage.getItem(CUSTOM_THEMES_KEY);
      if (savedCustomThemes) {
        setCustomThemes(JSON.parse(savedCustomThemes));
      }
    }
    return undefined;
  }, [storage]);

  // Apply theme to document
  useEffect(() => {
    const theme = customThemes[currentTheme] || defaultThemes[currentTheme];
    if (theme) {
      const root = document.documentElement;
      root.style.cssText = getThemeVariables(theme);
      
      if (transitionDuration > 0) {
        setIsTransitioning(true);
        root.style.transition = `background ${transitionDuration}ms, color ${transitionDuration}ms`;
        
        const timer = setTimeout(() => {
          setIsTransitioning(false);
          root.style.transition = '';
        }, transitionDuration);
        
        return () => clearTimeout(timer);
      }
    }
    return undefined;
  }, [currentTheme, customThemes, transitionDuration]);

  const setTheme = useCallback((themeName: string) => {
    if (storage) {
      storage.setItem(STORAGE_KEY, themeName);
    }
    setCurrentTheme(themeName);
  }, [storage]);

  const addCustomTheme = useCallback((theme: CustomTheme) => {
    setCustomThemes(prev => {
      const updated = { ...prev, [theme.id]: theme };
      if (storage) {
        storage.setItem(CUSTOM_THEMES_KEY, JSON.stringify(updated));
      }
      return updated;
    });
  }, [storage]);

  const removeCustomTheme = useCallback((themeId: string) => {
    setCustomThemes(prev => {
      const updated = { ...prev };
      delete updated[themeId];
      if (storage) {
        storage.setItem(CUSTOM_THEMES_KEY, JSON.stringify(updated));
      }
      return updated;
    });
  }, [storage]);

  return {
    currentTheme,
    setTheme,
    isTransitioning,
    availableThemes: { ...defaultThemes, ...customThemes },
    customThemes,
    addCustomTheme,
    removeCustomTheme,
  };
}
