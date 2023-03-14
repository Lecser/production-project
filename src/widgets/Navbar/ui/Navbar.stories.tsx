import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/config/theme/ThemeContext';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Navbar } from './Navbar';

export default {
  title: 'widgets/Navbar',
  component: Navbar
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const NavbarDark = Template.bind({});
NavbarDark.args = {};
NavbarDark.decorators = [StoreDecorator({ user: { authData: undefined } })];
export const NavbarLight = Template.bind({});
NavbarLight.args = {};
NavbarLight.decorators = [
  ThemeDecorator(Theme.LIGHT),
  StoreDecorator({ user: { authData: undefined } })
];

export const NavbarAuthDark = Template.bind({});
NavbarAuthDark.args = {};
NavbarAuthDark.decorators = [
  StoreDecorator({ user: { authData: { username: 'user', id: '123' } } })
];
export const NavbarAuthLight = Template.bind({});
NavbarAuthLight.args = {};
NavbarAuthLight.decorators = [
  ThemeDecorator(Theme.LIGHT),
  StoreDecorator({ user: { authData: { username: 'user', id: '123' } } })
];
