require('@babel/register');
const express = require('express');
const config = require('./config/serverConfig');
const homeRouter = require('./routes/render/home.routes');
const coordinatsRouter = require('./routes/render/coordinats.routes');

const app = express();

const PORT = process.env.PORT ?? 3000;

config(app);
app.use('/', homeRouter);
app.use('/', coordinatsRouter);

app.listen(PORT, () => {
  console.log(`Serverv started at ${PORT}, port `);
});
