import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import Post from "./Post";

export default function PostList(props) {
  return (
    // fragment to wrap the siblings together because React wants only one Root element returned
    <>
      <NewPost />

      <ul className={classes.posts}>
        <Post author="Mars" body="React is awesome!" />
        <Post author="Marble" body="React is still awesome!" />
      </ul>
    </>
  );
}
