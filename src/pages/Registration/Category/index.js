import React from 'react'
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom'

// every component is a function!
function CategoryRegistration() {
    return(
      <PageDefault>
        <h1>
        Category Registration
        </h1>

        {/* link to another component without reloading the page (Single Page Applcation) */}
        <Link to="/">
            Home
        </Link>
      </PageDefault>
    )
  }

  export default CategoryRegistration;