// Question 2
function validFormFieldInput(data) {

};
// Question 3
const buttonAdd = document.querySelector('#newTaskSubmit');
const newTaskName = document.querySelector('#newTaskName');
const newTaskDate = document.querySelector('#newTaskDate');
const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
const newTaskStatus = document.querySelector('#newTaskStatus');
const newTaskDescription = document.querySelector('#newTaskDescription');

buttonAdd.addEventListener("click", (event) => {

let validationFail = 0;

event.preventDefault();
event.stopPropagation();

  // Form validation for Task Name Field min length 5
  if (newTaskName.value.length > 5) {
    newTaskName.classList.add("is-valid");
    newTaskName.classList.remove("is-invalid");
  } else {
    newTaskName.classList.add("is-invalid");
    newTaskName.classList.remove("is-valid");
    validationFail++;
  }

  // Form validation for Task Description Field min length 5
  if (newTaskDescription.value.length > 5) {
    newTaskDescription.classList.add("is-valid");
    newTaskDescription.classList.remove("is-invalid");
  } else {
    newTaskDescription.classList.add("is-invalid");
    newTaskDescription.classList.remove("is-valid");
    validationFail++;
  }

  // Form validation for Task Assigned Field min length 5
  if (newTaskAssignedTo.value.length > 5) {
    newTaskAssignedTo.classList.add("is-valid");
    newTaskAssignedTo.classList.remove("is-invalid");
  } else {
    newTaskAssignedTo.classList.add("is-invalid");
    newTaskAssignedTo.classList.remove("is-valid");
    validationFail++;
  }  
  // Form validation for Due Date Field not empty
  // try your own validation for a date in the future
  if (newTaskDate.value) {
    newTaskDate.classList.add("is-valid");
    newTaskDate.classList.remove("is-invalid");
  } else {
    newTaskDate.classList.add("is-invalid");
    newTaskDate.classList.remove("is-valid");
    validationFail++;
  }
  // Form validation for Task Status Field not empty
  if (newTaskStatus.value) {
    newTaskStatus.classList.add("is-valid");
    newTaskStatus.classList.remove("is-invalid");
  } else {
    newTaskStatus.classList.add("is-invalid");
    newTaskStatus.classList.remove("is-valid");
    validationFail++;
  }
  // If validation fails then function will not proceed further and
  // will return. The value of validationFail will also needed to be
  // reset to 0.
  // ----------------------------------------------------------------------------------*/
  if (validationFail > 0) {
    validationFail = 0;
    return;
  }
});