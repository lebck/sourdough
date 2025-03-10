import { FC } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface FCWithTestID<Props = {}> extends FC<Props> {
  testID?: string;
  testIDs?: object;
}
