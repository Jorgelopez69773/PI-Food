const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const RecipesRoutes=require('./RecipesRoutes.js');
const typesRoute=require('./typesRoute.js');
const RecipeRoutes= require('./RecipeRoutes.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/recipes',RecipesRoutes);
router.use('/types',typesRoute);
router.use('/recipe',RecipeRoutes);

module.exports = router;
