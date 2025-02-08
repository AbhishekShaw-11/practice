import axios from "axios"

const api= axios.create({
 baseURL: "https://jsonplaceholder.typicode.com"
})

//get method

export const getPosts =() =>{
  return api.get("/posts");

}

// delete method
 export const deletePosts =(id) =>{
  return api.delete(`/posts/${id}`)

 }
 
 //post method
export const postData = (post) => {
  return api.post("/posts", post);
};

//put method
export const updateData = (id, post) => {
  return api.put(`/posts/${id}`, post);
};