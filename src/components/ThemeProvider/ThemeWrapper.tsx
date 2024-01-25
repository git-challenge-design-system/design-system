import { ReactElement } from "react";

import { ThemeContext } from "./ThemeContext";
import useTheme from "./useTheme";

interface ThemeWrapperProps {
  children: ReactElement;
}

export default function ThemeWrapper({ children }: ThemeWrapperProps) {
  const theme = useTheme();

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
