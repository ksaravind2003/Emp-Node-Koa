import knex from "../config/knexHelper.js";
import CONSTANT from "../constants.js";

const findAllEmployees = async () => {
  const result = await knex.select().table(CONSTANT.DB_TBL_EMPLOYEES);
  return result;
};

const upsertEmployee = async (data) => {
  const result = await knex.table(CONSTANT.DB_TBL_EMPLOYEES).insert(data).onConflict().ignore();
  return result;
};

export default {
  findAllEmployees,
  upsertEmployee
};
