import { FC, PropsWithChildren } from "react";

interface LabelProps extends PropsWithChildren {
  htmlFor: string;
}

export const Label: FC<LabelProps> = ({ htmlFor, children }) => {
  return (
    <label className="label" htmlFor={htmlFor}>
      {children}
    </label>
  );
};
