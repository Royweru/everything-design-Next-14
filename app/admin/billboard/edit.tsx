import * as React from 'react';
import { Edit, SimpleForm, TextInput, required } from 'react-admin';


export const BillboardEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="label" validate={[required()]}  label="Billboard label"/>
            <TextInput source="imageUrl" validate={[required()]}  label="Billboard Image Url"/>
        </SimpleForm>
    </Edit>
);