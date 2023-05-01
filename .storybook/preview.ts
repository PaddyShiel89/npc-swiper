import type { Preview } from "@storybook/react";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";

import "@/styles/globals.scss";

console.log(MINIMAL_VIEWPORTS);

/** Custom viewports added preview options */
const customViewports = {
  samsungS21U: {
    name: "Samsung S21 Ultra",
    styles: {
      width: "1440px",
      height: "3200px",
    },
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
        ...customViewports,
      },
    },
  },
};

export default preview;
