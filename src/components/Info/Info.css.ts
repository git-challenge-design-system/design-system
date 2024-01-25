import { style } from "@vanilla-extract/css";

import color from "../../design-token/color";
import typography from "../../design-token/typography";
import { flexAlignCenter } from "../../design-token/utils.css";

export const container = style([
  flexAlignCenter,
  typography.$semantic.caption1Regular,
  {
    color: color.$scale.grey600,
    gap: 5,
  },
]);
