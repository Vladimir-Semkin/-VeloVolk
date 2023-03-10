require('@babel/register');
const express = require('express');
const config = require('./config/serverConfig');
const homeRouter = require('./routes/render/home.routes');
const coordinatsRouter = require('./routes/render/coordinats.routes');
const loginRouter = require('./routes/render/login.routes');
const myTravelRouter = require('./routes/render/myTravel.routes');
const apiMapRouter = require('./routes/api/map.routes');
const changemapRouter = require('./routes/render/changeMap.routes');
const mainRouter = require('./routes/render/main.routes');

const app = express();

const PORT = process.env.PORT ?? 3000;

config(app);
app.use('/', homeRouter);
app.use('/', coordinatsRouter);
app.use('/', loginRouter);
app.use('/', myTravelRouter);
app.use('/api', apiMapRouter);
app.use('/', changemapRouter);
app.use('/', mainRouter);

app.listen(PORT, () => {
  console.log(`Serverv started at ${PORT}, port `);
});
