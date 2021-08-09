import { useState, useEffect } from 'react';
import {
  useParams
} from "react-router-dom";

import { jsSearchResult } from '../../../const';

const usePresenter = () => {

  let { id } = useParams(); 
  const [item, setItem] = useState(null);

  const filterSearchResult = ( id ) => {
    let result =  jsSearchResult.filter(item => item.id === id)[0];
    return result;
  }


  useEffect(() => {
    let item  = filterSearchResult(id);
    setItem(item);
  }, [id]);
return {item};
}

export default usePresenter;