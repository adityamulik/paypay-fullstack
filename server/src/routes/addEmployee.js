import createEmployee from "../db/createEmployee";

const addEmployee = {
  method: 'post',
  path: '/api/admin/employee',
  handler: async (req, res) => {
    try {
      let results = await createEmployee(req.body);
      res.json(results);
    }
    catch(err) {
      console.log(`Error in creating employee, ${err}`);
    }
  }
}

export default addEmployee;