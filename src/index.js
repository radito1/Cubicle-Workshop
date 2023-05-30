const express = require('express');

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const routes = require('./router');

const app = express();

const PORT = 3000;
//Алтернативен вариянт
expressConfig(app);                      //require('./config/expressConfig')(app);
handlebarsConfig(app);                   //require('./config/hhandlebarsConfig')(app);

app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));