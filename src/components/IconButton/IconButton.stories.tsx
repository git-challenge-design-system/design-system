import type { Meta, StoryObj } from "@storybook/react";
import {
  IoCloseOutline,
  IoEllipsisHorizontal,
  IoInformation,
} from "react-icons/io5";

import IconButton from ".";

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "inline-radio",
      options: ["close", "ellipsis", "information"],
      mapping: {
        close: <IoCloseOutline />,
        ellipsis: <IoEllipsisHorizontal />,
        information: <IoInformation />,
      },
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Basic: Story = {
  args: {
    children: "close",
  },
};
