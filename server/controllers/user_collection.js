let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');


//let jwt = require('jsonwebtoken');

// create a reference to the model
let User = require('../models/user_collection');

module.exports.displayList = (req, res, next) => {
    User.find((err, user_collectionList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(BookList);

            res.render('user_collection/list', 
            {title: 'User collection', 
            user_collection:  user_collectionList, 
            displayName: req.user ? req.user.displayName : ''});      
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('user_collection/add', {title: 'Add User contact', 
    displayName: req.user ? req.user.displayName : ''})          
}

module.exports.processAddPage = (req, res, next) => {
    let newUser = User({
        "contactname": req.body.contactname,
        "contactnumber": req.body.contactnumber,
        "emailaddress": req.body.emailaddress,
    });

    User.create(newUser, (err, User) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/user-list');
        }
    });

}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    User.findById(id, (err, userToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('user_collection/edit', {title: 'Edit User', user_collection: userToEdit, 
            displayName: req.user ? req.user.displayName : ''})
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedUser = User({
        "_id": id,
        "contactname": req.body.contactname,
        "contactnumber": req.body.contactnumber,
        "emailaddress": req.body.emailaddress,
    });

    User.updateOne({_id: id}, updatedUser, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/user-list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    User.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the user list
             res.redirect('/user-list');
        }
    });
}