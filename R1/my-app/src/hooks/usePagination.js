import { useMemo } from "react";

export const usePagination = (totalPages) => {
  const navigationArray = useMemo(() => {
    let arr = [];
    for (let counter = 0; counter < totalPages; counter++) {
      arr.push(counter + 1);
    }
    return arr;
  }, [totalPages]);

  return navigationArray;
};
