const express = require('express');//traemos a express
const faker = require('faker');//traemos esto para poder importar data fake
const app = express();//e creala app
const port = 3000;//asignamos un puerto,normalmente siempre entre los 3000
/*a continuacion se dice que si se pone un / en la ruta
lo que hara el servidor sera mandar el mensaje */
app.get('/',(req,res) =>{
  res.send('Hola server de express');
})
app.get('/nueva',(req,res) =>{
  res.send('Hola soy otra ruta');
})
/*tambien podemos enviar json que es lo
mas comun de hacerse,dandole instrucciones
de enviar un objeto y diciendole como lo renderizara
REQuest->peticion
RESponse-> respuesta
ruta = endpoint*/
app.get('/productos',(req,res) =>{
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
 })
// app.get('/productos',(req,res) =>{
//   res.json({
//     nombre: 'Producto 1',
//     precio: 1000
//   },{
//     nombre: 'Producto 2',
//     precio: 2000,
//   });
// })
/**usando parametros query */
app.get('/users',(req,res)=>{
  const {limit, offset} = req.query;
  if(limit && offset){
    res.json({
      limit,
      offset,
    });
  }
  else{
    res.send('No hay parametros');
  }
});
/**usando parametro, un parametro en una ruta se
 * identifica con :
 * en este caso si la de get productos/filtro estuviera despues de
 * esta funcion al poner el /filtro se tomaria como el id,por lo que
 * generaria un problema,por lo que hay que tener cuidado con esto
 * y siempre poner las rutas especificas arriba de las dinamicas
*/
// app.get('/productos/:id',(req,res)=>{
//   const {id} = req.params;//guardamos los parametros en una variable
//   res.json({
//     id,
//     nombre: 'Producto 1',
//     precio: 1000,
//   })
// })
app.get('/categoria/:idCat/productos/:idProd',(req,res)=>{
  const {idCat, idProd} = req.params;
  res.json({
    idCat,
    idProd,
  })
})
app.get('/categoria:id',(req,res)=>{
  const {id} = req.params;
  res.json({
    id,
    blue: true,
    green: false,
  })
})

/*le decimos al server que escuche en el puerto seleccionado */
app.listen(port,()=>{
console.log('mi puerto es' + port);
});
