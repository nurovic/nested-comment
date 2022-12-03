import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
};

export const PostSlice = createSlice({
  name: "PostSlice",
  initialState,
  reducers: {
    createPost: (state, action) => {
      state.comments.push(action.payload);
    },
    commentReply: (state, action) => {
      const findId = (target, obj) =>
      searchTree((node, next, found) =>
        node.id == target ? found() : next()
        )(state.comments);
        const replyComment = findId(action.payload.commentId)
        replyComment.replies.push(action.payload)
    },
    likeComment: (state, action) => {
        const { id } = action.payload
        const findId = (target, obj) =>
        searchTree((node, next, found) =>
          node.id == target ? found() : next()
        )(state.comments);

        const likeComment = findId (action.payload.commentId)
        likeComment.likes.push(id)
    }
  },
});

export const searchTree = (fn) => (obj) =>
  Array.isArray(obj)
    ? obj.length == 0
      ? null
      : searchTree(fn)(obj[0]) || searchTree(fn)(obj.slice(1))
    : fn(
        obj,
        () => searchTree(fn)(obj.replies || []),
        () => obj
      );

export const { createPost, commentReply, likeComment } = PostSlice.actions;
export default PostSlice.reducer;
