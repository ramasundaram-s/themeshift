import { useThemeShift, ThemeToggleButton } from 'themeshift';
import { CodeBracketIcon, SwatchIcon, SparklesIcon } from '@heroicons/react/24/outline';

function App() {
  const { currentTheme, setTheme, availableThemes, addCustomTheme } = useThemeShift({
    defaultTheme: 'light',
    transitionDuration: 300,
  });

  const addNeonTheme = () => {
    addCustomTheme({
      id: 'neon',
      name: 'Neon',
      colors: {
        background: '#0a0a0a',
        text: '#ffffff',
        primary: '#ff00ff',
        secondary: '#00ffff',
        accent: '#ffff00',
      },
      variables: {
        '--theme-bg': '#0a0a0a',
        '--theme-text': '#ffffff',
        '--theme-primary': '#ff00ff',
        '--theme-secondary': '#00ffff',
        '--theme-accent': '#ffff00',
      },
    });
    setTheme('neon');
  };

  return (
    <div className="app">
      <header>
        <div className="theme-controls">
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
          <span className="current-theme">{currentTheme}</span>
        </div>
      </header>

      <main>
        <section className="hero">
          <h1>ThemeShift</h1>
          <p className="tagline">
            A lightweight, customizable theme toggler for React applications
          </p>
          <div className="cta-buttons">
            <a
              href="https://github.com/yourusername/themeshift"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              <CodeBracketIcon className="icon" />
              View on GitHub
            </a>
            <a
              href="https://www.npmjs.com/package/themeshift"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              <SwatchIcon className="icon" />
              View on NPM
            </a>
          </div>
        </section>

        <section className="features">
          <div className="feature-card">
            <h3>Multiple Themes</h3>
            <div className="theme-buttons">
              {Object.entries(availableThemes).map(([id, theme]) => (
                <button
                  key={id}
                  onClick={() => setTheme(id)}
                  className={`theme-button ${currentTheme === id ? 'active' : ''}`}
                >
                  {theme.name}
                </button>
              ))}
            </div>
          </div>

          <div className="feature-card">
            <h3>Custom Themes</h3>
            <p>Add your own custom themes with ease</p>
            <button onClick={addNeonTheme} className="neon-button">
              <SparklesIcon className="icon" />
              Try Neon Theme
            </button>
          </div>

          <div className="feature-card">
            <h3>Easy Integration</h3>
            <div className="code-block">
              <pre>
                <code>{`npm install themeshift

// In your React app
import { useThemeShift } from 'themeshift';

function App() {
  const { currentTheme, setTheme } = useThemeShift();
  return (
    <button onClick={() => setTheme('dark')}>
      Toggle Theme
    </button>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>Made with ❤️ using React and Framer Motion</p>
      </footer>
    </div>
  );
}

export default App;
