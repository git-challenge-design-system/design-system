import type { Preview } from "@storybook/react";

import { withThemeByDataAttribute } from "@storybook/addon-themes";

import "../src/styles/global.css";
import "../src/styles/reset.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // https://storybook.js.org/docs/react/essentials/toolbars-and-globals#global-types-and-the-toolbar-annotation
  globalTypes: {
    theme: {
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: ["light", "dark"],
        dynamicTitle: true,
      },
    },
  },
};

// https://github.com/storybookjs/storybook/blob/next/code/addons/themes/docs/api.md#withthemebydataattribute
export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
    attributeName: "data-theme",
  }),
];

export default preview;
