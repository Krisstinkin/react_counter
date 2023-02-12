import React from 'react'; //делается для того, чтобы React вообще работал
import ReactDOM from 'react-dom/client'; //нужен для того, чтобы мы вообще могли вставлять на нашу страницу какие-либо HTML элементы
import './index.css'; //делаем импорт стилей
import App from './App'; //импортируем компонент


const root = ReactDOM.createRoot(document.getElementById('root')); 
//сюда будем добавлять все наши компоненты, чтобы они появлялись на веб-страницы (если будем писать что-то не только в главном компоненте APP)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


