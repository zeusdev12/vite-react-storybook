import type { Meta, StoryObj } from '@storybook/react';

import { SwapForm } from './SwapForm';

const meta = {
  title: 'BestRoute/SwapForm',
  component: SwapForm,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SwapForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {};