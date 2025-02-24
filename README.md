# ThemeShift 🎨

A lightweight, customizable theme toggler for React applications with smooth transitions and animated icons.

## Demo
[![ThemeShift Demo](https://img.youtube.com/vi/NWoMgf4FKo4/hqdefault.jpg)](https://www.youtube.com/shorts/NWoMgf4FKo4)

## Features ✨

- 🌓 Default themes: Light, Dark, Sepia, and High Contrast
- 🎨 Support for custom themes with local storage persistence
- ⚡ Smooth theme transitions with configurable duration
- 🎭 Animated theme toggle icons using Framer Motion
- ⚛️ React Hook (useThemeShift)
- 📦 Tree-shakable and optimized for performance
- 💪 Full TypeScript support

## Installation 📦

```bash
npm install themeshift
# or
yarn add themeshift
```

## Usage ⚛️

```tsx
import { useThemeShift, ThemeToggleButton } from 'themeshift';

function App() {
  const { currentTheme, setTheme, availableThemes } = useThemeShift({
    defaultTheme: 'light',
    transitionDuration: 300,
  });

  const cycleTheme = () => {
    const themes = Object.keys(availableThemes);
    const currentIndex = themes.indexOf(currentTheme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(nextTheme);
  };

  return (
    <div>
      <ThemeToggleButton
        currentTheme={currentTheme}
        onClick={cycleTheme}
        size={24}
      />
    </div>
  );
}
```

## Custom Themes 🎨

```typescript
import { useThemeShift } from 'themeshift';

const customTheme = {
  id: 'my-theme',
  name: 'My Theme',
  colors: {
    background: '#f0f0f0',
    text: '#333333',
    primary: '#007acc',
    secondary: '#6c757d',
    accent: '#ff4081',
  },
  variables: {
    '--theme-bg': '#f0f0f0',
    '--theme-text': '#333333',
    '--theme-primary': '#007acc',
    '--theme-secondary': '#6c757d',
    '--theme-accent': '#ff4081',
  },
};

function App() {
  const { addCustomTheme } = useThemeShift();
  
  useEffect(() => {
    addCustomTheme(customTheme);
  }, []);

  // ... rest of your component
}
```

## API Reference 📚

### useThemeShift Hook

```typescript
const {
  currentTheme,          // Current active theme
  setTheme,             // Function to set the active theme
  isTransitioning,      // Boolean indicating if theme transition is active
  availableThemes,      // Object containing all available themes
  customThemes,         // Object containing user-defined themes
  addCustomTheme,       // Function to add a custom theme
  removeCustomTheme,    // Function to remove a custom theme
} = useThemeShift({
  defaultTheme?: string,           // Initial theme (default: 'light')
  transitionDuration?: number,     // Transition duration in ms (default: 300)
  storage?: Storage,               // Storage implementation (default: localStorage)
});
```

## Running the Example 🚀

To run the example React application:

```bash
cd examples/react-demo
npm install
npm run dev
```

## License 📄

MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing 🤝

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/themeshift/issues).

## Support 💖

If you found this project helpful, please consider giving it a ⭐️ on GitHub!
