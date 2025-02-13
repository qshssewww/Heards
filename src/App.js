import React, { useState, useEffect } from 'react';
import './App.css';
import Heart from './Heart';

function App() {
  const [hearts, setHearts] = useState([]);
  const [messageIndex, setMessageIndex] = useState(0); // Индекс текущего сообщения
  const messages = ['Тапани меняяяяяя!!!!!!!!!!!', 'Ура', 'Приветик', 'Как дела??', 'Седня ваще 14 февраля', 'Эта открыточка', 'Для', 'Тебя!', 'Моей', 'Милой', 'Красивой', 'Лапочке', 'Будь', 'Всегда', 'Счастливой', 'Смешной', 'И...','...', '...', 'ПИКМИ ахвахывхыа', 'Короче реально', 'Кайфы чтоб все!💋💋', '💋'];

  useEffect(() => {
    const interval = setInterval(() => {
      addHeart();
    }, 300);

    return () => clearInterval(interval); // Очистка при размонтировании компонента
  }, []);

  const addHeart = () => {
    const heart = {
      id: Date.now(), // Уникальный идентификатор
      left: Math.random() * window.innerWidth + 'px',
      fontSize: Math.random() * 20 + 20 + 'px',
    };
    setHearts((prevHearts) => [...prevHearts, heart]);
  };

  const removeHeart = (id) => {
    setHearts((prevHearts) => prevHearts.filter(h => h.id !== id)); // Удаление сердечка по id
  };

  const handleClick = () => {
    if(messageIndex === messages.length - 2) {
      window.close();
    }
    // Обновляем индекс, чтобы следующее сообщение показывалось
    setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
  };

  return (
    <div className="App" onClick={handleClick}>
      <div className="message">{messages[messageIndex]}</div>
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          id={heart.id}
          left={heart.left}
          fontSize={heart.fontSize}
          onRemove={removeHeart}
        />
      ))}
    </div>
  );
}

export default App;
