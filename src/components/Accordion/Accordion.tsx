import { type ReactNode } from "react";

import { AccordionContextProvider } from "./AccordionContextProvider";
import AccordionDetails from "./AccordionDetails";
import AccordionSummary from "./AccordionSummary";

export interface AccordionProps {
  width?: number | string;
  open?: boolean;
  children: ReactNode;
}

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
