import { useState } from "react";
import { usePosts } from "../hooks/usePosts";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import { usePagination } from "../hooks/usePagination";
import { _getPagesCount } from "../utils/pages";
import { useEffect } from "react";
import { MyButton } from "../components/UI/button/MyButton";
import { MyModal } from "../components/UI/MyModal/MyModal";
import { PostForm } from "../components/PostForm";
import { PostFilter } from "../components/PostFilter";
import { PostList } from "../components/PostList";
import { Pagination } from "../components/UI/pagination/Pagination";
import "../styles/Posts.css";
import { useRef } from "react";
import { useObserver } from "../hooks/useObserver";
import { MySelect } from "../components/UI/select/MySelect";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "title", search: "" });
  const [isModal, setIsModal] = useState(false);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const lastElement = useRef();

  const seachedAndSortedPosts = usePosts(posts, filter.sort, filter.search);
  const [fetchPosts, isLoading, error] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    setTotalPages(_getPagesCount(response.headers["x-total-count"], limit));
  });
  const navigationArray = usePagination(totalPages);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setIsModal(false);
  };

  useEffect(() => {
    fetchPosts();
  }, [page, limit]);

  const removePost = (id) => {
    setPosts(posts.filter((item) => item.id !== id));
  };

  const getFilter = (filterFromPostFilter) => {
    setFilter(filterFromPostFilter);
  };

  const getModal = (visible) => {
    setIsModal(visible);
  };

  const getPage = (clickedPage) => {
    setPage(clickedPage);
  };

  useObserver(lastElement, page < totalPages, isLoading, () => {
    setPage(page + 1);
  });

  return (
    <div className="Posts">
      <MyButton style={{ float: "right" }} onClick={(e) => setIsModal(true)}>
        Create Post
      </MyButton>

      <MyModal visible={isModal} getVisible={getModal}>
        <PostForm create={createPost}></PostForm>
      </MyModal>

      <PostFilter getFilter={getFilter} filter={filter}></PostFilter>
      <MySelect
        defaultValue="Amount of elements:"
        value={limit}
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 25, name: "25" },
          { value: -1, name: "All" },
        ]}
        onChange={(e) => {
          setLimit(e.target.value);
        }}
      ></MySelect>

      {/* {isLoading ? (
        <h2 style={{ textAlign: "center", marginTop: "15px" }}>Loading...</h2>
      ) : error ? (
        <h2 style={{ textAlign: "center", marginTop: "15px" }}>{error}</h2>
      ) : ( */}
      <div>
        <PostList
          remove={removePost}
          posts={seachedAndSortedPosts}
          title={"Post List"}
          error={error}
          isLoading={isLoading}
        ></PostList>
        <Pagination
          array={navigationArray}
          getPage={getPage}
          page={page}
        ></Pagination>
        <div ref={lastElement} style={{ height: "21px" }}></div>
      </div>
      {/* )} */}
    </div>
  );
}

export default Posts;
