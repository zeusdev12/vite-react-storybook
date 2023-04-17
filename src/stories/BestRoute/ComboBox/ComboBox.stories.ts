import type { Meta, StoryObj } from '@storybook/react';

import { ComboBox } from './ComboBox';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'BestRoute/ComboBox',
  component: ComboBox,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ComboBox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
  args: {
    size: 'medium',
    placeholder: "Asset",
    options: ['USDC', 'USDT', 'DAI']
  }
};

export const Large: Story = {
  args: {
    size: 'large',
    placeholder: "Asset",
    options: ['USDC', 'USDT', 'DAI'],
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    placeholder: "Asset",
    options: ['USDC', 'USDT', 'DAI']
  },
};
