import { useThemeShift, ThemeToggleButton } from 'themeshift';
import './App.css';

function App() {
  const {
    currentTheme,
    setTheme,
    availableThemes,
    addCustomTheme,
    isTransitioning,
  } = useThemeShift({
    defaultTheme: 'light',
    transitionDuration: 300,
  });

  const handleAddCustomTheme = () => {
    addCustomTheme({
      id: 'custom-theme',
      name: 'Custom Theme',
      colors: {
        background: '#2d1b69',
        text: '#ffffff',
        primary: '#ff6b6b',
        secondary: '#4ecdc4',
        accent: '#ffe66d',
      },
      variables: {
        '--theme-bg': '#2d1b69',
        '--theme-text': '#ffffff',
        '--theme-primary': '#ff6b6b',
        '--theme-secondary': '#4ecdc4',
        '--theme-accent': '#ffe66d',
      },
    });
  };

  return (
    <div className={`app ${isTransitioning ? 'transitioning' : ''}`}>
      <h1>ThemeShift Demo</h1>
      
      <div className="theme-controls">
        <div className="theme-toggle">
          <ThemeToggleButton
            currentTheme={currentTheme}
            onClick={() => {
              const themes = Object.keys(availableThemes);
              const currentIndex = themes.indexOf(currentTheme);
              const nextTheme = themes[(currentIndex + 1) % themes.length];
              setTheme(nextTheme);
            }}
            size={32}
          />
          <span>Current Theme: {currentTheme}</span>
        </div>

        <div className="theme-buttons">
          {Object.keys(availableThemes).map((themeName) => (
            <button
              key={themeName}
              onClick={() => setTheme(themeName)}
              className={`theme-button ${currentTheme === themeName ? 'active' : ''}`}
            >
              {themeName}
            </button>
          ))}
        </div>

        <button onClick={handleAddCustomTheme} className="add-custom-theme">
          Add Custom Theme
        </button>
      </div>

      <div className="demo-content">
        <div className="card">
          <h2>Sample Card</h2>
          <p>
            This is a sample card to demonstrate the theme changes. The colors and
            transitions are managed by ThemeShift.
          </p>
          <button className="primary-button">Primary Button</button>
          <button className="secondary-button">Secondary Button</button>
        </div>
      </div>
    </div>
  );
}

export default App;
