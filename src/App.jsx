import { useState } from "react";
import PostList from "./components/PostsList";
import MainHeader from "./components/MainHeader";

export default function App() {
  const [isModalVisible, setModalIsVisible] = useState(false);

  function hideModalHandler(event) {
    setModalIsVisible(false);
  }

  function showModalHandler(event) {
    setModalIsVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList isPosting={isModalVisible} onStopPosting={hideModalHandler} />
      </main>
    </>
  );
}
