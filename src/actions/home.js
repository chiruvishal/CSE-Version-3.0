import {
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
  FETCH_ALL,
} from "../constants/actionTypes";
import {apifetchPosts , apicreatePost , apiupdatePost , apideletePost , apilikePost} from "../api/home";

// Action Creators
 const getPosts = () => async (dispatch) => {
  try {
    const { data } = await apifetchPosts();
    // const action = { type: "FETCH_ALL", payload: [] };
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

 const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await apicreatePost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

 const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await apiupdatePost(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

 const deletePost = (id) => async (dispatch) => {
  try {
    await apideletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

 const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await apilikePost(id);
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export  {getPosts , createPost, updatePost, deletePost, likePost};
