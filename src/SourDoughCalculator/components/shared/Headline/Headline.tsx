import React, { PropsWithChildren } from "react";

export const Headline: React.FC<PropsWithChildren> = ({ children }) => {
  return <h1 className="font-bold text-3xl">{children}</h1>;
};
