import { InputJsonValue } from "../../types";

export type NoteCreateInput = {
  audioFile?: InputJsonValue;
  content: string;
  title: string;
};
