const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Thiết lập multer để lưu file vào thư mục 'images'
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/');
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const originalName = file.originalname;
    const extension = path.extname(originalName);
    const basename = path.basename(originalName, extension);
    const newName = `${basename}-${timestamp}${extension}`;
    cb(null, newName);
  }
});

const upload = multer({ storage: storage });

// Route để xử lý việc upload file
app.post('/upload', upload.single('image'), (req, res) => {
  res.send(`File uploaded successfully: ${req.file.filename}`);
});

// Route để public các file trong thư mục 'images'
app.use('/images', express.static(path.join(__dirname, 'images')));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
