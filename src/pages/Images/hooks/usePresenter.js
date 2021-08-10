import { useState, useEffect } from 'react';
import axios from 'axios';

const usePresenter = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos').then((res) => {
      console.log(res);
      setPosts(res.data.splice(0, 20));
      setLoading(false);
    });
  }, []);

  return { posts, loading };
};

export default usePresenter;
