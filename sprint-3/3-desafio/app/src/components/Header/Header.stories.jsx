import Header from '.';

export default {
  title: 'Header',
  component: Header,
};

const TemplateHeader = (args) => <Header {...args} />;

export const Index = TemplateHeader.bind({});