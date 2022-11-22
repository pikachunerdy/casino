import { getPostData } from "../../lib/posts";

export async function getStaticProps({ params }) {
    const blogPosts = await fetch("http://127.0.0.1:8000/blogs/", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => response.json());

      console.log('test', blogPosts)
  
    // const blogPosts = await getSpecialTrips()
    const postData = await getPostData(params.id);
  
    return {
      props: {
        postData,
        blogPosts,
      },
    }
};