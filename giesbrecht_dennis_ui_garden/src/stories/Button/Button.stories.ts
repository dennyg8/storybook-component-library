import type { Meta, StoryObj } from '@storybook/react';

import  Button  from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    fontStyle: { control: { type: 'select', options: ['sans-serif', 'name', 'subHeading'] } },
    fontSize: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    color: { control: 'color' },
  },
  args: {
    fontStyle: 'subHeading',
    fontSize: 'small',
    color: 'white',
    backgroundColor: 'black'
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    label: 'Button',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Button',
    disabled: true,
  },
};