import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const FolderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="Subfolders" source="subfolders" />
      </SimpleForm>
    </Edit>
  );
};
