import { getPosts, getPostComment, addPost } from "../api";
import * as types from "../type/types";

export const setData = (data) => ({
  type: types.SET_DATA,
  payload: data,
});

export const getDataPosts = () => (dispatch) => {
  console.log("dataAction");
  const response = getPosts();
  response
    .then((res) => {
      dispatch(setData(res));
      console.log(res, "Get posts");
    })
    .catch((err) => {
      console.log(err, "Something went wrong in Get posts");
    });
  return response;
};

export const getDataPostComment = (id) => (dispatch) => {
  console.log("dataAction");
  const response = getPostComment(id);
  response
    .then((res) => {
      console.log(res, "Get comments");
    })
    .catch((err) => {
      console.log(err, "Something went wrong in Get comments");
    });
  return response;
};

export const addDataPost = (obj) => (dispatch) => {
  console.log("dataAction");
  const response = addPost(obj);
  response
    .then((res) => {
      console.log(res, "Add post");
    })
    .catch((err) => {
      console.log(err, "Something went wrong in Add post");
    });
  return response;
};
