import { Footer } from "../components/Footer";
import "../styles/styles.scss";
export default {
  title: "Components/Footer",
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {};
