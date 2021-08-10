import { useState, useEffect } from "react";

const usePresenter = () => {

  const [postImage, setPostImage] = useState('');
  const [postDescription, setPostDescription] = useState('');

  async function fetchData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    res
      .json()
      .then(res => setPostImage(res.url))

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/photos')
  //       .then(response => response.json())
  //       .then(data => setPostImage(data.url))
  //       }, []);


  // async function getResponse() {
  //   let response = await fetch('https://jsonplaceholder.typicode.com/photos')
  //   let content = await response.json()
  //   content = content.splice(0, 20);
  //   let key;
  //   for (key in content) {
  //   console.log(content[key])
  // };
  
  // }

  // getResponse();

  return { postImage, setPostImage };
};

export default usePresenter;
