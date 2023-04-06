import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/config/theme/ThemeContext';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import LoginForm from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({ loginForm: { username: 'user', password: '123' } })];
export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
  ThemeDecorator(Theme.LIGHT),
  StoreDecorator({ loginForm: { username: 'user', password: '123' } })
];

export const DarkWithError = Template.bind({});
DarkWithError.args = {};
DarkWithError.decorators = [
  StoreDecorator({ loginForm: { username: '', password: '', error: 'error' } })
];

export const LightWithError = Template.bind({});
LightWithError.args = {};
LightWithError.decorators = [
  ThemeDecorator(Theme.LIGHT),
  StoreDecorator({ loginForm: { username: '', password: '', error: 'error' } })
];

export const LightLoading = Template.bind({});
LightLoading.args = {};
LightLoading.decorators = [
  ThemeDecorator(Theme.LIGHT),
  StoreDecorator({ loginForm: { username: '', password: '', isLoading: true } })
];

export const DarkLoading = Template.bind({});
DarkLoading.args = {};
DarkLoading.decorators = [
  StoreDecorator({ loginForm: { username: '', password: '', isLoading: true } })
];
