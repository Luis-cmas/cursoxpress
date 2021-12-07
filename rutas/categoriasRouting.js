const express = require('express');
const router = express.Router();
/**endpoint especifico */
router.get('/:idCat/productos/:idProd',(req,res)=>{
  const {idCat, idProd} = req.params;
  res.json({
    idCat,
    idProd,
  })
})
/**endpoint dinamico */
router.get('/:id',(req,res)=>{
  const {id} = req.params;
  res.json({
    id,
    blue: true,
    green: false,
  })
})
module.exports = router;
