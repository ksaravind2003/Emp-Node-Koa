import Router from "koa-router";
import Employees from "../controller/employees.js";

const router = new Router({
  prefix: "/api",
});

router.get("/findall", Employees.getAllEmployees);
router.post("/createnew", Employees.addEmployee);

export default router;
