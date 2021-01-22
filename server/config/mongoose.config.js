const mongoose = require("mongoose");
const db = "author-db"


mongoose.connect(`mongodb://localhost/${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`you have connect to the ${db}`))
.catch((err)=>console.log(err))

require("../models/authors.models");