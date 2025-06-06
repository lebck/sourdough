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
}) => (
  <div className="card card-border xs:w-40 mt-4 h-40 items-center text-center">
    <h2 className="card-title mt-3">{name}</h2>
    <div className="card-body">
      <span className="text-3xl">{amount}</span>
      <br />
      {unit}
    </div>
  </div>
);
