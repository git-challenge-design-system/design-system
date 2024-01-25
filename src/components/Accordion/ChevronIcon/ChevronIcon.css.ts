import { style, styleVariants } from "@vanilla-extract/css";

import { border, flexCenter } from "../../../design-token/utils.css";

export const containerBase = style([
  flexCenter,
  border.all,
  {
    borderRadius: "50%",
  },
]);

export const containerVariants = styleVariants({
  sm: {
    width: 18,
    height: 18,
  },
  md: {
    width: 25,
    height: 25,
  },
});
