import { useState } from 'react';

const usePresenter = ({ enableSearchMode, isSearchModeEnabled, search }) => {
  const [rectangleContent, setRectangleContent] = useState(null);
  const [isButtonClicked, setButtonClicked] = useState(false);
  const [isCloseButtonClicked, setCloseButtonClicked] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const buttonText = isButtonClicked ? 'Хмм...' : 'Мне повезет!';

  const onButtonClick = () => {
    setButtonClicked(true);

    setTimeout(() => {
      setButtonClicked(false);
      setRectangleContent(Math.floor(Math.random() * 1000) + 1);
    }, 5000);
  };

  const onCloseButtonClick = () => {
    setCloseButtonClicked(true);
  };

  const onSearchButtonClick = () => {
    enableSearchMode();
    search(inputValue);
  };

  const onInput = (event) => {
    setInputValue(event.target.value);
  };

  return {
    rectangleContent,
    setRectangleContent,
    isButtonClicked,
    onButtonClick,
    buttonText,
    isCloseButtonClicked,
    onCloseButtonClick,
    inputValue,
    setInputValue,
    onSearchButtonClick,
    onInput,
    enableSearchMode,
    search,
  };
};

export default usePresenter;
