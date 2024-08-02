// src/components/Button.stories.tsx

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    docs: {
      description: {
        component: 'Button component used for user interaction',
      },
    },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args: ButtonProps) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};
Primary.parameters = {
  docs: {
    storyDescription: 'Primary button used for main actions',
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: 'Button',
};
Secondary.parameters = {
  docs: {
    storyDescription: 'Secondary button used for less prominent actions',
  },
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};
Large.parameters = {
  docs: {
    storyDescription: 'Large button',
  },
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
Small.parameters = {
  docs: {
    storyDescription: 'Small button',
  },
};
