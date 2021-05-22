import queryDB from './db';

const createEmployee = async (employee) => {

  const results = await (await queryDB(`INSERT INTO employee(name, role, email, performance_review) VALUES (?, ?, ?, ?)`, 
                        [employee.name, employee.role, employee.email, employee.performance_review])).all();

  let message = 'Error in creating employee.'

  console.log(results);

  if(results.affectedRows == 1) {
    message = `Employee with id ${results.insertId} created successfully.`
  }

  return {message};
};

export default createEmployee;