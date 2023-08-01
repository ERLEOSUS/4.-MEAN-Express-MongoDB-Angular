const express=require('express');
const router=express.Router();
const gasto=require('../controllers/gastos.controller.js');
router.get('/',gasto.getGastos);
router.post('/', gasto.createGastos);
router.get('/:id',gasto.getGasto);
router.put('/:id',gasto.editGasto);
//router.delete('/:id', gasto.deleteGasto);
module.exports=router;