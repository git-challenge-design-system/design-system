import { style, styleVariants } from "@vanilla-extract/css";

import color from "../../design-token/color";
import typography from "../../design-token/typography";

export const badgeBase = style([
  typography.$semantic.caption2Regular,
  {
    height: 22,
    padding: "3px 7px",
    borderRadius: 5,
  },
]);

export const badgeVariants = styleVariants({
  orange: {
    color: color.$semantic.badgeOrange,
    backgroundColor: color.$semantic.badgeOrangeBg,
  },
  yellow: {
    color: color.$semantic.badgeYellow,
    backgroundColor: color.$semantic.badgeYellowBg,
  },
  green: {
    color: color.$semantic.badgeGreen,
    backgroundColor: color.$semantic.badgeGreenBg,
  },
  teal: {
    color: color.$semantic.badgeTeal,
    backgroundColor: color.$semantic.badgeTealBg,
  },
  blue: {
    color: color.$semantic.badgeBlue,
    backgroundColor: color.$semantic.badgeBlueBg,
  },
  purple: {
    color: color.$semantic.badgePurple,
    backgroundColor: color.$semantic.badgePurpleBg,
  },
});
