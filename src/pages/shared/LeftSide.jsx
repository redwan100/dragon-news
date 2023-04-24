import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { NavLink } from 'react-router-dom';

const LeftSide = () => {
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
       fetch("http://localhost:5000/categories")
       .then((res) => res.json())
       .then((data) => setCategories(data))
       .catch((error) => console.log(error));
  },[])
   
  return (
    <div>
      <h1 className="title">Categories</h1>
      <div className="">
        {categories.map((category) => (
          <p>
            <NavLink className={({isActive})=>isActive?'active':''} to={`/category/${category.id}`} key={category.id}>
              {category.name}
            </NavLink>
          </p>
        ))}
      </div>
    </div>
  );
}

export default LeftSide