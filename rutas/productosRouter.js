const express = require('express');//traemos a express
const faker = require('faker');//traemos esto para poder importar data fake
const router = express.Router();

router.get('/',(req,res) =>{
  const productos = [];
  const {size} = req.query;
  const limit = size || 10;
  /**con cada iteracion se genera un producto con nombre
   * precioe imagen, en este caso si se agrega un size como parametro
   * se realizaran ese numero de data fake
   */
  for(let index = 0;index < limit; index++){
    productos.push({
      nombre: faker.commerce.productName(),
      precio: parseInt(faker.commerce.price(),10),//el 10 indica la base
      imagen: faker.image.imageUrl(),
    })
  }
  res.json(productos);
});

router.get('/:id',(req,res)=>{
  const {id} = req.params;//guardamos los parametros en una variable
  res.json({
    id,
    nombre: 'Producto 1',
    precio: 1000,
  })
});
/**para atender un post realizado en la ruta
 * original en la contante body recibimos todo lo realizado en imsomnia o postman
 *
 */
router.post('/',(req,res)=>{
  const body = req.body;
  res.json({
    message: 'creado',
    data:body
  })
})
module.exports = router;
