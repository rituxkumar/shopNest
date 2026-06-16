const express = require("express");



const { protect } = require("../middleware/authMiddleware");
const { admin } = require("../middleware/adminMiddleware");
const {getProducts,getProductById,createProduct,updateProduct,deleteProduct} = require("../controller/productController");

const multer = require('multer');
const upload = multer({dest:'uploads/'});
const cloudinary = require('../config/cloudinary');

const router = express.Router();

router.route('/').get(getProducts).post(protect,admin,upload.single('image'),createProduct);
router.route('/:id').get(getProductById).put(protect,admin,updateProduct).delete(protect,admin,deleteProduct);
router.get("/cloud-test", async (req, res) => {
  try {
    const result = await cloudinary.api.ping();
    res.json(result);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: err.message,
      name:err.name,
      stack:err.stack
    });
  }
});

module.exports=router;

