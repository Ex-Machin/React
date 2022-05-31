import React from "react";
import { createRef } from "react/cjs/react.production.min";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = ({ postsData, dispatch, newPostText }) => {
  let newPostElement = createRef();

  const addPost = () => {
    dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    dispatch(action);
  };

  return (
    <div className={s.postBlock}>
      <h3>My Posts</h3>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={newPostText}
        />
      </div>
      <div>
        <button onClick={addPost}>Add Post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>
        {postsData.map((item) => {
          return (
            <Post
              message={item.message}
              likeCount={item.likeCount}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyPosts;
