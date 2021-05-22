import queryDB from './db';

const updateEmployeeDetails = async (employee_id, employee) => {

  const results = await (await queryDB(
                        `UPDATE employee
                        SET name=? , role=? , email=?, performance_review=?
                        WHERE employee_id=?`, 
                        [employee.name, employee.role, employee.email, employee.performance_review, employee_id])).all();                    

  let message = 'Error in updating employee details.'

  console.log(results);

  if(results.affectedRows == 1) {
    message = `Employee updated successfully.`
  }

  return {message};
};

export default updateEmployeeDetails;