import { JsonValue } from "type-fest";

export type Note = {
  audioFile: JsonValue;
  content: string;
  createdAt: Date;
  id: string;
  title: string;
};
