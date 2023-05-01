import type { Meta, StoryObj } from "@storybook/react";

import MobileNavigation from "./MobileNavigation.tsx";

const meta: Meta<typeof MobileNavigation> = {
  title: "Layouts/Mobile navigation",
  component: MobileNavigation,
  tags: ["autodocs"],
};

export default meta;
export type Story = StoryObj<typeof MobileNavigation>;

export const Primary: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1", // Small mobile
    },
  },
};
