import type { Meta, StoryObj } from "@storybook/react";
import MobileNavigation from "./MobileNavigation";

const meta: Meta<typeof MobileNavigation> = {
  title: "Layouts/Mobile navigation",
  component: MobileNavigation,
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
