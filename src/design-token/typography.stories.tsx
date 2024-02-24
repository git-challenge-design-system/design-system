import { Meta, StoryObj } from "@storybook/react";

import typography from "./typography";

const meta: Meta<typeof Text> = {
  title: "Design Tokens/Typography",
  tags: ["autodocs"],
  component: Text,
  argTypes: {
    className: {
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
  excludeStories: /Text/,
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Variants: Story = {
  args: {
    className: typography.$semantic.body1Bold,
    children: "Git challenge 디자인 시스템",
  },
};

export const Overview: Story = {
  parameters: {
    controls: { exclude: ["className", "children"] },
  },
  // render: () => {} 처럼 매개변수가 없으면, controls 필터링 기능이 동작하지 않는 문제가 있음
  // https://github.com/storybookjs/storybook/issues/23343#issuecomment-1627351756
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: (_) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      {Object.entries(typography.$semantic).map(([key, value]) => (
        <Text className={value} key={key}>
          {key}
        </Text>
      ))}
    </div>
  ),
};

type TypographySementicKey = keyof typeof typography.$semantic;

export interface TextProps<Key extends TypographySementicKey> {
  /** className에 typography 토큰을 설정해 적용할 수 있습니다. */
  className: (typeof typography.$semantic)[Key];
  children: string;
}

export function Text<Key extends TypographySementicKey>({
  className,
  children,
}: TextProps<Key>) {
  return <div className={className}>{children}</div>;
}
