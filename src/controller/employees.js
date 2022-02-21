import employeeModel from "../model/employeeModel.js";

const getAllEmployees = async (ctx) => {
  try {
    const employees = await employeeModel.findAllEmployees();
    console.log(employees);
    ctx.response.status = 200;
    ctx.body = {
      success: true,
      results: employees,
    };
  } catch (err) {
    ctx.response.status = 500;
    ctx.body = {
      status: false,
      results: [],
    };
  }
};

const addEmployee = async (ctx) => {
  try {
    const data = __validateAndParseData(ctx.request.body);

    if (!data) {
      throw err("Input validation failed");
    }

    const employees = await employeeModel.upsertEmployee(data);
    console.log(employees);
    ctx.response.status = 200;
    ctx.body = {
      success: true,
      results: [],
    };
  } catch (err) {
    ctx.response.status = 500;
    ctx.body = {
      status: false,
      results: [],
    };
  }
};

const __validateAndParseData = (data) => {
  let { EmpId, Name, Phone = null } = data;

  if (EmpId == null || Name == null) {
    return false;
  }
  return { EmpId, Name, Phone };
};

export default { getAllEmployees, addEmployee };
