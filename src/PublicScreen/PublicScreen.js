import React from 'react'
import { ConfigBar } from './ConfigBar'
import { InfoSection } from './InfoSection'

export const PublicScreen = ({ children }) => {
    return (
        <section className="public__screen">
            <InfoSection />
            <ConfigBar />
            {children}
        </section>
    )
}




