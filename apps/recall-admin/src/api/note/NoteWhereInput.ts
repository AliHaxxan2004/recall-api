import { StringFilter } from "../../util/StringFilter";

export type NoteWhereInput = {
  content?: StringFilter;
  id?: StringFilter;
  title?: StringFilter;
};
