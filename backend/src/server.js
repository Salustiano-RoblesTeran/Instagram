const express = require('express');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
    res.send("Todo ok");
})

app.listen(process.env.PORT || 3333)