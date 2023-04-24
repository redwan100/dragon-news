import React from 'react'
import { useLoaderData,Link } from 'react-router-dom'
import {HiOutlineArrowNarrowLeft} from 'react-icons/hi'
const News = () => {
    const {_id,image_url, title, details,category_id} = useLoaderData()
    // console.log(news);
  return (
    <div className='space-y-4'>
      <div>
        <img className='w-full h-full' src={image_url} alt="" />
      </div>
      <h1 className='text-xl font-semibold'>{title}</h1>
      <p className='text-xs text-gray-600 sm:text-sm'>{details}</p>

      <Link to={`/category/${category_id}`} className='w-max bg-rose-500 flex items-center gap-1 px-2 py-1 text-white text-xs rounded-sm shadow-md shadow-red-100 md:text-sm'><HiOutlineArrowNarrowLeft size={18}/>All news in this category</Link>
    </div>
  )
}

export default News