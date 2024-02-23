import { type ReactNode } from "react";

import { AccordionContextProvider } from "./AccordionContextProvider";
import AccordionDetails from "./AccordionDetails";
import AccordionSummary from "./AccordionSummary";

export interface AccordionProps {
  /**
   * Accordion의 너비를 결정합니다.
   * @default 200
   */
  width?: number | string;
  /**
   * Accordion의 초기 열림 상태를 결정합니다.
   * @default false
   */
  open?: boolean;
  children: ReactNode;
}

/** Accordion은 세부 내용을 숨기거나 보여줄 수 있는 컴포넌트입니다. */
function Accordion({
  width = 200,
  open: initOpen = false,
  children,
}: AccordionProps) {
  return (
    <AccordionContextProvider open={initOpen} width={width}>
      {children}
    </AccordionContextProvider>
  );
}

Accordion.Details = AccordionDetails;
Accordion.Summary = AccordionSummary;

export default Accordion;
