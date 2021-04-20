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
  label: "Button",
};
