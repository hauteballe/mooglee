import { useState } from 'react';

const usePresenter = () => {
  const [rectangleContent, setRectangleContent] = useState(null);
  const [isButtonClicked, setButtonClicked] = useState(false);

  const buttonText = isButtonClicked ? 'Хмм...' : 'Мне повезет!';

  const onButtonClick = () => {
    setButtonClicked(true);

    setTimeout(() => {
      setButtonClicked(false);
      setRectangleContent(Math.floor(Math.random() * 1000) + 1);
    }, 5000);
  };

  return [
    rectangleContent,
    setRectangleContent,
    isButtonClicked,
    onButtonClick,
    buttonText,
  ];
};

export default usePresenter;
