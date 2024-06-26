import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const FolderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="Subfolders" source="subfolders" />
      </SimpleShowLayout>
    </Show>
  );
};
