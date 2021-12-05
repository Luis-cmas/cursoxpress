const express = require('express');//traemos a express
const app = express();//e creala app
const port = 3000;//asignamos un puerto,normalmente siempre entre los 3000
/*a continuacion se dice que si se pone un / en la ruta
lo que hara el servidor sera mandar el mensaje */
app.get('/',(req,res) =>{
  res.send('Hola server de express');
})
/*le decimos al server que escuche en el puerto seleccionado */
app.listen(port,()=>{
console.log('mi puerto es' + port);
});
