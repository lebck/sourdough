import React, { PropsWithChildren } from "react";

export const Headline: React.FC<PropsWithChildren> = ({ children }) => (
  <h1 className="text-center text-3xl font-bold">{children}</h1>
);
