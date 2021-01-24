import React from "react";
import { MdBrightnessHigh, MdBrightness4 } from 'react-icons/md';
import { ThemeContext } from './themeContext';

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="fixed right-10 top-10 transition duration-500 ease-in-out rounded-full p-2">
      {theme === 'dark' ? (
        <MdBrightnessHigh
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="dark:text-gray-100 text-3xl cursor-pointer"
        />
      ) : (
          <MdBrightness4
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-yellow-300 text-3xl cursor-pointer"
          />
        )}
    </div>
  );
};

export default Toggle;