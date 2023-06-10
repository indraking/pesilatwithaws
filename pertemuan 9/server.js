const express = require("express");
const cors = require("cors");

const app = express();
var corsOption = {
    origin : "http://localhost:8000"
};
app.use(cors(corsOption));
// parse request of content-type aplication/json
app.use(express.json());
// parse request of content-type = application/x-www-form-urlencoded
app.use(express.urlencoded({
    extended:true
}));
const db = require('./app/models');
db.sequelizeConnection.sync()
    .then(()=> {
        console.log("Synced db.");
    }) .catch((err) =>{
        console.log("failed to sync db : "+err.message);
    });

    // Import controller
    const bookController = require('./app/controllers/book.controller');
    // create book
    app.post("/",(req,res) => {
        console.log('>> create book api');
        bookController.create(req,res);
    });
    //  find all books router
    app.get("/", (req,res)=>{
        bookController.findAll(req, res)
    });
    app.get("/:id", (req,res)=>{
        bookController.findOne(req,res)
    });
    // delete book with an id route
    app.delete("/:id", (req,res)=>{
        bookController.delete(req,res)
    })
    // Set port listen for request
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, ()=>  {
        console.log(`Server is running on port ${PORT}`);
    }); 
