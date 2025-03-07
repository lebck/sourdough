import { FC, ReactNode } from "react";

interface IngredientCardProps {
  amount: ReactNode;
  name: string;
  unit?: string;
}

export const IngredientCard: FC<IngredientCardProps> = ({
  amount,
  name,
  unit = "g",
}) => {
  return (
    <div className="card card-border w-40 h-40 items-center text-center">
      <h2 className="card-title mt-3">{name}</h2>
      <div className="card-body ">
        <span className="text-3xl">{amount}</span>
        <br />
        {unit}
      </div>
    </div>
  );
};
