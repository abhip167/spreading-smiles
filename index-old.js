//requiring path and fs modules
const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();
const port = 4000;

const jsonArr = [];

//joining path of directory
const directoryPath = path.join(__dirname, "test-dir");
//passsing directoryPath and callback function
const filesList = async function createFilesArray(directoryPath) {
  fs.readdir(directoryPath, function(err, files) {
    //handling error
    if (err) {
      return console.log("Unable to scan directory: " + err);
    } else {
      //listing all files using forEach
      files.forEach(function(file, index) {
        // Do whatever you want to do with the file
        if (!fs.lstatSync(directoryPath + "/" + file).isDirectory()) {
          jsonArr.push({
            id: index,
            imageName: file
          });
        } else {
          jsonArr[file] = [];
          createSubFolderArray(directoryPath + "/" + file, file);
        }
      });
    }
  });
  return jsonArr;
};

function createSubFolderArray(path, file) {
  const subFolderName = file;
  fs.readdir(path, function(err, subfiles) {
    //handling error
    if (err) {
      return console.log("Unable to scan sub directory: " + err);
    }
    subfiles.forEach(function(subfile, index) {
      jsonArr[subFolderName].push({
        id: index,
        imageName: subfile
      });
      // console.log(jsonArr[subFolderName]);
      // console.log(jsonArr);
    });
  });
}
app.use(express.static("static"));
app.get("/", (req, res) => res.json({ data: jsonArr }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
