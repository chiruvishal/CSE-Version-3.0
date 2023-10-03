import axios from "axios";

  const url = "https://tuv9qtqn3c39.onrender.com/posts/news";
//  const url = "http://localhost:5000/posts/news";

 const apifetchPosts = () => axios.get(url);

 const apicreatePost = (newPost) => axios.post(url, newPost);

 const apiupdatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);

 const apideletePost = (id) => axios.delete(`${url}/${id}`);

 const apilikePost = (id) => axios.patch(`${url}/${id}/likePost`);

export {apifetchPosts , apicreatePost , apiupdatePost , apideletePost , apilikePost};
