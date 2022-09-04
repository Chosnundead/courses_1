import React from "react";
import "../styles/PostForm.css";
import { MyButton } from "./UI/button/MyButton";
import { MyInput } from "./UI/input/MyInput";
import { useRef, useState } from "react";

export const PostForm = ({ create }) => {
  const postNameRef = useRef();
  const postTextRef = useRef();
  return (
    <form className="post_form">
      <h2>Post Form</h2>
      <MyInput type="text" placeholder="Post Name" ref={postNameRef} />
      <MyInput type="text" placeholder="Post Text" ref={postTextRef} />
      <MyButton
        style={{ marginTop: "15px" }}
        onClick={(event) => {
          event.preventDefault();
          create({
            id: Date.now(),
            title: postNameRef.current.value,
            body: postTextRef.current.value,
          });
          postNameRef.current.value = "";
          postTextRef.current.value = "";
        }}
      >
        Post
      </MyButton>
    </form>
  );
};
