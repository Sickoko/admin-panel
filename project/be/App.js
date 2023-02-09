console.log("its my app.js");

//import necessary module
const express = require("express");

const cors = require("cors");

const fs = require("fs");
const { response } = require("express");

///configuration of modules

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

//USERS

app.get("/users", (request, response) => {
  fs.readFile("./Public/data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file not found",
        data: [],
      });
    }

    const timerData = JSON.parse(readData);
    console.log(timerData);
    console.log(typeof timerData);

    response.json({
      status: "success",
      data: timerData,
    });
  });
});

app.post("/users", (request, response) => {
  console.log("post method");
  const body = request.body;
  console.log(body);

  const newUser = {
    id: Date.now().toString(),
    firstname: body.firstname,
    lastname: body.lastname,
    phonenumber: body.phonenumber,
    email: body.email,
  };

  fs.readFile("./Public/data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file does not exist",
        data: [],
      });
    }

    const dataObject = JSON.parse(readData);
    console.log(dataObject);
    console.log("========");
    dataObject.push(newUser);
    console.log(dataObject);

    fs.writeFile(
      "./Public/data/users.json",
      JSON.stringify(dataObject),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "Error during file write",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: dataObject,
        });
      }
    );
  });
});
app.delete("/users", (request, response) => {
  const body = request.body;
  fs.readFile("./Public/data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file not found",
        data: [],
      });
    }
    const readObject = JSON.parse(readData);
    const filteredObjects = readObject.filter((o) => o.id !== body.userId);
    fs.writeFile(
      "./Public/data/users.json",
      JSON.stringify(filteredObjects),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "write file error",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: filteredObjects,
        });
      }
    );
  });
});

//Products
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
