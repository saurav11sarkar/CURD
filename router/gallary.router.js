const gallary = require('express').Router();
const multer  = require('multer');
const { postgallary, getAllGallary, getOneGallary, putGallary, deleteGallary } = require('../controller/gallary.controller');

// ------------image uplode-----------------------------
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const imageFile = Date.now() + "-" + file.originalname;
      cb(null, imageFile);
    }
  })
  
  const upload = multer({ storage: storage })

//   ------------------ image uplode end ----------------

gallary.post("/api/gallary", upload.single('imageUrl'), postgallary);
gallary.get("/api/gallary", getAllGallary);
gallary.get("/api/gallary/:id", getOneGallary);
gallary.put("/api/gallary/:id", upload.single('imageUrl'), putGallary);
gallary.delete("/api/gallary/:id",  deleteGallary);


module.exports = gallary;