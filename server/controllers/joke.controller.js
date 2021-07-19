
const Joke = require("../models/joke.model");

module.exports.findAllJokes = (req, res) => {
    Joke.find()
    .then(allJokes => res.json({ jokes: allJokes }))
    .catch(err => res.json({ message: "Something went wrong", error: err}));
};

module.exports.findOneJoke = (req, res) => {
    console.log("finding joke")
    Joke.findOne({ _id: req.params.id })
    .then(oneJoke => res.json({ joke: oneJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err}));
};

module.exports.createNewJoke = (req, res) => {
    console.log("i am creating a  joke")
    console.log("this is req.body: ", req.body)
    Joke.create(req.body)
    .then(newJoke => res.json({ joke: newJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err}));
};

module.exports.updateJoke = (req, res) => {
    console.log("UPDATING!")
    Joke.updateOne({ _id: req.params.id }, req.body, { new: true })
    .then(updatedJoke => res.json({ joke: updatedJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err}));
};

module.exports.deleteJoke = (req, res) => {
    console.log("I am deleteing a Joke")
    console.log(req.body);
    Joke.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err}));
};