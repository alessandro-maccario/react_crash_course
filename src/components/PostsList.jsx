import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import Post from "./Post";
import { useState } from "react";

export default function PostList() {
  const [enteredBody, setEnteredBody] = useState("Lorem Ipsum");
  const [enteredAuthor, setEnteredAuthor] = useState("Max Mustermann");

  // this function gets called whenever there is a change in the textarea
  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  function changeAuhorHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    // fragment to wrap the siblings together because React wants only one Root element returned
    <>
      <NewPost
        onBodyChange={changeBodyHandler}
        onAuthorChange={changeAuhorHandler}
      />

      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Maple" body="React ist verdammt geil!" />
      </ul>
    </>
  );
}
