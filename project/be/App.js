console.log("its my app.js");

import express from "express";
import emp_router from "./Routes/users.js";
import role_router from "./Routes/user-roles.js";
const app = express();
const PORT = 8080;
app.use(express.json());
app.use(emp_router);
app.use(role_router);

//USERS
// app.get("/users/roles", (request, response) => {
//   fs.readFile("./Public/data/userRole.json", "utf-8", (readError, readData) => {
//     if (readError) {
//       response.json({
//         status: "file doesnt exit",
//       });
//     }
//     response.json({
//       status: "success",
//       data: JSON.parse(readData),
//     });
//   });
// });

app.get("/", (request, response) => {
  response.send("<h1>Admin Panel My SQL Conversion</h1>");
});
// app.post("/users", (request, response) => {
//   const body = request.body;

//   fs.readFile("./Public/data/users.json", "utf-8", (readError, readData) => {
//     if (readError) {
//       response.json({
//         status: "file does not exist",
//         data: [],
//       });
//     }

//     const dataObject = JSON.parse(readData);
//     fs.readFile(
//       "./Public/data/userRole.json",
//       "utf-8",
//       (readError, readData) => {
//         if (readError) {
//           response.json({
//             status: "file read error",
//             data: [],
//           });
//         }
//         const roleData = JSON.parse(readData);
//         const roleName = roleData.filter((role) => role.id === body.role)[0];
//         const newUser = {
//           firstname: body.firstname,
//           lastname: body.lastname,
//           email: body.email,
//           password: body.password,
//           address: body.address,
//           role: roleName,
//         };

//         dataObject.push(newUser);

//         fs.writeFile(
//           "./Public/data/users.json",
//           JSON.stringify(dataObject),
//           (writeError) => {
//             if (writeError) {
//               response.json({
//                 status: "Error during file write",
//                 data: [],
//               });
//             }
//             response.json({
//               status: "success",
//               data: dataObject,
//             });
//           }
//         );
//       }
//     );
//   });
// });
// app.delete("/users", (request, response) => {
//   const body = request.body;
//   fs.readFile("./Public/data/users.json", "utf-8", (readError, readData) => {
//     if (readError) {
//       response.json({
//         status: "file not found",
//         data: [],
//       });
//     }
//     const readObject = JSON.parse(readData);
//     const filteredObjects = readObject.filter((o) => o.id !== body.userId);
//     fs.writeFile(
//       "./Public/data/users.json",
//       JSON.stringify(filteredObjects),
//       (writeError) => {
//         if (writeError) {
//           response.json({
//             status: "write file error",
//             data: [],
//           });
//         }
//         response.json({
//           status: "success",
//           data: filteredObjects,
//         });
//       }
//     );
//   });
// });

//Products
// app.get("/products", (request, response) => {
//   fs.readFile("./Public/data/products.json", "utf-8", (readError, readData) => {
//     if (readError) {
//       response.json({
//         status: "file reader error",
//         data: [],
//       });
//     }

//     const objectData = JSON.parse(readData);

//     response.json({
//       status: "success",
//       data: objectData,
//     });
//   });
// });
// app.delete("/products", (request, response) => {
//   const body = request.body;
//   fs.readFile("./Public/data/products.json", "utf-8", (readError, readData) => {
//     if (readError) {
//       response.json({
//         status: "file reader error",
//         data: [],
//       });
//     }

//     const readObject = JSON.parse(readData);

//     const filteredObjects = readObject.filter((o) => o.id !== body.productId);
//     fs.writeFile(
//       "./Public/data/products.json",
//       JSON.stringify(filteredObjects),
//       (writeError) => {
//         if (writeError) {
//           response.json({
//             status: "write file error",
//             data: [],
//           });
//         }
//         response.json({
//           status: "success",
//           data: filteredObjects,
//         });
//       }
//     );
//   });
// });

// app.post("/products", (request, response) => {
//   const body = request.body;

//   const newProduct = {
//     id: Date.now().toString(),
//     title: body.title,
//     price: body.price,
//     image: body.image,
//     subtitle: body.subtitle,
//     discount: body.discount,
//     code: body.code,
//     hashtag: body.hashtag,
//     technology: body.technology,
//     description: body.description,
//     descriptionn: body.descriptionn,
//     rating: body.rating,
//   };

//   fs.readFile("./Public/data/products.json", "utf-8", (readError, readData) => {
//     if (readError) {
//       response.json({
//         status: "file does not exist",
//         data: [],
//       });
//     }

//     const dataObject = JSON.parse(readData);

//     dataObject.push(newProduct);

//     fs.writeFile(
//       "./Public/data/products.json",
//       JSON.stringify(dataObject),
//       (writeError) => {
//         if (writeError) {
//           response.json({
//             status: "Error during file write",
//             data: [],
//           });
//         }
//         response.json({
//           status: "success",
//           data: dataObject,
//         });
//       }
//     );
//   });
// });

// app.put("/products", (request, response) => {
//   fs.readFile("./Public/data/products.json", "utf-8", (readError, readData) => {
//     if (readError) {
//       response.json({
//         status: "File read error",
//         data: [],
//       });
//     }
//     const savedData = JSON.parse(readData);

//     const changedData = savedData.map((data) => {
//       if (data.id === request.body.id) {
//         data.title = request.body.title;
//         data.price = request.body.price;
//         data.image = request.body.image;
//         data.subtitle = request.body.subtitle;
//         data.hashtag = request.body.hashtag;
//         data.rating = request.body.rating;
//         data.discount = request.body.discount;
//         data.code = request.body.code;
//         data.technology = request.body.technology;
//         data.description = request.body.description;
//         data.descriptionn = request.body.descriptionn;
//       }
//       return data;
//     });

//     fs.writeFile(
//       "./Public/data/products.json",
//       JSON.stringify(changedData),
//       (writeError) => {
//         if (writeError) {
//           response.json({
//             status: "file write error",
//             data: [],
//           });
//         }
//         console.log(request.body);
//         response.json({
//           status: "success",
//           data: changedData,
//         });
//       }
//     );
//   });
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
