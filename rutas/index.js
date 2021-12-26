const productosRouter = require('./productosRouter');//se llama el modulo de routing de los productos
const nuevaRouter = require('./nuevaRouting');
const usersRouter = require('./usersRouting');
const categoriasRouter = require('./categoriasRouting');
const express = require('express');
/**aplicamos el enrutamiento
 * los enrutamientos sirven para simplificar y organizar de mejor manera el codigo
 * podiendo asi crear diferentes versiones de los mismos endpoints, para asi poder
 * ver su funcionamiento mientras se van desarrollando
 */
function routerApi(app){
  const router =express.Router();
  app.use('/api/v1',router);
  router.use('/productos',productosRouter);
  router.use('/nueva',nuevaRouter);
  router.use('/users',usersRouter);
  router.use('/categorias',categoriasRouter);
}
module.exports = routerApi;
