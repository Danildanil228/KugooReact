const express = require('express');
const cors = require('cors');
const pool = require('./server');

const app = express();

//CORS
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

/* Маршруты цен
app.get('/price', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM price');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Ошибка сервера');
  }
});

// отзывы
app.get('/complaint', async (req, res) => {
  try{
    const result = await pool.query('SELECT * FROM complaint');
    res.json(result.rows);
  } catch (err){
    console.error(err);
    res.status(500).send('ОШИБКА сервера');
  }
})
  
app.get('/teamperson', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM teamperson');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Ошибка сервера');
  }
});
*/

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
