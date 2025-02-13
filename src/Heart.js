import React, { useEffect, useState } from 'react';
import './Heart.css';

const Heart = ({ left, fontSize, id, onRemove }) => {
  const [top, setTop] = useState(window.innerHeight); // Начальная позиция сердечка снизу

  useEffect(() => {
    const interval = setInterval(() => {
      setTop((prevTop) => prevTop - 1); // Двигаем сердечко вверх
    }, 16); // 60 FPS

    if (top <= -50) {
      clearInterval(interval);
      onRemove(id); // Удаляем сердечко после того, как оно выйдет за пределы экрана
    }

    return () => clearInterval(interval);
  }, [top, id, onRemove]);

  return (
    <div
      className="heart"
      style={{
        left: left,
        fontSize: fontSize,
        top: top + 'px',
        position: 'absolute',
      }}
    >
      ❤️
    </div>
  );
};

export default Heart;
