import React, { useState } from "react";
import { useEffect } from "react";
import { getPosts, deletePosts } from "../Api/PostApi";
import Form from "./Form";

const Posts = () => {
  const [data, setData] = useState([]);
  const [updateDataApi, setUpdateDataApi] = useState({});

  const getPostData = async () => {
    const res = await getPosts();
    console.log(res.data);
    setData(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);

 

  const handleDelete = async (id) => {
    try {
      const res = await deletePosts(id);

      if (res.status === 200) {
        const newUpdatedPosts = data.filter((curPost) => {
          return curPost.id !== id;
        });
        setData(newUpdatedPosts)
    }
        else{
 console.log("failed to delete post", res.status)
        
      }
    } catch (error) {
      console.log(error);
    }
  };
 //handleUpdatePost
 const handleUpdatePost = (curElem) => setUpdateDataApi(curElem);
  return (
    <>
    <section className="section-form">
        <Form
              data={data}
          setData={setData}
          updateDataApi={updateDataApi}
          setUpdateDataApi={setUpdateDataApi}
        />
    </section>
    <section className="section-post">
      <ol>
        {data.map((curElem) => {
          const { id, body, title } = curElem;
          return (
            <li key={id}>
              
              <p>Title: {title}</p>
              <p>Body: {body}</p>
              <button onClick={() => handleUpdatePost(curElem)}>Edit</button>
              <button className="btn-delete" onClick={() => handleDelete(id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ol>
    </section>
    </>
  );
};

export default Posts;
