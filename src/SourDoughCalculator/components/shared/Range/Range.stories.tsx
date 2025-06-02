import type { Meta, StoryObj } from "@storybook/react";
import { Range } from "~/SourDoughCalculator/components/shared/Range/Range";
import { expect, within } from "@storybook/test";

const meta: Meta<typeof Range> = {
  component: Range,
};

export default meta;
type Story = StoryObj<typeof Range>;

export const Default: Story = {
  args: {
    name: "test",
    min: 0,
    max: 100,
    step: 5,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const slider = canvas.getByTestId("range");

    await expect(slider).toBeDefined();
  },
};
