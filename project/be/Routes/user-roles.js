import express from "express";
const role_router = express.Router();
import {
  getUserRole,
  addUserRole,
  updateUserRole,
} from "../Services/userRole-services.js";

role_router.get("/roles", async (request, response) => {
  const result = await getUserRole();
  console.log(result);
  response.status(200).send(result);
});
role_router.post("/role", async (request, response) => {
  const { userRoleName } = request.body;
  const result = await addUserRole(userRoleName);
  console.log(result);
  response.status(200).send({});
});
role_router.put("/role", async (request, response) => {
  const body = request.body;
  console.log(body);
  const result = await updateUserRole(body.userRoleName, body.userRoleId);
  response.status(200).send(result);
});

export default role_router;
