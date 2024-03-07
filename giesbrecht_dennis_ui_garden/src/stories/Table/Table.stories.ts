import { Meta, StoryObj } from '@storybook/react';
import Table from './Table';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Example/Table',
    component: Table,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
      layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } satisfies Meta<typeof Table>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        disabled: false,
        backgroundColor: '#FFFFFF',
        headerContent: ['', 'Skills'],
        rowData: [
        ['JavaScript', '8'],
        ['Python', '8'],
        ['PHP', '7'],
        ],
        footerContent: ['Average', '7.7'],
    },
};

export const Disabled: Story = {
  args: {
      disabled: true,
      backgroundColor: '#FFFFFF',
      headerContent: ['', 'Skills'],
      rowData: [
      ['JavaScript', '8'],
      ['Python', '8'],
      ['PHP', '7'],
      ],
      footerContent: ['Average', '7.7'],
    },
};
