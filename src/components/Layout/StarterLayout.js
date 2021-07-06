import React, { Children } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function StarterLayout({children}) {
    return (
        <div>
            <Header />
            <div className="container">
               {children}
            </div>
            <Footer />

        </div>
    )
}

export default StarterLayout
