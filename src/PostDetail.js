import React, { useState } from "react";

function PostDetail({ posts }) {
  const [comments, setComments] = useState([]);

  async function handleClick() {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${posts.id}/comments`
      );
      setComments(await response.json());
    } catch (error) {
      console.log(error);
    }
  }

  const commentList = comments.map((comment) => (
    <li key={comment.id}>{comment.body}</li>
  ));

  return (
  <div>
    <h1>{posts.title}</h1>
    <p onClick={handleClick}>{posts.body}</p>
    <ul>{commentList}</ul>
    </div>
  );
}

export default PostDetail;
