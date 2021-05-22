import getEmployeeFeedback from '../db/getEmployeeFeedback';

const getEmployeeFeedbacks = {
  method: 'get',
  path: '/api/employee/:id/feedback/',
  handler: async (req, res) => {
    try {
      let results = await getEmployeeFeedback(req.params.id);
      res.json(results);
    }
    catch(err) {
      console.log(`Error ${err}`);
    }
  }
}

export default getEmployeeFeedbacks;