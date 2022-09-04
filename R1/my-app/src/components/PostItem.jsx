import React from "react";
import "../styles/PostItem.css";
import { MyButton } from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom";

export const PostItem = ({ remove, number, post }) => {
  const router = useNavigate();
  return (
    <div className="post">
      <div className="post_content">
        <strong>
          {number}. {`[id:${post.id}]`}
          {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="post_button">
        <MyButton
          onClick={(event) => {
            router(`/posts/${post.id}`);
          }}
        >
          Open
        </MyButton>
        <MyButton
          onClick={(event) => {
            remove(post.id);
          }}
        >
          Delete
        </MyButton>
      </div>
    </div>
  );
};
