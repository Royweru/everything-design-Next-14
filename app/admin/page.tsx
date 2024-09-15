import { isAdmin } from '@/lib/isAdmin'
import React from 'react'
import { App } from './app'

const AdminPage = () => {
    if(!isAdmin()) return null
    
  return (
    <App />
  )
}

export default AdminPage