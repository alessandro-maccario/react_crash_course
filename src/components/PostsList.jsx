import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import Post from "./Post";
import { useState } from "react";
import Modal from "./Modal";

export default function PostList() {
  const [isModalVisible, setModalIsVisible] = useState(true);
  const [enteredBody, setEnteredBody] = useState("Lorem Ipsum");
  const [enteredAuthor, setEnteredAuthor] = useState("Max Mustermann");

  // this function gets called whenever there is a change in the textarea
  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  function changeAuhorHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function hideModalHandler(event) {
    setModalIsVisible(false);
  }

  return (
    // fragment to wrap the siblings together because React wants only one Root element returned
    // The ternary operator will activate isModalVisible true by default and when clicked on the
    // backdrop (grey area), to false, so that the modal overlay will disappear
    <>
      {isModalVisible ? (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={changeBodyHandler}
            onAuthorChange={changeAuhorHandler}
          />
        </Modal>
      ) : (
        false
      )}

      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Maple" body="React ist verdammt geil!" />
      </ul>
    </>
  );
}
