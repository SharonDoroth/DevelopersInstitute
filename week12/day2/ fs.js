//Exercise 1
// const fs = require("fs");

// fs.readFile("sample.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

//exercise 2
const fs = require("fs");

const content = "This is the content that will be written to the file.";

fs.writeFile("newFile.txt", content, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File created and content written successfully!");
});