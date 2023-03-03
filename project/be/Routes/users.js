import express, { response } from "express";

const users_router = express.Router();

import {
  addUsers,
  removeUsers,
  getUsers,
  updateUsers,
} from "../Services/users-services.js";

users_router.get("/users", async (request, response) => {
  const result = await getUsers();
  console.log(result);
  response.status(200).send(result);
});
users_router.post("/user", async (request, response) => {
  const {
    firstName,
    lastName,
    birthDate,
    email,
    phoneNumber,
    address,
    userRoleId,
  } = request.body;
  const result = await addUsers(
    firstName,
    lastName,
    birthDate,
    email,
    phoneNumber,
    address,
    userRoleId
  );
  console.log(result);
  response.status(200).send({});
});
users_router.put("/user", async (request, response) => {
  const body = request.body;
  const result = await updateUsers(
    body.userId,
    body.firstName,
    body.lastName,
    body.birthDate,
    body.email,
    body.phoneNumber,
    body.address,
    body.userRoleId
  );
  response.status(200).send(result);
});
users_router.delete("/user", async (request, response) => {
  const body = request.body;
  const result = await removeUsers(body.userId);
  response.status(200).send(result);
});

export default users_router;
