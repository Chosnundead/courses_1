import React from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import { useEffect } from "react";
import { useState } from "react";

export const PostIdPage = () => {
  const params = useParams();
  const [postData, setPostData] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPost, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    console.log(response);
    setPostData(response.data);
  });
  const [fetchComments, isLoadingComments, errorComments] = useFetching(
    async () => {
      const response = await PostService.getCommentsById(params.id);
      console.log(response);
      setComments(response.data);
    }
  );

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, []);

  return (
    <div>
      {isLoading ? (
        <h2 style={{ textAlign: "center" }}>Loading...</h2>
      ) : error ? (
        <h2 style={{ textAlign: "center" }}>{error}</h2>
      ) : (
        <div>
          <h2 style={{ textAlign: "center" }}>Post #{params.id} was opened!</h2>
          <h2 style={{ textAlign: "center", marginTop: "15px" }}>
            {postData.title}
          </h2>
          <p style={{ textAlign: "center", marginTop: "15px" }}>
            {postData.body}
          </p>
          {isLoadingComments ? (
            <h2
              style={{ marginTop: "15px", marginLeft: "100px", float: "left" }}
            >
              Loading...
            </h2>
          ) : errorComments ? (
            <h2
              style={{ marginTop: "15px", marginLeft: "100px", float: "left" }}
            >
              {errorComments}
            </h2>
          ) : (
            ((
              <h2
                style={{
                  marginTop: "15px",
                  marginLeft: "100px",
                  float: "left",
                }}
              >
                Comments:
              </h2>
            ),
            comments.map((item) => {
              return (
                <div
                  style={{
                    marginTop: "15px",
                    marginLeft: "100px",
                    float: "left",
                  }}
                >
                  <h2>{item.name}</h2>
                  <p>Email: {item.email}</p>
                  <p>{item.body}</p>
                </div>
              );
            }))
          )}
        </div>
      )}
    </div>
  );
};
