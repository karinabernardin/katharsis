import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom'

// every component is a function!
function CategoryRegistration() {
    // States!!!
    // categoryValues: variable representing the values  of the category object;
    // setCategoryValues: function that allows us to change the values of the category object;
    // initialCategoryValues: the initial values of the categoryValues object.
    const initialCategoryValues = {
      name: 'Animation',
      description: 'Great animated stuff from all around the world.',
      color: '#E4BB2F'
    }
    const [categoryValues, setCategoryValues] = useState(initialCategoryValues);
    const [categories, setCategories] = useState([initialCategoryValues]);

    function setCategoryValue(key, value) {
      setCategoryValues({
        ...categoryValues,
        [key] : value
      })
    }

    function onChangeCategoryHandler(eventInformation) {
      setCategoryValue(eventInformation.target.getAttribute('name'), eventInformation.target.value);
    }
  
    return(
      <PageDefault>
        <h1>Category Registration: {categoryValues.name}</h1>

        <form onSubmit={function handleSubmit(eventInformation) {
          eventInformation.preventDefault();
          setCategories([...categories, categoryValues]);
        }}>

        <div>
            <label>
              Category Name:
              <input
                type='text'
                name='name'
                value={categoryValues.name}
                onChange={onChangeCategoryHandler}
                />
            </label>
          </div>

          <div>
            <label>
              Description:
              <textarea
                type='text'
                name='description'
                value={categoryValues.description}
                onChange={onChangeCategoryHandler}
                />
            </label>
          </div>    

          <div>
            <label>
              Color:
              <input
                type='color'
                name='color'
                value={categoryValues.color}
                onChange={onChangeCategoryHandler}
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
              <li key={`${category.name}${index}`}>
                {category.name}
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