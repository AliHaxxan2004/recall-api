import { SortOrder } from "../../util/SortOrder";

export type NoteOrderByInput = {
  audioFile?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
};
