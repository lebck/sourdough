import React, { PropsWithChildren } from "react";

export const Headline: React.FC<PropsWithChildren> = ({ children }) => {
  return <h1 className="text-3xl font-bold">{children}</h1>;
};
