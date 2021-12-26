const express = require('express');//traemos a express
const ProductsService = require('./../services/Productos.servicios')
const router = express.Router();
const service = new ProductsService();

router.get('/',async(req,res) =>{
  const productos = await service.buscar()
  res.json(productos);
});

//busca los status code en internet que deben salir dependiendo de lo que quieras hacer,ver final de archivo

router.get('/:id',async(req,res)=>{
  const {id} = req.params;//guardamos los parametros en una variable
  const product = await service.buscarUno(id)
  res.json(product)
  }
);
/**para atender un post realizado en la ruta
 * original en la contante body recibimos todo lo realizado en imsomnia o postman
 * la principal diferencia entre post y get es que get envia informacion a traves de la url
 * sin, embargo,esto es muy malo para el apartado de seguridad, por lo que es mejor emplear un
 * metodo post en el envio de informacion,ya que este envia peticiones a traves del body.
 *
 */
router.post('/',async(req,res)=>{
  const body = req.body;
  const newProduct = await service.crear(body)
  res.json({
    newProduct
  })
})
//actualizacion de datos

/**Existen 2 formas de actualizacioj de datos, la primera con el metodo PUT, el cual
 * actualiza todos los datos que se tengan y el metodo PATCH el cual actualiza un producto en
 * especifico.
 */
router.patch('/:id',async(req,res)=>{
  const body = req.body;
  const {id} = req.params
  const product = await service.actualizar(id,body)

  res.json(product)
})
//delete +>borrar datos

router.delete('/:id',async(req,res)=>{
  const {id} = req.params
  const product = await service.borrar(id)
  res.json(product)
})
module.exports = router;

