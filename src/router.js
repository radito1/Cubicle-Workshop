const router = require('express').Router();

const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');

app.use(homeController);
app.use('/cubes', cubeController);
app.get('*', (req,res) => {
    res.redirect('404');
});

module.exports = router;