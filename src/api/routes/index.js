const { Router } = require("express");
const recipesRoute = require("./recipes/index")

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/getRecipes', recipesRoute)

module.exports = router;