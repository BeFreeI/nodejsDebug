const { PORT } = require('./common/config');
var express = require('express');
var app = express();
var user = require('./controllers/usercontroller');
var game = require('./controllers/gamecontroller');
const sequelize = require('./db');


app.use(express.json());
app.use('/api/auth', user);
app.use(require('./middleware/validate-session'))
app.use('/api/game', game);
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, function() {
    console.log("App is listening on 4000");
  })
})
