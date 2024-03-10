import type { Meta, StoryObj } from '@storybook/react';

import  DropDown  from './Dropdown';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/DropDown',
  component: DropDown,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    isOpen: { control: 'boolean' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    items: { control: 'array' },
    hoveredItem: { control: 'text' },
  },
  args: {
    isOpen: false,
    disabled: false,
    backgroundColor: 'B6B6B6',
    items: ['Work', 'Skills', 'Setup', 'Contact'],
    hoveredItem: null,
  },
} satisfies Meta<typeof DropDown>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
      },
    };
  
  export const Disabled: Story = {
    args: {
        disabled: true,
    },
};

export const NoHover: Story = {
  args: {
      isOpen: true,
      disabled: false,
  },
};

  export const Work: Story = {
    args: {
        isOpen: true,
        disabled: false,
        hoveredItem: 'Work',
    },
};

export const Skills: Story = {
    args: {
        isOpen: true,
        disabled: false,
        hoveredItem: 'Skills',
    },
};

export const Setup: Story = {
    args: {
        isOpen: true,
        disabled: false,
        hoveredItem: 'Setup',
    },
};

export const Contact: Story = {
    args: {
        isOpen: true,
        disabled: false,
        hoveredItem: 'Contact',
    },
};