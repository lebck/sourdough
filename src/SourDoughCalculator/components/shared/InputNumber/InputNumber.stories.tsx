import type { Meta, StoryObj } from "@storybook/react";
import { InputNumber } from "~/SourDoughCalculator/components/shared/InputNumber/InputNumber.tsx";

const meta: Meta<typeof InputNumber> = {
  component: InputNumber,
};

export default meta;
type Story = StoryObj<typeof InputNumber>;

export const Default: Story = {
  args: {
    name: "test",
  },
};
