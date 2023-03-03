import { pool } from "../config/mysql-config.js";

export async function getUserRole() {
  const [rows] = await pool.query(`select * from user_role limit 5`);
  return rows;
}

export async function addUserRole(userRoleName) {
  const query = `INSERT INTO user_role (user_role_name) VALUES(?)`;
  const [rows] = await pool.query(query, [userRoleName]);
  return rows;
}
export async function updateUserRole(userRoleName, userRoleId) {
  const query = `UPDATE user_role SET user_role_name='${userRoleName}' WHERE user_role_id="${userRoleId}"`;
  const [rows] = await pool.query(query);
  return rows;
}
