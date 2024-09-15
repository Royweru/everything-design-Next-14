import { isAdmin } from '@/lib/isAdmin'
import React from 'react'
import { App } from './app'
import { redirect } from 'next/navigation'

const AdminPage = () => {
    if(!isAdmin()) return redirect('/')

  return (
    <App />
  )
}

export default AdminPage