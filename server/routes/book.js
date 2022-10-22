let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our user collection 

let Book = require("../models/book");

// GET route for user list  page 

router.get('/', (req, res, next) => {
    Book.find((err, bookList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('book/list', { title: 'Book List', BookList: bookList} );
            console.log(bookList);
        }
    });
});

module.exports = router;
