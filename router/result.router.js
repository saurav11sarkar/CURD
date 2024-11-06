const result = require('express').Router();
const path = require('path');
const multer  = require('multer');
const { postFile, getAllFile, getOneFile, putOneFile, deleteOneFile } = require('../controller/result.controller');

// ------------file uplode-----------------------------
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const resultFile = Date.now() + "-" + file.originalname;
      cb(null, resultFile);
    }
  })
  
  const upload = multer({ storage: storage })

//   ------------------ file uplode end ----------------

// result.get('/api/result', (req, res) => {
//     res.status(200).sendFile(path.join(__dirname, '../views', 'result.html'));
// });

result.post('/api/result', upload.single('filePath') ,postFile);
result.get('/api/result',getAllFile);
result.get('/api/result/:id', getOneFile);
result.put('/api/result/:id',upload.single('filePath'), putOneFile);
result.delete('/api/result/:id', deleteOneFile);


module.exports = result;