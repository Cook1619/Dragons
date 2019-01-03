const express =  require('express');
const app = express();
const GenerationEngine =  require("./generation/engine");
const engine =  new GenerationEngine();

engine.start();

app.get("/dragon/new", (req,res) => {
    res.json({dragon: engine.generation.newDragon()});
});

module.exports = app;