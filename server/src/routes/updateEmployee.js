import updateEmployeeDetails from '../db/updateEmployeeDetails';

const updateEmployee = {
  method: 'put',
  path: '/api/admin/employee/:id/update/',
  handler: async (req, res) => {
    try {
      console.log(req.params.id);
      let results = await updateEmployeeDetails(req.params.id, req.body);
      console.log(results);
      res.json(results);
    }
    catch(err) {
      console.log(`Error in updating employee details, ${err.message}`);
    }
  }
}

export default updateEmployee;