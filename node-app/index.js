const express = require('express');

const app = express();

app.get('/', (req, res) => res.json("API 4 TESTING"));
app.listen(process.env.PORT || 80);