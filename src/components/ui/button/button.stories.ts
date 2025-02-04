import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    disabled: false,
    variant: 'secondary',
  },
}

export const PrimaryLink: Story = {
  args: {
    as: 'a',
    children: 'Link that looks like a button',
    disabled: false,
    href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    variant: 'primary',
  },
}

export const SecondaryLink: Story = {
  args: {
    as: 'a',
    children: 'Link that looks like a button',
    disabled: false,
    href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    variant: 'secondary',
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Full Width Primary Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}
