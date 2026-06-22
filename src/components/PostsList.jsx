import classes from "./PostsList.module.css";
import Post from "./Post";

export default function PostList(props) {
  return (
    <ul className={classes.posts}>
      <Post author="Mars" body="React is awesome!" />
      <Post author="Marble" body="React is still awesome!" />
    </ul>
  );
}
