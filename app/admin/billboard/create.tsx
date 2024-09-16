import * as React from 'react';
import { Create, SimpleForm, TextInput, DateInput, required } from 'react-admin';


export const BillboardCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="label" validate={[required()]}  label="Category name"/>
            <TextInput source="imageUrl" validate={[required()]}  label="Category name"/>
        </SimpleForm>
    </Create>
);