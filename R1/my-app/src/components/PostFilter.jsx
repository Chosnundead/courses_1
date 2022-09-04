import React, { useState, useRef, useMemo } from "react";
import { MyInput } from "./UI/input/MyInput";
import { MySelect } from "./UI/select/MySelect";

export const PostFilter = ({ getFilter, filter }) => {
  const [sort, setSort] = useState("title");

  const [search, setSearch] = useState("");

  return (
    <div>
      <MyInput
        placeholder={"Search..."}
        onChange={(e) => {
          setSearch(e.target.value);
          getFilter({ ...filter, search: e.target.value });
        }}
        value={search}
      ></MyInput>

      <MySelect
        options={[
          { name: "Title", value: "title" },
          { name: "Body", value: "body" },
        ]}
        defaultValue={"Sorting:"}
        onChange={(event) => {
          setSort(event.target.value);
          getFilter({ ...filter, sort: event.target.value });
        }}
      ></MySelect>
    </div>
  );
};
