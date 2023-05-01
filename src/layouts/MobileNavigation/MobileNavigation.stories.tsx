import type { Meta, StoryObj } from "@storybook/react";
import MobileNavigation from "./MobileNavigation";
import { action } from "@storybook/addon-actions";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";

const meta: Meta<typeof MobileNavigation> = {
  title: "Layouts/Mobile navigation",
  component: MobileNavigation,
  decorators: [
    (Story) => (
      <MemoryRouterProvider url="/" onPush={action("router.push")}>
        {" "}
        <Story />
      </MemoryRouterProvider>
    ),
  ],
};

export default meta;
export type Story = StoryObj<typeof MobileNavigation>;

export const SmallScreen: Story = {
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "mobile1", // Small mobile
    },
  },
};
