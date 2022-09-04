import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    return [...posts].sort((a, b) => {
      return a[sort].localeCompare(b[sort]);
    });
  }, [posts, sort]);

  return sortedPosts;
};

export const usePosts = (posts, sort, search) => {
  const sortedPosts = useSortedPosts(posts, sort);
  const seachedAndSortedPosts = useMemo(() => {
    return sortedPosts.filter((item) =>
      item.title.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }, [posts, search, sort]);

  return seachedAndSortedPosts;
};
