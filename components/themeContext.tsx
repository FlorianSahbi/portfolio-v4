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


// export const ThemeProvider = ({ initialTheme, children }) => {
//   const [theme, setTheme] = useState(getInitialTheme);

//   const rawSetTheme = (rawTheme) => {
//     const root = window.document.documentElement;
//     const isDark = rawTheme === 'dark';

//     root.classList.remove(isDark ? 'light' : 'dark');
//     root.classList.add(rawTheme);

//     localStorage.setItem('color-theme', rawTheme);
//   };

//   if (initialTheme) {
//     rawSetTheme(initialTheme);
//   }

//   useEffect(() => {
//     rawSetTheme(theme);
//   }, [theme]);

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

function useTheme(initialState = getInitialTheme) {
  let [theme, setTheme] = useState(initialState)
  return { theme, setTheme }
}
 
export const Theme = createContainer(useTheme);
