import type { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import InputWithRange from "~/SourDoughCalculator/components/shared/InputWithRange/InputWithRange.tsx";
import { expect, waitFor } from "@storybook/test";
import { Range } from "~/SourDoughCalculator/components/shared/Range/Range.tsx";
import { InputNumberTestID } from "~/SourDoughCalculator/components/shared/InputNumber/InputNumber.tsx";

const meta: Meta<typeof InputWithRange> = {
  component: InputWithRange,
  decorators: [
    (Story) => {
      const methods = useForm<{ test: number }>({ defaultValues: { test: 0 } });

      return (
        <FormProvider {...methods}>
          <Story />
        </FormProvider>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof InputWithRange>;

export const Default: Story = {
  args: {
    name: "test",
    label: "Amount of whatever",
    rangeOptions: {
      min: 0,
      max: 100,
      step: 5,
    },
  },
  play: async ({ canvas, step }) => {
    // step("Click on the range", async () => {
    //   canvas.getByTestId(Range.testIDs.range).click();
    // });
    step("Click on the range item", async () => {
      canvas.getByTestId(Range.testIDs.rangeItem(20)).click();

      const inputNumber =
        canvas.getByTestId<HTMLInputElement>(InputNumberTestID);
      await waitFor(() => expect(inputNumber.value).toBe("20"));
    });
  },
};
