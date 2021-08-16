import { useState, useEffect } from 'react';
import axios from 'axios';

const usePresenter = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/photos'
        );
        const posts = response.data.splice(0, 20);
        setPosts(posts);
      } catch (error) {
        setError(
          'Упс, что-то пошло не так, попробуйте вернуться на сайт позже'
        );
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return { posts, loading, error };
};

export default usePresenter;