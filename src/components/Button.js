import React from "react";

import { styled } from "../stitches.config";

const Icon = styled("span", {
  display: "inline-flex",
});

const ButtonStyle = styled("button", {
  backgroundColor: "transparent",
  borderRadius: "10px",
  border: "none",
  fontFamily: "$primary",
  fontWeight: "bold",
  outline: "none",
  width: "auto",
  transition: "all 0.05s ease-in-out",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  whiteSpace: "nowrap",
  verticalAlign: "middle",

  [`& ${Icon}`]: {},

  variants: {
    color: {
      primary: {
        backgroundColor: "$primary",
        color: "$primal_white",

        ":hover": {
          backgroundColor: "$primary_color_dark",
        },
        ":active": {
          backgroundColor: "$primal_darkgreen",
        },
      },
    },

    size: {
      normal: {
        padding: "11px 13px",
      },
      small: {
        padding: "9px 11px",
      },
    },
  },
});

export const Button = ({ children, color, size, rightIcon, leftIcon }) => {
  return (
    <ButtonStyle color={color} size={size}>
      {leftIcon && <Icon>{leftIcon}</Icon>}

      {children}

      {rightIcon && <Icon>{rightIcon}</Icon>}
    </ButtonStyle>
  );
};
