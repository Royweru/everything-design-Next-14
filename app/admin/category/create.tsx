import * as React from 'react';
import { Create, SimpleForm, TextInput, ReferenceInput, required } from 'react-admin';


export const CategoryCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" validate={[required()]}  label="Category name"/>
            <ReferenceInput  source='billboardId' reference='billboards'/>
        </SimpleForm>
    </Create>
);