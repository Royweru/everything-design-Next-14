import { List, Datagrid, TextField } from "react-admin";

export const BillboardList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="label" />
      <TextField source="imageUrl" />
    </Datagrid>
  </List>
);
