import { Meta, StoryObj } from "@storybook/react";

import typography from "./typography";

const meta: Meta<typeof Text> = {
  title: "Design Tokens/Typography",
  component: Text,
  argTypes: {
    typography: {
      control: {
        type: "radio",
        // radio label을 mm-semantic-typography-h1에서 h1로 변경
        labels: Object.fromEntries(
          Object.entries(typography.$semantic).map(([key, value]) => [
            value,
            key,
          ]),
        ),
      },
      options: Object.values(typography.$semantic),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Variants: Story = {
  args: {
    typography: typography.$semantic.body1Bold,
    children: "Git challenge 디자인 시스템",
  },
};

export const Overview: Story = {
  parameters: {
    controls: { exclude: ["typography", "children"] },
  },
  // render: () => {} 처럼 매개변수가 없으면, controls 필터링 기능이 동작하지 않는 문제가 있음
  // https://github.com/storybookjs/storybook/issues/23343#issuecomment-1627351756
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: (_) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      {Object.entries(typography.$semantic).map(([key, value]) => (
        <Text typography={value} key={key}>
          {key}
        </Text>
      ))}
    </div>
  ),
};

type TypographySementicKey = keyof typeof typography.$semantic;

interface TextProps<Key extends TypographySementicKey> {
  typography: (typeof typography.$semantic)[Key];
  children: string;
}

function Text<Key extends TypographySementicKey>({
  typography: className,
  children,
}: TextProps<Key>) {
  return <div className={className}>{children}</div>;
}
