import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const ReviewLink = ({ ReviewItem }) => {
  const location = useLocation();

  return (
    <ul className="list-none space-y-2">
      {ReviewItem &&
        ReviewItem.map((item) => (
          <li key={item.id} className="p-2">
            <Link
              to={item.url}
              className={`hover:text-orange-700 transition-colors duration-300 ${
                location.pathname === item.url
                  ? "bg-gray-500 text-blue-900 rounded-md p-2 border-x-slate-500 shadow-md"
                  : ""
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default ReviewLink;
