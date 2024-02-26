import { useRouter } from "next/router";
import { MouseEventHandler } from "react";

import Button from "../Button";
import { ButtonProps } from "../Button/Button";

export interface LinkButtonProps extends Omit<ButtonProps, "onClick"> {
  /** 클릭 시 이동할 경로입니다. */
  path: string;
}

/** LinkButton은 클릭 시 주어진 경로로 이동하는 컴포넌트입니다. path를 제외한 매개변수들은 Button 컴포넌트에 전달되는 추가 속성들입니다. */
export function LinkButton({ path, children, ...rest }: LinkButtonProps) {
  const router = useRouter();

  const handleRoute: MouseEventHandler<HTMLButtonElement> = () => {
    router.push(path);
  };

  return (
    <Button {...rest} onClick={handleRoute}>
      {children}
    </Button>
  );
}
