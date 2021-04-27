import React from "react";

import { Button } from "../src/components/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {},
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
  color: "primary",
  size: "normal",
  rightIcon: (
    // arrow-right
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
        fill="rgba(248,248,248,0.6)"
      />
    </svg>
  ),
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Button",
  color: "primary",
  size: "small",
  leftIcon: (
    // arrow-left
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"
        fill="rgba(248,248,248,0.6)"
      />
    </svg>
  ),
};
