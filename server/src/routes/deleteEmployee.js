import removeEmployee from '../db/removeEmployee';

const deleteEmployee = {
  method: 'delete',
  path: '/api/admin/employee/:id/remove/',
  handler: async (req, res) => {
    try {
      let results = await removeEmployee(req.params.id);
      res.json(results);
    }
    catch(err) {
      console.log(`Error in deleting employee, ${err}`);
    }
  }
}

export default deleteEmployee;