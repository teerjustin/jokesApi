const JokeController = require("../controllers/joke.controller");

module.exports = (app) => {

    //read (get)
    app.get("/api/jokes", JokeController.findAllJokes);

    app.get("/api/jokes/:id", JokeController.findOneJoke);

    //create (post)
    app.post("/api/jokes/new", JokeController.createNewJoke);


    //update (get)
    app.get("/api/jokes/update/:id", JokeController.updateJoke);

    //delete (delete)
    app.delete("/api/jokes/delete/:id", JokeController.deleteJoke);
}

