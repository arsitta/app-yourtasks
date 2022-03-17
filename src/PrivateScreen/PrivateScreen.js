import React from 'react'
import { DashboardScreen } from '../components/Dashboard/DashboardScreen'

export const PrivateScreen = ({children}) => {
  return (

    <section className="private__screen">
      {children}
    </section>

  )
}
