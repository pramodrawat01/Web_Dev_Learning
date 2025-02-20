import React from 'react'
import { Outlet } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}
