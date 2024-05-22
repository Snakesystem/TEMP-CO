import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Admin() {
  return (
    <div>
        Admin
        <Outlet/>
    </div>
  )
}
