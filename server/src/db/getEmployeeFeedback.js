import queryDB from './db';

const getEmployeeFeedback = async (id) => {

  let results = await (await queryDB(`SELECT * FROM feedback WHERE feedback_user=${id}`)).all();
  return results;
};

export default getEmployeeFeedback;