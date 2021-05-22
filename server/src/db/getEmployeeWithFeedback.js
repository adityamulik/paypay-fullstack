import getEmployees from './getEmployees';
import getFeedback from './getFeedback';

const getEmployeeWithFeedback = async() => {
  const employees = await getEmployees();
  const feedbacks = await getFeedback();

  console.log(feedbacks);

  const employeeWithFeedback = employees.map(employee => ({
    ...employee,
    // feedback: feedbacks.map(feedback => {if(feedback.feedback_user === employee.employee_id) { return feedback }})
    feedback: feedbacks.filter(item => {
      if (item.feedback_user === employee.employee_id) {
        return item;
      }
    })
  }))

  return employeeWithFeedback;
};

export default getEmployeeWithFeedback;