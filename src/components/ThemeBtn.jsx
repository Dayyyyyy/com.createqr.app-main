import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useEffect, useState } from 'react';

function ThemeBtn() {
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    theme
      ? document.body.classList.remove('dark')
      : document.body.classList.add('dark');
  }, [theme]);
  return (
    <DarkModeSwitch
      style={{ marginBottom: '2rem' }}
      checked={!theme}
      onClick={() => setTheme(!theme)}
      size={50}
      sunColor='rgb(91, 33, 182)'
      moonColor='#fff'
    />
  );
}

export default ThemeBtn;
