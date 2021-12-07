const express = require('express');//traemos a express
const routerApi = require('./rutas/index');//llamamos a la carpeta que se encarga del enrutamiento(el index lo toma por default).
const app = express();//e creala app
const port = 3000;//asignamos un puerto,normalmente siempre entre los 3000
app.use(express.json());//middleware
/*a continuacion se dice que si se pone un / en la ruta
lo que hara el servidor sera mandar el mensaje */
app.get('/',(req,res) =>{
  res.send('Hola server de express');
})

/*tambien podemos enviar json que es lo
mas comun de hacerse,dandole instrucciones
de enviar un objeto y diciendole como lo renderizara
REQuest->peticion
RESponse-> respuesta
ruta = endpoint*/

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

/**usando parametro, un parametro en una ruta se
 * identifica con :
 * en este caso si la de get productos/filtro estuviera despues de
 * esta funcion al poner el /filtro se tomaria como el id,por lo que
 * generaria un problema,por lo que hay que tener cuidado con esto
 * y siempre poner las rutas especificas arriba de las dinamicas
*/


/*le decimos al server que escuche en el puerto seleccionado */
app.listen(port,()=>{
console.log('mi puerto es' + port);
});
routerApi(app);
