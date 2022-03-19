import { Header } from "../components/Header";
import "../styles/styles.scss";
export default {
  title: "Components/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};
