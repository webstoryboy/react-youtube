import React from 'react'
import Serach from './Serach'

const Main = ( props ) => {
    return (
        <main id='main' role='main'>
            <Serach />
            {props.children}
        </main>
    )
}

export default Main