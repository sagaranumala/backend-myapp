const express=require('express');
const router=express.Router();
const {
    getData1,
    setData1,
    updateData1,
    deleteData1
} = require('../controllers/routeController');

router.route('/').get(getData1).post(setData1)
router.route('/:id').delete(deleteData1).put(updateData1)

module.exports=router;