import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/config/theme/ThemeContext';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
  title: 'Shared/Button',
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button'
};

export const Filled = Template.bind({});
Filled.args = {
  children: 'Button',
  theme: ButtonTheme.FILLED
};

export const FilledDisabled = Template.bind({});
FilledDisabled.args = {
  children: 'Button',
  theme: ButtonTheme.FILLED,
  disabled: true
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Button',
  theme: ButtonTheme.CLEAR
};

export const Square = Template.bind({});
Square.args = {
  children: '>',
  theme: ButtonTheme.OUTLINE,
  square: true
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
  children: '>',
  theme: ButtonTheme.OUTLINE,
  square: true,
  size: ButtonSize.L
};
export const SquareSizeXl = Template.bind({});
SquareSizeXl.args = {
  children: '>',
  theme: ButtonTheme.OUTLINE,
  square: true,
  size: ButtonSize.XL
};

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND,
  square: true,
  size: ButtonSize.XL
};

export const BackgroundContentTheme = Template.bind({});
BackgroundContentTheme.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_CONTENT,
  square: true,
  size: ButtonSize.XL
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Button',
  theme: ButtonTheme.OUTLINE
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  children: 'Button',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L
};

export const OutlineSizeXl = Template.bind({});
OutlineSizeXl.args = {
  children: 'Button',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL
};

export const OutlineLight = Template.bind({});
OutlineLight.args = {
  children: 'Button',
  theme: ButtonTheme.OUTLINE
};
OutlineLight.decorators = [ThemeDecorator(Theme.LIGHT)];
