export function totalSalary(employees) {
  let sum = 0;
  for (let i = 0; i < employees.length; i++) {
    if ("salary" in employees[i]) {
      sum += employees[i].salary;
    }
  }
  return sum;
}

export function departmentsQuantity(employees) {
  let sumDepartments = [];
  for (let j = 0; j < employees.length; j++) {
    if ("department" in employees[j]) {
        if (!sumDepartments.includes(employees[j].department)) {
            sumDepartments.push(employees[j].department);
        }
    }
  }
  return sumDepartments.length;
}

export function departmentsSalary (employees) {
    let totalDepatments = {};
    for (let l = 0; l < employees.length; l++) {
        if ("department" in employees[l] && "salary" in employees[l]) {
            let department = employees[l].department;
            let salary = employees[l].salary;
            if (totalDepatments.hasOwnProperty(department)) {
                totalDepatments[department] +=salary;
            } else {
                totalDepatments[department] = salary;
            }
        }
    }
    return totalDepatments;
}
