import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import NewsCard from './NewsCard'

const Category = () => {
    const categoryNews = useLoaderData()
    console.log(categoryNews);
    const {id} = useParams()
  return (
    <div>
      

        {
            categoryNews.map(category =><NewsCard key={category._id} {...category}/>)
        }
    </div>
  )
}

export default Category