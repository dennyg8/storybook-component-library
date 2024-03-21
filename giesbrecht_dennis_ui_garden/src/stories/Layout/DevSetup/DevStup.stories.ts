import type { Meta, StoryObj } from '@storybook/react';
import DevSetup from './DevSetupDesktop';

const meta: Meta<typeof DevSetup> = {
  title: 'Layout/DevSetup',
  component: DevSetup,
};

export default meta;

export const Default: StoryObj<typeof DevSetup> = {};
