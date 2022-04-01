const { Router } = require("express");
const recipesRoute = require("./recipes/index");
const usersRoute = require('./users/index');

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/getRecipes', recipesRoute);
router.use('/users', usersRoute);

module.exports = router;