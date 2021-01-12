import React from 'react'
import AboutLink from './AboutLink';
import AboutUs from './AboutUs';

function about() {
    return (
        <div style={{minHeight: "75px", paddingTop: "75px"}}>
            <AboutLink />
            <AboutUs />
        </div>
    )
}

export default about
