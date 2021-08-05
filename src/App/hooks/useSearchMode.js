import { useState } from 'react';

const jsSearchResult = [
  {
    link: 'https://www.javascript.com/',
    title: 'JavaScript.com',
    description:
      'Ready to try JavaScript? Begin learning here by typing in your first name surrounded by quotation marks and ending ...',
  },
  {
    link: 'https://ru.wikipedia.org/wiki/JavaScript',
    title: 'JavaScript - Wikipedia',
    description:
      'JavaScript (/ˈdʒɑːvəˌskrɪpt/), often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm ...',
  },
  {
    link: 'https://www.w3schools.com/js/',
    title: 'JavaScript Tutorial - W3Schools',
    description:
      "JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced ...",
  },
];

const useSearchMode = () => {
  const [isSearchModeEnabled, setSearchModeEnabled] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState('');

  const enableSearchMode = () => {
    setSearchModeEnabled(true);
  };

  const disableSearchMode = () => {
    setSearchModeEnabled(false);
    setSearchResult([]);
  };

  const search = (text) => {
    setSearchText(text);
    if (text === 'javascript') {
      setSearchResult(jsSearchResult);
    } else {
      setSearchResult([]);
    }
  };

  return {
    isSearchModeEnabled,
    enableSearchMode,
    disableSearchMode,
    searchResult,
    search,
    searchText,
  };
};

export default useSearchMode;
