import { SortOrder } from "../../util/SortOrder";

export type FolderOrderByInput = {
  id?: SortOrder;
  name?: SortOrder;
  subfolders?: SortOrder;
};
