import queryDB from './db';

const getFeedback = async (page=1) => {

  let results = await (await queryDB(`SELECT * FROM feedback`)).all();
  return results;
};

export default getFeedback;