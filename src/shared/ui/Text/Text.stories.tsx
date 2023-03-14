import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/config/theme/ThemeContext';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Dark = Template.bind({});
Dark.args = {
  title: 'Title Title Title Title ',
  text: 'Description Description Description Description '
};

export const Light = Template.bind({});
Light.args = {
  title: 'Title Title Title Title ',
  text: 'Description Description Description Description '
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Error = Template.bind({});
Error.args = {
  title: 'Title Title Title Title ',
  text: 'Description Description Description Description ',
  theme: TextTheme.ERROR
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Title Title Title Title '
};
export const OnlyTitleLight = Template.bind({});
OnlyTitleLight.args = {
  title: 'Title Title Title Title '
};
OnlyTitleLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'Description Description Description Description '
};
export const OnlyTextLight = Template.bind({});
OnlyTextLight.args = {
  text: 'Description Description Description Description '
};
OnlyTextLight.decorators = [ThemeDecorator(Theme.LIGHT)];
