const db = require('../models');
const Book = db.book;
const Op = db.Sequelize.Op;
//  create book method
exports.create = (req,res) => {
    console.log('>> book controller api');
    //  validate request
    if(!req.body.title){
        res.status(400).send({
            message:"Content can't be empty!"
        });
        return;
    } 
    console.log('>> Create book object');
    const book = {
        id: req.body.id,
        title:req.body.title,
        author: req.body.author,
        release_data: req.body.release_date,
        subject: req.body.subject
    };
    Book.create(book)
    .then(data => {
        console.log('>> insert book successfully');
        res.send(data);
    })
    .catch(err =>{
        console.log('>> insert book failed');
        res.status(500).send({
            message:"Error occured while inserting book"
        });
    });


};

// Get all book method
exports.findAll = (req, res) => {
    Book.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error while retrieving books"
            });
        });
};

// Find a single books with an id
exports.findOne = (req,res)=>{
    Book.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(data=>{
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "error while finding book"
        });
    });
}

//  delete a book with an id
exports.delete = (req,res) => {
    Book.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(
        res.send({
            message:`Success delete book with id = ${req.params.id}`
        })
    )
    .catch(err => {
        res.status(500).send({
            message : `Couldn't delete book with id = ${req.params.id}`
        });
    });
}