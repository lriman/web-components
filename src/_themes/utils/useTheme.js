import { useState, useEffect } from 'react';

import { THEMES } from '../constants';

const colorSchemes = {
  [THEMES.DARK]: '(prefers-color-scheme: dark)',
  [THEMES.LIGHT]: '(prefers-color-scheme: light)',
};

export default function useTheme(defaultTheme = THEMES.LIGHT) {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    if (!window.matchMedia) return theme;

    const listener = e => {
      if (!e || !e.matches) {
        return;
      }
      const schemeNames = Object.keys(colorSchemes);
      for (let i = 0; i < schemeNames.length; i += 1) {
        const schemeName = schemeNames[i];
        if (e.media === colorSchemes[schemeName]) {
          setTheme(schemeName);
          break;
        }
      }
    };

    let activeMatches = [];
    Object.keys(colorSchemes).forEach(schemeName => {
      const mq = window.matchMedia(colorSchemes[schemeName]);
      mq.addListener(listener);
      activeMatches.push(mq);
      listener(mq);
    });

    return () => {
      activeMatches.forEach(mq => mq.removeListener(listener));
      activeMatches = [];
    };
  }, [theme]);

  return theme;
}
