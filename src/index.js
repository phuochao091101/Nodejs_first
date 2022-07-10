const express = require('express')
const morgan = require('morgan')
const { engine } = require ('express-handlebars');
const path = require('path');
const app = express()
const port = 3000
//connect route
const route=require('./routes')
//set static file
app.use(express.static(path.join(__dirname, 'public')))
//HTTP logger
app.use(morgan('combined'))
//Templete engine
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
console.log(path.join(__dirname, 'views'));
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})