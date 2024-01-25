import { globalStyle, style } from "@vanilla-extract/css";

import color from "../../design-token/color";
import { borderRadius } from "../../design-token/utils.css";

export const container = style([
  borderRadius,
  {
    backgroundColor: color.$semantic.bgAlt,
    width: "100%",
    padding: "23px 25px",
    marginBottom: 19,
    whiteSpace: "break-spaces",
    color: color.$scale.grey700,
  },
]);

globalStyle(`${container} code`, {
  color: color.$scale.coral500,
});
