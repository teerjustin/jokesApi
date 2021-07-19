const express = require("express");
const app = express();
const PORT = 1337;

require("./server/config/mongoose.config")

app.use(express.json(), express.urlencoded({ extended: true }))


const routerObj = require("./server/routes/joke.routes");
routerObj(app);

app.listen(PORT, ()=> console.log('>>> SERVER IS RUNNING ON PORT 1337 <<<'))