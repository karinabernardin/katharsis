import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom'

// every component is a function!
function CategoryRegistration() {
    // States!!!
    // categoryName: variable representing the name of the category;
    // setCategoryName: function that allows us to change the name of the category;
    // Movies: the initial value of categoryName.
    const [categoryName, setCategoryName] = useState('Movies');
    const [categories, setCategories] = useState(['Category 1']);
  
    return(
      <PageDefault>
        <h1>Category Registration: {categoryName}</h1>

        <form onSubmit={function handleSubmit(eventInformation) {
          eventInformation.preventDefault();
          setCategories([...categories, categoryName]);
        }}>

        <div>
            <label>
              Category Name:
              <input
                type="text"
                value={categoryName}
                onChange={function categoryNameHandler(eventInformation) {
                  console.log('[categoryName]', categoryName);
                  console.log('[eventInformation.target.value]', eventInformation.target.value);
                  setCategoryName(eventInformation.target.value);
                }}
                />
            </label>
          </div>

          <div>
            <label>
              Description:
              <textarea
                type="text"
                value={categoryName}
                onChange={function categoryNameHandler(eventInformation) {
                  console.log('[categoryName]', categoryName);
                  console.log('[eventInformation.target.value]', eventInformation.target.value);
                  setCategoryName(eventInformation.target.value);
                }}
                />
            </label>
          </div>    
                 
          <div>
            <label>
              Color:
              <input
                type="color"
                value={categoryName}
                onChange={function categoryNameHandler(eventInformation) {
                  console.log('[categoryName]', categoryName);
                  console.log('[eventInformation.target.value]', eventInformation.target.value);
                  setCategoryName(eventInformation.target.value);
                }}
                />
            </label>
        </div>

          <button>
            Register
          </button>

        </form>

        <ul>
          {categories.map((category, index) => {
            return (
              // key chosen to be unique
              <li key={`${category}${index}`}>
                {category}
              </li>
            );
          })}
        </ul>

        {/* link to another component without reloading the page (Single Page Applcation) */}
        <Link to="/">
            Home
        </Link>
      </PageDefault>
    )
}

  export default CategoryRegistration;