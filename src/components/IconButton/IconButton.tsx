import { ButtonHTMLAttributes, ReactNode } from "react";

import classnames from "../../utils/classnames";

import * as styles from "./IconButton.css";

export interface IconButtonProps
  extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  /** IconButton의 className을 설정합니다. className을 통해 스타일을 확장할 수 있습니다. */
  className?: string;
  /** IconButton안에 들어갈 아이콘 컴포넌트입니다. */
  children: ReactNode;
}

/** IconButton는 아이콘만 존재하는 버튼 컴포넌트입니다. */
export default function IconButton({
  className = "",
  children,
  onClick,
}: IconButtonProps) {
  const iconButtonStyle = classnames(styles.button, className);
  return (
    <button type="button" className={iconButtonStyle} onClick={onClick}>
      {children}
    </button>
  );
}
