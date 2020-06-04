import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('listagem de usuario');
  response.json(['josi', 'diego']);
});

app.listen(3333);