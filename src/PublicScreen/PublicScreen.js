import React from 'react'
import { PublicConfigBar } from './PublicConfigBar'
import { PublicInfoSection } from './PublicInfoSection'

export const PublicScreen = ({ children }) => {
    return (
        <section className="public__screen">
            <PublicInfoSection />
            <PublicConfigBar />
            {children}
        </section>
    )
}




