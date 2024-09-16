import * as React from 'react';
import { Create, SimpleForm, TextInput, DateInput, required, Edit } from 'react-admin';


export const SizeEdit= () => (
    <Edit>
         <SimpleForm>
            <TextInput source="name" validate={[required()]}  label="Size name"/>
            <TextInput source="value" validate={[required()]}  label="Roman Value"/>
        </SimpleForm>
    </Edit>
);