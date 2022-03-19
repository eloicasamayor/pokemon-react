import { Button } from "../components/Button";
import "../styles/styles.scss";
export default {
  title: "Components/Button",
  component: Button,
  argTypes: { onClick: { action: "onClick" } },
};

const Template = (args) => <Button {...args} />;

export const Enabled = Template.bind({});
Enabled.args = {
  disabled: false,
  text: "Text in the button",
  title: "Title of the button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  text: "Text in the button",
  title: "Title of the button",
};
