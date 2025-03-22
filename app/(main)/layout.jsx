import React from 'react'
import AppHeader from './_components/AppHeader'

function DashboardLayou({children}) {
  return (
    <div>
      <AppHeader />
      {children} 
    </div>
  )
}

export default DashboardLayou
