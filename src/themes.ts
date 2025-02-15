export interface ThemeColors {
  background: string;
  text: string;
  primary: string;
  secondary: string;
  accent: string;
}

export interface Theme {
  name: string;
  colors: ThemeColors;
  variables: Record<string, string>;
}

export const lightTheme: Theme = {
  name: 'light',
  colors: {
    background: '#ffffff',
    text: '#1a1a1a',
    primary: '#3b82f6',
    secondary: '#64748b',
    accent: '#f59e0b',
  },
  variables: {
    '--theme-bg': '#ffffff',
    '--theme-text': '#1a1a1a',
    '--theme-primary': '#3b82f6',
    '--theme-secondary': '#64748b',
    '--theme-accent': '#f59e0b',
  },
};

export const darkTheme: Theme = {
  name: 'dark',
  colors: {
    background: '#1a1a1a',
    text: '#ffffff',
    primary: '#60a5fa',
    secondary: '#94a3b8',
    accent: '#fbbf24',
  },
  variables: {
    '--theme-bg': '#1a1a1a',
    '--theme-text': '#ffffff',
    '--theme-primary': '#60a5fa',
    '--theme-secondary': '#94a3b8',
    '--theme-accent': '#fbbf24',
  },
};

export const sepiaTheme: Theme = {
  name: 'sepia',
  colors: {
    background: '#f5e6d3',
    text: '#433422',
    primary: '#8b4513',
    secondary: '#6b4423',
    accent: '#d2691e',
  },
  variables: {
    '--theme-bg': '#f5e6d3',
    '--theme-text': '#433422',
    '--theme-primary': '#8b4513',
    '--theme-secondary': '#6b4423',
    '--theme-accent': '#d2691e',
  },
};

export const highContrastTheme: Theme = {
  name: 'high-contrast',
  colors: {
    background: '#000000',
    text: '#ffffff',
    primary: '#ffff00',
    secondary: '#00ff00',
    accent: '#ff00ff',
  },
  variables: {
    '--theme-bg': '#000000',
    '--theme-text': '#ffffff',
    '--theme-primary': '#ffff00',
    '--theme-secondary': '#00ff00',
    '--theme-accent': '#ff00ff',
  },
};

export const defaultThemes: Record<string, Theme> = {
  light: lightTheme,
  dark: darkTheme,
  sepia: sepiaTheme,
  'high-contrast': highContrastTheme,
};

export const getThemeVariables = (theme: Theme): string => {
  return Object.entries(theme.variables)
    .map(([key, value]) => `${key}: ${value};`)
    .join('\n');
};
