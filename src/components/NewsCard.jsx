import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineBookmark, HiBookmark } from "react-icons/hi";
import {
  AiOutlineShareAlt,
  AiOutlineStar,
  AiTwotoneStar,
  AiFillEye,
} from "react-icons/ai";
import moment from "moment";
import Rating from 'react-rating'
const NewsCard = ({ _id, author, title, details, image_url, rating, total_view }) => {
  return (
    <div className="border rounded-md mb-3 drop-shadow-sm">
      <div className="bg-gray-50 flex items-center justify-between p-3">
        <div className="flex items-center gap-2">
          <img
            className="w-10 rounded-full object-cover"
            src={author?.img}
            alt=""
          />

          <div className="flex flex-col">
            <h1 className="font-medium">{author?.name}</h1>
            <small>{moment(author?.published_date).format("yyyy-MM-DD")}</small>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <HiOutlineBookmark size={25} />
          <AiOutlineShareAlt size={25} />
        </div>
      </div>

      <div className="space-y-3  p-2 md:p-4">
        <h1 className="text-2xl font-medium">{title}</h1>
        <div>
          <img src={image_url} alt="" />
        </div>
        <p className="text-gray-600">
          {details.length > 250 ? details.slice(0, 250) : details}...{" "}
          <Link to={`/news/${_id}`} className="text-teal-400">
            Read More
          </Link>
        </p>
        <hr className="h-2 py-2" />
      </div>
      <div className="flex items-center justify-between p-2">
        <p className="flex items-center gap-3">
          <Rating
            placeholderRating={rating.number}
            placeholderSymbol={<AiTwotoneStar />}
            emptySymbol={<AiOutlineStar />}
            fullSymbol={<AiTwotoneStar />}
            readonly
          />
          <small>{rating.number}</small>
        </p>

        <small className="flex items-center gap-2">
          <AiFillEye className="opacity-50" />
          {total_view}
        </small>
      </div>
    </div>
  );
};

export default NewsCard;
