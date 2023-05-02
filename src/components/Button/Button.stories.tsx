import type { Meta, StoryObj } from "@storybook/react";
import Button from "./";

const meta: Meta<typeof Button> = {
  title: "Components/Buttons",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
export type Story = StoryObj<typeof Button>;

export const CardButton: Story = {
  args: {
    children: "Card button",
  },
};
