import React from "react";

import { styled } from "../stitches.config";

const ButtonStyle = styled("button", {
  backgroundColor: "transparent",
  borderRadius: "10px",
  border: "none",
  fontFamily: "$primary",
  fontWeight: "bold",
  outline: "none",
  width: "auto",
  transition: "background-color 0.05s ease-in-out",
  cursor: "pointer",

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
        height: "40px",
        width: "79px",
      },
      small: {
        height: "32px",
        width: "72px",
      },
    },
  },
});

export const Button = ({ label, color, size }) => {
  return (
    <ButtonStyle color={color} size={size}>
      {label}
    </ButtonStyle>
  );
};
