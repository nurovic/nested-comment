import { nanoid } from "nanoid";
import React, { useState } from "react";
import { commentReply, likeComment } from "../Redux/PostSlice";
import { useDispatch } from "react-redux";
import "./PostCard.css";

const PostCard = ({ comment }) => {
  const dispatch = useDispatch();
  const [reply, setReply] = useState("");

  const handleClick = (e) => {
    if (e.keyCode == 13) {
      e.preventDefault();
      if (!reply.length) {
        return alert("Please write something");
      }
      const date = new Date();
      const hoursAndMinutes = date.getHours() + ":" + date.getMinutes();
      const data = {
        commentId: comment.id,
        id: nanoid(),
        time: hoursAndMinutes,
        text: reply,
        replies: [],
        likes: [],
      };
      dispatch(commentReply(data));
      setReply("");
    }
  };

  const likeClick = (e) => {
    e.preventDefault();
    const data = {
      commentId: comment.id,
    };
    dispatch(likeComment(data));
  };

  return (
    <div className="wrap-container">
      <div className="card-container">
        <div className="card-detail">
          <div className="container-text">
            <p>{comment.text}</p>
          </div>

          <div className="comment-container">
            <input
              className="comment-input"
              type="text"
              placeholder="Make Comment"
              onKeyDown={handleClick}
              value={reply}
              onChange={(e) => setReply(e.target.value)}
            />
            <button onClick={handleClick} type="submit">
              Send
            </button>
          </div>
          <div className="buttons">
          <div className="time-reply">
            <p>Comment Replies: {comment.replies.length}</p>
          </div>
            <p className="comment-time">{comment.time}</p>
            <div onClick={likeClick}>
              {comment.likes.length > 0 ? comment.likes.length : ""} Like
            </div>
          </div>
        </div>
        {comment.replies?.map((comment) => (
          <PostCard key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default PostCard;
