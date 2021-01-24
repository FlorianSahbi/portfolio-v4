import React from "react";
import { Theme } from "./themeContext";
import { MdBrightnessHigh, MdBrightness4 } from 'react-icons/md';

const Toggle = () => {
  const { theme, setTheme } = Theme.useContainer();
  return (
    <div className="fixed z-50 right-10 top-10 transition duration-500 ease-in-out rounded-full p-2">
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