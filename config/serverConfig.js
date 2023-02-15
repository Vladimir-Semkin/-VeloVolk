const express = require('express');

const cors = require('cors');
const ssr = require('../middleware/ssr');

const corsOption = { origin: ['https://api-maps.yandex.ru'] };
const config = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('public'));

  app.use(ssr);
  app.use(cors(corsOption));
};
module.exports = config;
