import { ReactNode } from "react";

import classnames from "../../utils/classnames";
import { objectKeys } from "../../utils/types";

import { badgeVariants } from "./Badge.css";
import * as styles from "./Badge.css";

export type BadgeVariantType = keyof typeof badgeVariants;

export interface BadgeProps {
  /** Badge의 스타일을 결정합니다. */
  variant: BadgeVariantType;
  /** Badge안에 내용이 들어갑니다. */
  children: ReactNode;
}

export const badgeVariantList = objectKeys(badgeVariants);

/** Badge는 빠른 인식을 위해 항목의 상태를 강조하기 위해 사용되는 컴포넌트입니다. */
export function Badge({ variant, children }: BadgeProps) {
  const badgeStyle = classnames(
    styles.badgeBase,
    styles.badgeVariants[variant],
  );
  return <span className={badgeStyle}>{children}</span>;
}
