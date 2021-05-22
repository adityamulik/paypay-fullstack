import queryDB from './db';

const getEmployees = async (page=1) => {

  let results = await (await queryDB(`SELECT * FROM employee`)).all();
  return results;
};

export default getEmployees;