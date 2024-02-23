import { Meta, StoryObj } from "@storybook/react";

import Accordion, { type AccordionProps } from "./Accordion";
import { type AccordionSummaryProps } from "./AccordionSummary";

type AccordionCompositionProps = Pick<AccordionProps, "width" | "open"> &
  Pick<AccordionSummaryProps, "color" | "size">;

const meta: Meta = {
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    children: {
      table: { disable: true },
    },
    color: {
      control: "inline-radio",
      options: ["black", "grey"],
      description: "Accordion.Summary의 글씨 색상을 결정합니다.",
      table: {
        defaultValue: { summary: "black" },
        category: "Accordion.Summary",
      },
    },
    size: {
      control: "inline-radio",
      options: ["sm", "md"],
      description: "Accordion.Summary의 크기를 결정합니다.",
      table: {
        defaultValue: { summary: "md" },
        category: "Accordion.Summary",
      },
    },
  },
};

export default meta;
type Story = StoryObj<AccordionCompositionProps>;

export const Variants: Story = {
  args: {
    width: "200px",
    open: false,
    color: "black",
    size: "md",
  },
  render: ({ width, open, color, size }) => (
    <Accordion width={width} open={open}>
      <Accordion.Details>
        <Accordion.Summary color={color} size={size}>
          Summary
        </Accordion.Summary>
        Details
      </Accordion.Details>
    </Accordion>
  ),
};
