import { renderHook, act } from '@testing-library/react';
import { useThemeShift } from '../useThemeShift';

describe('useThemeShift', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    // Reset document styles
    document.documentElement.style.cssText = '';
  });

  it('should initialize with default theme', () => {
    const { result } = renderHook(() => useThemeShift());
    expect(result.current.currentTheme).toBe('light');
  });

  it('should change theme when setTheme is called', () => {
    const { result } = renderHook(() => useThemeShift());
    
    act(() => {
      result.current.setTheme('dark');
    });

    expect(result.current.currentTheme).toBe('dark');
  });

  it('should persist theme in localStorage', () => {
    const { result } = renderHook(() => useThemeShift());
    
    act(() => {
      result.current.setTheme('dark');
    });

    expect(localStorage.getItem('themeshift-current-theme')).toBe('dark');
  });

  it('should add custom theme', () => {
    const { result } = renderHook(() => useThemeShift());
    const customTheme = {
      id: 'custom',
      name: 'Custom',
      colors: {
        background: '#000000',
        text: '#ffffff',
        primary: '#ff0000',
        secondary: '#00ff00',
        accent: '#0000ff',
      },
      variables: {
        '--theme-bg': '#000000',
        '--theme-text': '#ffffff',
        '--theme-primary': '#ff0000',
        '--theme-secondary': '#00ff00',
        '--theme-accent': '#0000ff',
      },
    };

    act(() => {
      result.current.addCustomTheme(customTheme);
    });

    expect(result.current.availableThemes).toHaveProperty('custom');
  });
});
