import { useEffect, useState } from "react";
import "./Friends.css";
import Post from "./Post";

function Friends() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="">
      <h3>Posts:{posts.length}</h3>

      {/*Dynami Data Load  */}
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Friends;

/**
 * State to hold data
 *Use Effect with dependency array
 *Use Fetch to load data
 *Set Loaded to the state
 Display Data on the component
 */
