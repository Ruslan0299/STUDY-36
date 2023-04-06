import employees from "./employees.js";
import {totalSalary} from "./methods.js";
import { departmentsQuantity } from "./methods.js";
import * as emlpyeesMethods from "./methods.js"
console.log(totalSalary(employees));//16500
console.log(departmentsQuantity(employees));//4
console.log(emlpyeesMethods.departmentsSalary(employees)); //{fronend: 5500, backend: 1700, design: 3200, sales: 6100}

