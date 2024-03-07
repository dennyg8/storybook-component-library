import type { Meta, StoryObj } from '@storybook/react';

import Text from './Text';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Text',
  component: Text,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    color: { control: 'color' },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    label: 'Headlines',
    fontStyle: 'sans-serif',
    fontSize: 'large',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Headlines',
    disabled: true,
    fontStyle: 'sans-serif',
    fontSize: 'large',
  },
};

export const Name: Story = {
  args: {
    label: 'Name',
    fontStyle: 'name',
    fontSize: 'large',
  },
};

export const SubHeadline: Story = {
  args: {
    label: 'Sub Headline',
    fontStyle: 'subHeading',
    fontSize: 'medium',
  },
};

export const Body: Story = {
  args: {
    label: 'Body',
    fontStyle: 'sans-serif',
    fontSize: 'small',
  },
};