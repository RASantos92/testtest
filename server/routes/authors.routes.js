const authors = require("../controller/authors.controller"); 

module.exports = (app) => {
    
    app.get("/authors", authors.findAll) 
    app.post("/authors", authors.create) 
    app.get("/authors/:id", authors.findOne) 
    app.delete("/authors/:id", authors.delete) 
    app.put("/authors/:id", authors.update) 
}