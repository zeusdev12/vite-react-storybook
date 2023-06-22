import type { Meta, StoryObj } from '@storybook/react';

import { TextArea } from './TextArea';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'BestRoute/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {};
