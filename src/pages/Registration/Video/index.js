import React from 'react'
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom'

// every component is a function!
function VideoRegistration() {
    return(
      <PageDefault>
        <h1>
        Video Registration
        </h1>

        {/* link to another component without reloading the page (Single Page Applcation) */}
        <Link to="/registration/category">
          Category Registration
        </Link>
      </PageDefault>
    )
  }

  export default VideoRegistration;