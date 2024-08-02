// src/components/InputField/InputField.stories.tsx

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import InputField, { InputFieldProps } from './InputField';

export default {
  title: 'Components/InputField',
  component: InputField,
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    placeholder: { control: 'text' },
    type: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<InputFieldProps> = (args) => <InputField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Name',
  value: '',
  onChange: () => {},
  placeholder: 'Enter your name',
  type: 'text',
};
