import getEmployeeWithFeedback from '../db/getEmployeeWithFeedback';

const employeeList = {
  method: 'get',
  path: '/api/employees',
  handler: async (req, res) => {
    try {
      // let results = await getEmployees();
      let results = await getEmployeeWithFeedback();
      res.json(results);
    }
    catch(err) {
      console.log(`Error ${err}`);
    }
  }
}

export default employeeList;