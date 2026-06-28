import { useState } from "react";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";

export default function PostList(props) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    // fragment to wrap the siblings together because React wants only one Root element returned
    // The ternary operator will activate isModalVisible true by default and when clicked on the
    // backdrop (grey area), to false, so that the modal overlay will disappear
    <>
      {props.isPosting ? (
        <Modal onClose={props.onStopPosting}>
          <NewPost onCancel={props.onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      ) : (
        false
      )}

      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet!</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}
