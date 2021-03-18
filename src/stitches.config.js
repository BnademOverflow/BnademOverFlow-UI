import {createStyled} from "@stitches/react";

export const {styled, css} = createStyled({
    prefix: '',
    tokens: {
        colors: {
            $primary: "#34CC78",
            $secondary: "#9C9C9C",
            $background: "#F8F8F8",
            $primal_purple: "#AE8FEF",
            $primal_blue: "#198EEE",
            $primal_green: "#71BE60",
            $primal_pink: "#EA5E79",
            $primal_amber: "#E65100",
            $primal_teal: "#26A69A",
            $primal_marine: "#1976D2",
            $primal_orange: "#1976D2",
            $primary_text: "#5E5A5A",
            $invalid_red: "#F64264",
            $primal_grey: "#D9D9D9",
            $primal_darkgreen: "#27AE60",
            $translucent_white: "rgba(248, 248, 248, 0.6)",
            $primal_white: "#FFFFFF"
        },
        fonts:
        {
            $primary: "MPLUSRounded1c",
        }
    },
    breakpoints: {},
    utils: {},
});