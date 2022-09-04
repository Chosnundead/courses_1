import React from "react";
import "../../../styles/Pagination.css";

export const Pagination = ({ array, getPage, page }) => {
  return (
    <div className="pagination">
      {array.map((item, index) => {
        return (
          <button
            style={{ border: page === item ? "2px solid purple" : "" }}
            key={index}
            onClick={(e) => {
              getPage(item);
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};
