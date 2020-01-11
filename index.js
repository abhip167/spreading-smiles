//requiring path and fs modules
const path = require("path");
const fs = require("fs");
const express = require("express");
var cors = require("cors");

const port = 1234;

//joining path of directory
const directoryPath = path.join(__dirname, "static");
const app = express();
app.use(cors());
app.use(express.static(directoryPath));
app.use("/assets", express.static(path.join(__dirname, "assets")));

//get all images api
app.get("/images", (req, res) => {
  // var imgArray = [];
  //passsing directoryPath and callback function
  // fs.readdir(directoryPath, function(err, files) {
  //   //handling error
  //   if (err) {
  //     return console.log("Unable to scan directory: " + err);
  //   }
  //   // console.log(files);

  //   //listing all files using forEach
  //   files.forEach(function(file) {
  //     // Do whatever you want to do with the file
  //     // var newImageName = "http://localhost:3000/assets/" + file;
  //     imgArray.push(file);
  //     // imgArray.push(file);
  //     // console.log(newImageName);
  //   });

  //   // console.log(imgArray)
  //   res.json({ data: imgArray });
  //   console.log(imgArray);
  // });
  //   Return a list of files of the specified fileTypes in the provided dir,
  // with the file path relative to the given dir
  // dir: path of the directory you want to search the files for
  // fileTypes: array of file types you are search files, ex: ['.txt', '.jpg']
  function getFilesFromDir(dir, fileTypes) {
    var filesToReturn = {};
    function walkDir(currentPath) {
      var files = fs.readdirSync(currentPath);
      for (var i in files) {
        var curFile = path.join(currentPath, files[i]);
        if (fs.statSync(curFile).isFile()) {
          filesToReturn[`"${files[i]}"`] = files[i];
        } else if (fs.statSync(curFile).isDirectory()) {
          const currentArray = [];

          // walkDir(curFile);
          var subfiles = fs.readdirSync(curFile);
          for (var j in subfiles) {
            currentArray.push(subfiles[j]);
          }
          filesToReturn[files[i]] = currentArray;
          // filesToReturn.push(subfilesToReturn);
        }
      }
    }
    walkDir(dir);
    return filesToReturn;
  }

  //print the txt files in the current directory
  // getFilesFromDir("./assets", [".png"]);
  res.json(getFilesFromDir("./assets", [".png"]));
});

//start server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
