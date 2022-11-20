import React, { useContext, useEffect, useState } from "react";
export const BlogsContext = React.createContext({});

export const BlogProvider = ({ children }) => {
  const [blogData, setBlogData] = useState([]);

  const getAllBlogs = async () => {
    await fetch("http://127.0.0.1:8000/blogs/", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setBlogData(data));
  };

  useEffect(() => {
    getAllBlogs();
}, []);


  return (
    <BlogsContext.Provider
      value={{ blogData, setBlogData }}
    >
      {children}
    </BlogsContext.Provider>
  );
};

export default BlogsContext;
