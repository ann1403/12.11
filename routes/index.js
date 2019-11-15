const express = require('express');
const router = express.Router();

const usersSchema = require('../schemas/userSchema');
const UserModel = require("../models/userModel");
const artSchema = require('../schemas/artSchema');
const artModel = require("../models/artModel");

const Ajv = require('ajv');
const ajv = new Ajv();


const { createOne } = require("../controllers/saveuserController");
const { loginOne } = require("../controllers/loginuserController");


router.post('/', async(req, res) => {
    for (let i = 0; i < data.lenght; i++) {
        // const new_user = await new UserModel({});
        //вивести все з бази даних
    }
    res.render('index');
});
//нова схема для артіклас
router.post('/artCreate', async(req, res) => {
    const new_art = await new artModel({});
    await createOne();
    res.redirect('/artCreate');
});
router.get('/auth', function(req, res, next) {
    UserModel.find()
        .then(data => {
            res.render('auth', { users: data });
        })
        .catch(err => { if (err) throw err });
});
router.post('/auth', async(req, res) => {
    const new_user = await new UserModel({});
    new_user.pwd = await new_user.hashPwd(req.body.pwd);
    await createOne();
    res.redirect('/auth');
});
router.post('/login', async(req, res) => {
    const { login, pwd } = req.body;
    const user = await loginOne(login, pwd);
    console.log(user)

    if (!user) {
        res.render('auth', { err: 'User not found!' });
    }
    const hashed = await user.hashPwd(pwd);
    if (hashed === user.pwd) {
        res.render('createArt', { users: data });
    } else {
        res.render('auth', { err: 'Login or password is incorrect!' });
    }
});

router.post('/article/:id', async(req, res) => {
    artModel.findById(req.params.id, function(d) {
        res.render('article', { arts: data });
    });
});


module.exports = router;