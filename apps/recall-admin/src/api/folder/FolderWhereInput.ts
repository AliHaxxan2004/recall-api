import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FolderWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  subfolders?: StringNullableFilter;
};
