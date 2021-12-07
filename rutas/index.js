const productosRouter = require('./productosRouter');//se llama el modulo de routing de los productos
const nuevaRouter = require('./nuevaRouting');
const usersRouter = require('./usersRouting');
const categoriasRouter = require('./categoriasRouting');
const express = require('express');
/**aplicamos el enrutamiento */
function routerApi(app){
  const router =express.Router();
  app.use('/api/v1',router);
  router.use('/productos',productosRouter);
  router.use('/nueva',nuevaRouter);
  router.use('/users',usersRouter);
  router.use('/categorias',categoriasRouter);
}
module.exports = routerApi;
