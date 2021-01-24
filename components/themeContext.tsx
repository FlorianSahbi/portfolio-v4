import { useState, useEffect } from "react";
import { createContainer } from "unstated-next"

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {

    const storedPrefs = window.localStorage.getItem('color-theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return 'dark';
    }
  }

  return 'light';
};

function useTheme(initialState = getInitialTheme) {
  let [theme, setTheme] = useState(initialState)

  const rawSetTheme = (rawTheme) => {
    const root = window.document.documentElement;
    const isDark = rawTheme === 'dark';

    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(rawTheme);

    localStorage.setItem('color-theme', rawTheme);
  };

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return { theme, setTheme }
}

export const Theme = createContainer(useTheme);
