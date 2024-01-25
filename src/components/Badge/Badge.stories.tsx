import { Meta, StoryObj } from "@storybook/react";

import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Badge",
  tags: ["autodocs"],
  component: Badge,
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Variants: Story = {
  args: {
    variant: "orange",
    children: "variants",
  },
};
