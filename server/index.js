// Подключение Express
const express = require('express');

const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Разрешить доступ с любого источника
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Разрешенные методы
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Разрешенные заголовки
  next();
});

app.use(express.json()); // Парсинг JSON тела запроса

// Маршрут по умолчанию
app.get('/', (req, res) => {
  res.send('Hello world');
});

app.post('/users', (req, res) => {
  const {email, password} = req.body;

  res.json({info: 'Все норм', email, password});
})

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});