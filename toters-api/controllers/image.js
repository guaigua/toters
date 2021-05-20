
const multer = require("multer");

//upload Image
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const uploadImg = multer({ storage: storage }).single("urlphoto");

//export controller
module.exports = {  
  uploadImg
};
