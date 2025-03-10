import type { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import type { BaseParams } from "~/SourDoughCalculator/components/Calculator/types/SourDough.ts";
import { InputNumber } from "~/SourDoughCalculator/components/shared/InputNumber/InputNumber.tsx";

const meta: Meta<typeof InputNumber> = {
  component: InputNumber,
  decorators: [
    (Story) => {
      const methods = useForm<BaseParams>({});
      return (
        <FormProvider {...methods}>
          <Story />
        </FormProvider>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof InputNumber>;

export const Default: Story = {
  args: {
    name: "test",
  },
};
