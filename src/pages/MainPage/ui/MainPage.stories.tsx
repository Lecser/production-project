import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/config/theme/ThemeContext';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import MainPage from './MainPage';

export default {
  title: 'Pages/MainPage',
  component: MainPage
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args) => <MainPage />;

export const Dark = Template.bind({});
Dark.args = {};

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];
