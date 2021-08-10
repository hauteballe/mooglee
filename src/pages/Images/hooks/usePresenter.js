import { useState, useEffect } from 'react';
import axios from 'axios';

const usePresenter = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get('https://jsonplaceholder.typicode.com/photos')
        .then((res) => {
          setPosts(res.data.splice(0, 20));
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, []);

  return { posts, loading };
};

export default usePresenter;
