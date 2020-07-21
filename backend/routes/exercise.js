const express = require('express');
const exerciseController=require('../controllers/exercise');


const router = express.Router();



router.get('/', exerciseController.getExercises);

router.post('/add',exerciseController.postExercise);

router.get('/:id',exerciseController.getExercise);

router.delete('/:id',exerciseController.deleteExercise);

router.post('/update/:id',exerciseController.updateExercise);


module.exports = router;
