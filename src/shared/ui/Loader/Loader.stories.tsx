import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/config/theme/ThemeContext';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Loader } from './Loader';

export default {
  title: 'Shared/Loader',
  component: Loader
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Dark = Template.bind({});
Dark.args = {};

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];
