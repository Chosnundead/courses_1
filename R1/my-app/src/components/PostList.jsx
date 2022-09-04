import React from "react";
import { PostItem } from "./PostItem";

export const PostList = ({ remove, posts, title, isLoading, error }) => {
  if (!posts.length && !isLoading) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "15px" }}>
        Empty Post List!
      </h2>
    );
  }
  if (error) {
    return <h2 style={{ textAlign: "center", marginTop: "15px" }}>{error}</h2>;
  }
  return (
    <div>
      {isLoading ? (
        <h2 style={{ textAlign: "center", marginTop: "15px" }}>Loading...</h2>
      ) : (
        <h2 style={{ textAlign: "center", marginTop: "15px" }}>{title}</h2>
      )}
      {posts.map((item, index) => {
        return (
          <PostItem
            remove={remove}
            key={item.id}
            number={index + 1}
            post={item}
          ></PostItem>
        );
      })}
    </div>
  );
};
