import { Meta, StoryObj } from "@storybook/react";

import { CodeBlock } from "./CodeBlock";

const meta: Meta<typeof CodeBlock> = {
  title: "CodeBlock",
  tags: ["autodocs"],
  component: CodeBlock,
};

export default meta;
type Story = StoryObj<typeof CodeBlock>;

export const Variants: Story = {
  args: {
    code: ["`git` add README.md"],
  },
};
