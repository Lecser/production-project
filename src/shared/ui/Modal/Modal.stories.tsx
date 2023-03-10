import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/config/theme/ThemeContext';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Modal } from './Modal';

export default {
  title: 'Shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Dark = Template.bind({});
Dark.args = {
  children: 'Text',
  isOpen: true
};

export const Light = Template.bind({});
Light.args = {
  children: 'Text',
  isOpen: true
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];
