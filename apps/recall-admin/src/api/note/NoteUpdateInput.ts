import { InputJsonValue } from "../../types";

export type NoteUpdateInput = {
  audioFile?: InputJsonValue;
  content?: string;
  title?: string;
};
