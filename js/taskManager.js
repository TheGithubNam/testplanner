//Task 7.1, 7.2, 7.3, // task 8 step 3.1 
const createTaskHtml = (id, name, description, assignedTo, dueDate, status) => {  
    const html = `
    <div class="col-sm-4"> 
        <div class="card border-success mb-3" style="max-width: 18rem;" data-task-id="${id}">
            <div class="card-header bg-transparent border-success">${name}</div>
            <div class="card-header bg-transparent border-success">${status}</div>
            <div class="card-body text-success">
            <p class="card-text">${description}</p>
            </div>
            <div class="card-footer bg-transparent border-success">${assignedTo}</div>
            <div class="card-footer bg-transparent border-success">${dueDate}</div>          
         <div class="card-footer bg-transparent border-success mx-auto">
              <button class="btn btn-primary done-button">Done</button>
             <button class="btn btn-primary">Delete</button>
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
    // Step 4.2. 4.3, 4.4 i & ii
    getTaskById(taskId) {
        let foundTask; 
        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i];
            if (task.id === taskId) {
                foundTask = task; 
            }
        }
        return foundTask; 
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
        let formattedDate = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
        //console.log(task.name);
        let taskHtml = createTaskHtml(task.id, task.name, task.description, task.assignedTo, formattedDate, task.status);
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
