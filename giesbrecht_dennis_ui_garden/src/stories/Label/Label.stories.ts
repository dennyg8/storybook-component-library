import type { Meta, StoryObj } from '@storybook/react';

import  Label  from './Label';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Label',
  component: Label,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    fontStyle: { control: { type: 'select', options: ['sans-serif', 'name', 'subHeading'] } },
    fontSize: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    color: { control: 'color' },
  },
  args: {
    fontStyle: 'name',
    fontSize: 'small',
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    label: 'First name:',
  },
};

export const Disabled: Story = {
  args: {
    label: 'First name:',
    disabled: true,
  },
};