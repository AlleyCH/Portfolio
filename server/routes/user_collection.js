let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//let jwt = require('jsonwebtoken');

let passport = require('passport');

let userController = require('../controllers/user_collection');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the Book List page - READ Operation */
router.get('/', userController.displayList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, userController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth, userController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', requireAuth, userController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', requireAuth, userController.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', requireAuth, userController.performDelete);

module.exports = router;



/* let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our user collection from models

let User = require("../models/user_collection");

// GET route for user list  page 
router.get('/', (req, res, next) => {
    User.find((err, user_collectionList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {  
            res.render('user_collection/list', { title: 'user collection', user_collection: user_collectionList} );
            console.log(user_collectionList);
        }
    });
});


// GET Route for diplaying the add contact list page -CREATE OPERATION 
router.get('/add', (req, res, next) =>{
    res.render('user_collection/add', { title: 'Add User'} );
});


// POST Route for the add contact list page -CREATE OPERATION 
router.post('/add', (req, res, next) => {
    let newuser_collection = user_collection({
        "contactname": req.body.contactname,
        "contactnumber": req.body.contactnumber, 
        "emailaddress": req.body.emailaddress
    });

    User.create(newUser, (err, User) =>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/user-list');
        }
    });
});







// GET Route for displaying the Edit contact list page -UPDATE OPERATION 
router.get('/edit/:id',(req, res, next) => {
    let id = req.params.id;
    User.findById(id, (err, userToEdit) =>{
        if (err){
            console.log(err);
            res.end(err);
        }
        else{
            res.render('user_collection/edit', {title: 'Edit User', user_collection: userToEdit});
        }
    });
});

// POST Route for the Edit contact list page -UPDATE OPERATION 
router.post('/edit/:id', (req, res, next) => {
   let id = req._construct.params.id

    let newUser = User({
        "_id": id,
        "contactname":req.body.name,
        "contactnumber": req.body.contactnumber, 
        "email":req.body.emailaddress,
    });
    User.updateOne({_id: id}, updatedUser, (err) =>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/user-list');
        }
    });
});

// GET to perform user deletion - DELETE OPERATION 
router.get('/delete/:id', (req, res, next) =>{
    let id = req.params.id;

    User.remove({_id: id}, (err) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/user-list');
        }
    })
});


module.exports = router; */