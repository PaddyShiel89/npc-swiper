import type { Meta, StoryObj } from "@storybook/react";
import SearchControls from "./SearchControls";

const meta: Meta<typeof SearchControls> = {
  title: "NPC Search/Controls",
  component: SearchControls,
  tags: ["autodocs"],
};

export default meta;
export type Story = StoryObj<typeof SearchControls>;

export const Controls: Story = {};
