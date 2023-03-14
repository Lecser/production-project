import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/config/theme/ThemeContext';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Sidebar } from './Sidebar';

export default {
  title: 'widgets/Sidebar',
  component: Sidebar
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Dark = Template.bind({});
Dark.args = {};

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];
