import queryDB from './db';

const createFeedback = async (id, feedback) => {

  const results = await (await queryDB(`INSERT INTO feedback(feedback, feedback_user, feedback_by) VALUES (?, ?, ?)`, 
                        [feedback.feedback, feedback.feedback_user, feedback.feedback_by, id])).all();

  let message = 'Error in creating feedback.'

  if(results.affectedRows == 1) {
    message = `feedback with id ${results.insertId} created successfully.`
  }

  return {message};
};

export default createFeedback;