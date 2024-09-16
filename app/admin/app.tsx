"use client"
import React from 'react'
import { Admin, ListGuesser, Resource } from 'react-admin'
import simpleRestProvider from 'ra-data-simple-rest';
import { CategoryCreate } from './category/create';
import { CategoryEdit } from './category/edit';
import { CategoryList } from './category/list';
import { SizeList } from './size/list';
import { SizeCreate } from './size/create';
import { SizeEdit } from './size/edit';

const dataProvider = simpleRestProvider('/api')
export const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
     <Resource
       name='categories'
       list={CategoryList}
       create={CategoryCreate}
       edit={CategoryEdit}
      />
     <Resource
       name='sizes'
       list={SizeList}
       create={SizeCreate}
       edit={SizeEdit}
      />
    </Admin>
  )
}
