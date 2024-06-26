import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Username" source="username" />
      </SimpleShowLayout>
    </Show>
  );
};
