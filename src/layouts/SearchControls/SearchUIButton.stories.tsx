import type { Meta, StoryObj } from "@storybook/react";
import { SearchUIButton } from "./SearchControls";

const meta: Meta<typeof SearchUIButton> = {
  title: "NPC Search/UI button",
  component: SearchUIButton,
  tags: ["autodocs"],
};

export default meta;
export type Story = StoryObj<typeof SearchUIButton>;

export const LikeButton: Story = {
  args: {
    variant: "like",
  },
};
