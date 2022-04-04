const { Router} = require("express");
const router = Router();
const passport = require('passport');
const initializePassport = require('./passport-config');
const bcrypt = require('bcrypt')
const flash = require('express-flash');
const session = require('express-session');
const {Usuario} = require('../../db');
const jwt = require('jsonwebtoken');

initializePassport(passport, async (email) => {
  return Usuario.findOne({
    email: email
  });
})

router.post('/login', async (req, res) => {
  console.log(req.body)
  const {email, password} = req.body.form;
  if (email && password) {
    const user = await Usuario.findAll({
      where: {
        email: email
      }
    });
    if (!user[0]) {
      res.send({message: "incorrect Password or Email"})
    } else {
      await bcrypt.compare(password, user[0].password)
          .then(result => {
            if (result) {
              jwt.sign(user[0].email, "secret", {},  (err, token) => {
                console.log(token)
                res.json({token})
              })
            } else {
              res.send({message: "incorrect Password or Email"})
            }
          })
    }
  } else {
    res.send({message: "Missing parameters"})
  }
})

router.post("/isLog", async (req, res) => {
  const { token } = req.body;
  console.log(token)
  var userEmail = "";
  await jwt.verify(token, "secret", {}, (err, authData) => {
    userEmail = authData
  });
  if (userEmail) {
    const userDb = await Usuario.findOne({where: {email: userEmail}});
    res.send(userDb);
  } else res.send(false);
});

router.post('/register', async (req, res) => {
  const {username, email, password} = req.body.form;
  if (username && email && password) {
    const user = await Usuario.findAll({
      where: {
        email: email
      }
    });
    if (user[0]) {
      res.send({message: "An account with that email already exists"})
    } else {
      try {
        let encrypted = "";
        await bcrypt.hash(password, 10)
            .then(hash => encrypted = hash)
            .catch(e => console.log(e))

        const newUser = await new Usuario({
          username: username,
          email: email,
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