import { List, Datagrid, TextField, DateField, BooleanField } from 'react-admin';

export const BillboardList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="name" />
        </Datagrid>
    </List>
);