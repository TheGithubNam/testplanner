//Task 7.1, 7.2, 7.3 
const createTaskHtml = (name, description, assignedTo, dueDate, status ) => {  
    const html = `
    <div class="col-sm-4">
        <div class="card">
        <div class="card border-success mb-3" style="max-width: 18rem;">
            <div class="card-header bg-transparent border-success">${name}</div>
            <div class="card-header bg-transparent border-success">${status}</div>
            <div class="card-body text-success">
            <p class="card-text">${description}</p>
            </div>
            <div class="card-footer bg-transparent border-success">${assignedTo}</div>
            <div class="card-footer bg-transparent border-success">${dueDate}</div>          
         <div class="card-footer bg-transparent border-success mx-auto">
              <button class="btn btn-primary">Edit</button>
             <button class="btn btn-primary">Delete</button>
            </div>
        </div>
        </div>
        </div>
    `;
        // task 7.4
        return html;
};


class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];       
        this.currentId = currentId; 
    }    

    addTask(name, description, assignedTo, dueDate, status) {
        const task = {
            id: this.currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: status,
        };
        //console.log(task);
    this.tasks.push(task);
    }
    // Task 7 - Step 2.1
    render() {
    // Task 7 - step 2.2
    let tasksHtmlList = [];
    for (let i = 0; i < this.tasks.length; i++) {
    // Task 7 - step 2.3.i,ii,iii, iv, v
        const task = this.tasks[i];
        //console.log(this.tasks[i]);
        let date = new Date(task.dueDate);
        let formattedDate = (date.getDate() + (date.getMonth()+1) + date.getFullYear());
        //console.log(task.name);
        let taskHtml = createTaskHtml(task.name, task.description, task.assignedTo, formattedDate, task.status);
        //console.log(task);
        tasksHtmlList.push(taskHtml);
    }
    // task 7 step 2.4
    const tasksHtml = tasksHtmlList.join("\n");
    //task 7 step 2.6
    const tasksList = document.querySelector("#tasksList");
    //console.log(tasksList);
    tasksList.innerHTML = tasksHtml;
};

}
//https://stackoverflow.com/questions/23427384/get-form-data-in-reactjs