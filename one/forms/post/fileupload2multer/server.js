const express = require("express");
const app = express();
const port = 3000;

// Require the upload middleware
const upload = require("./upload");

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/" + "fileupload.html");
});

// Set up a route for file uploads
app.post("/upload", upload.single("file"), (req, res) => {
  // Handle the uploaded file
  res.json({ message: "File uploaded successfully!" });
});

//Uploading multiple files
app.post("/uploadmultiple", upload.array("myFiles", 12), (req, res, next) => {
  const files = req.files;
  if (!files) {
    const error = new Error("Please choose files");
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(files);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
