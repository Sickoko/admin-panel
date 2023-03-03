import { pool } from "../Config/mysql-config.js";

export async function getUsers() {
  const [rows] = await pool.query(`select * from users limit 10`);
  return rows;
}
export async function addUsers(
  firstName,
  lastName,
  birthDate,
  email,
  phoneNumber,
  address,
  userRoleId
) {
  const query = `INSERT INTO users (first_name, last_name, birth_date, email, phone_number, address, user_role_id) VALUES(?,?,?,?,?,?,?)`;
  const [rows] = await pool.query(query, [
    firstName,
    lastName,
    birthDate,
    email,
    phoneNumber,
    address,
    userRoleId,
  ]);
  return rows;
}
export async function updateUsers(
  userId,
  firstName,
  lastName,
  birthDate,
  email,
  phoneNumber,
  address,
  userRoleId
) {
  const query = `UPDATE users SET first_name="${firstName}", last_name="${lastName}",birth_date="${birthDate}", email="${email}",phone_number="${phoneNumber}", address="${address}",user_role_id="${userRoleId}" WHERE user_id=${userId}`;
  const [rows] = await pool.query(query);
  return rows;
}
export async function removeUsers(userId) {
  const query = `DELETE FROM users WHERE user_id=${userId}`;
  const [rows] = await pool.query(query);
  return rows;
}
