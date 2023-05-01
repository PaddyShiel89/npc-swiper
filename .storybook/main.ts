import * as path from "path";
import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        "@": path.resolve(__dirname, "../src/"),
        "next/router": "next-router-mock",

        // Fix for broken import in next-router-mock/MemoryRouterProvider
        "next/dist/next-server/lib/router-context":
          "next/dist/shared/lib/router-context",
      },
      fallback: {
        // Declare fallsbacks for next/router to work - no longer included by
        // default with webpack 5
        path: require.resolve("path-browserify"),
        url: require.resolve("url/"),
      },
    },
  }),
};
export default config;
