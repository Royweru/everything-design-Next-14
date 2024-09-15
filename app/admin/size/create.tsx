import * as React from 'react';
import { Create, SimpleForm, TextInput, DateInput, required } from 'react-admin';


export const SiezeCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" validate={[required()]}  label="Category name"/>
            <TextInput source="value" validate={[required()]}  label="Roman Value"/>
        </SimpleForm>
    </Create>
);