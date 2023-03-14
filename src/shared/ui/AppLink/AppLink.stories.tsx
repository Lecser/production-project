import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/config/theme/ThemeContext';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AppLink, AppLinkTheme } from './AppLink';

export default {
  title: 'Shared/AppLink',
  component: AppLink,
  args: { to: '/' }
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
  theme: AppLinkTheme.PRIMARY
};
export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  children: 'Text',
  theme: AppLinkTheme.PRIMARY
};
PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Text',
  theme: AppLinkTheme.SECONDARY
};

export const SecondaryLight = Template.bind({});
SecondaryLight.args = {
  children: 'Text',
  theme: AppLinkTheme.SECONDARY
};
SecondaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Subhead = Template.bind({});
Subhead.args = {
  children: 'Text',
  theme: AppLinkTheme.SUBHEAD
};

export const SubheadLight = Template.bind({});
SubheadLight.args = {
  children: 'Text',
  theme: AppLinkTheme.SUBHEAD
};
SubheadLight.decorators = [ThemeDecorator(Theme.LIGHT)];
