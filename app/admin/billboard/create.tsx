import * as React from 'react';
import { Create, SimpleForm, TextInput, required } from 'react-admin';


export const BillboardCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="label" validate={[required()]}  label="Billboard label"/>
            <TextInput source="imageUrl" validate={[required()]}  label="Billboard Image Url"/>
        </SimpleForm>
    </Create>
);