import { List, Datagrid, TextField, DateField, BooleanField } from 'react-admin';

export const SizeList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <TextField source="value" />
        </Datagrid>
    </List>
);