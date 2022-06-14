const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const authMiddleware = require("../middleware/authMiddleware");
const path = require('path');
const multer = require('multer');



const storage = multer.diskStorage({
    filename: function (req, file, callback) {
    callback(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname));
  },
  destination: function (req, file, callback) {
    
    callback(null, path.join(__dirname,'../../public/images/home'));
  }
  
});

const upload = multer({storage:storage});



router.get('/product', productsController.productEdit);
router.get('/productCreate', productsController.productCreate);
router.post('/addCar', authMiddleware,productsController.addToCar);


/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.home); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.productCreate); 
router.post('/',upload.single('product-image'),productsController.productStore); 


/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', productsController.productDetail); 

/*** UPDATE ONE PRODUCT ***/
router.get('/edit/:id', productsController.productEdit);
router.patch('/edit/:id',upload.single('product-image'), productsController.productUpdate); 

/*** DELETE ONE PRODUCT ***/
router.delete('/delete/:id', productsController.delete);



module.exports= router;
