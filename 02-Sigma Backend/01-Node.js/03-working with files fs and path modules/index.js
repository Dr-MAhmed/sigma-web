const { error } = require("console");
const fs = require("fs");
// fs modules & callback hell (pyramid of doom)...
fs.writeFile(
  "hunny.txt",
  "Hunny is a good boy and he is a full stack developer now",
  () => {
    console.log("File created successfully");
    fs.readFile("hunny.txt", (error, data) => {
      console.log(error, data.toString());
    });
    // again
    fs.writeFile(
      "hunny.txt",
      "Hunny is a good boy and he is a full stack developer now",
      () => {
        console.log("File created successfully");
        fs.readFile("hunny.txt", (error, data) => {
          console.log(error, data.toString());
        });
        // again
        fs.writeFile(
          "hunny.txt",
          "Hunny is a good boy and he is a full stack developer now",
          () => {
            console.log("File created successfully");
            // readFile
            fs.readFile("hunny.txt", (error, data) => {
              console.log(error, data.toString());
            });
            // again
            fs.writeFile("hunny2.txt", "This is a second file", () => {
              console.log("Second file created");
            });
            // appendFile
            fs.appendFile("hunny.txt", "hunny2.txt", (err, data) => {
              console.log(data);
            });
          }
        );
      }
    );
  }
);

// Path-modules
