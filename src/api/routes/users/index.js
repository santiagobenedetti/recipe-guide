const { Router} = require("express");
const router = Router();
const passport = require('passport');
const initializePassport = require('./passport-config');
const bcrypt = require('bcrypt')
const flash = require('express-flash');
const session = require('express-session');
const {Usuario} = require('../../db');

initializePassport(passport, async (email) => {
  return Usuario.findOne({
    email: email
  });
})

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}))

router.post('/register', async (req, res) => {
  if (req.body.username && req.body.email && req.body.password) {
    const user = await Usuario.findAll({
      where: {
        email: req.body.email
      }
    });
    if (user[0]) {
      res.send({message: "An account with that email already exists"})
    } else {
      try {
        let encrypted = "";
        await bcrypt.hash(req.body.password, 10)
            .then(hash => encrypted = hash)
            .catch(e => console.log(e))

        const newUser = await new Usuario({
          username: req.body.username,
          email: req.body.email,
          password: encrypted
        });
        newUser.save();
        res.send(newUser);
      } catch (e) {
        console.log(e);
      }
    }
  } else {
    res.send({message: "Missing parameters"})
  }
})

module.exports = router;