/* eslint-disable no-undef */
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const FaqRoute = require('./routes/faqRoute');

mongoose.connect('mongodb://localhost/appreciate-wealth', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use('/faqs', FaqRoute);

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});