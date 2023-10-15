import axios from "axios";

  //const url = "https://tuv9qtqn3c39.onrender.com/posts/gallery";
  const url = "http://192.168.1.39:5000/posts/gallery";

 const apifetchPosts = () => axios.get(url);

 const apicreatePost = (newPost) => axios.post(url, newPost);

 const apiupdatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);

 const apideletePost = (id) => axios.delete(`${url}/${id}`);

 const apilikePost = (id) => axios.patch(`${url}/${id}/likePost`);

export {apifetchPosts , apicreatePost , apiupdatePost , apideletePost , apilikePost};
