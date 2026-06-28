import { useState } from "react";
import classes from "./NewPost.module.css";

export default function NewPost(props) {
  const [enteredBody, setEnteredBody] = useState("Lorem Ipsum");
  const [enteredAuthor, setEnteredAuthor] = useState("Max Mustermann");

  // this function gets called whenever there is a change in the textarea
  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  function changeAuhorHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    props.onAddPost(postData);
    props.onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          onChange={changeBodyHandler}
        ></textarea>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeAuhorHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}
