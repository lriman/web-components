import { THEMES } from '../constants';

const colorSchemes = {
  [THEMES.DARK]: '(prefers-color-scheme: dark)',
  [THEMES.LIGHT]: '(prefers-color-scheme: light)',
};

export default function getTheme(defaultTheme = THEMES.LIGHT) {
  let theme = defaultTheme;

  if (!window.matchMedia) return theme;

  Object.keys(colorSchemes).forEach(schemeName => {
    const mq = window.matchMedia(colorSchemes[schemeName]);

    if (!mq || !mq.matches) return;
    const schemeNames = Object.keys(colorSchemes);
    for (let i = 0; i < schemeNames.length; i += 1) {
      if (mq.media === colorSchemes[schemeNames[i]]) {
        theme = schemeNames[i];
        break;
      }
    }
  });

  return theme;
}
