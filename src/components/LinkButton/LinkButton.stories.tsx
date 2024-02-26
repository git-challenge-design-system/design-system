import { Meta, StoryObj } from "@storybook/react";

import LinkButton from "./index";

const meta: Meta<typeof LinkButton> = {
  title: "LinkButton",
  tags: ["autodocs"],
  component: LinkButton,
};

export default meta;
type Story = StoryObj<typeof LinkButton>;

export const Variants: Story = {
  args: {
    variant: "primaryFill",
    children: "variants",
  },
};

export const FullWidth: Story = {
  args: {
    variant: "primaryFill",
    children: "full width",
    full: true,
  },
};

export const Disabled: Story = {
  args: {
    variant: "primaryFill",
    children: "disabled",
    disabled: true,
  },
};
