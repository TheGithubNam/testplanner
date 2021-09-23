//Task 7.1, 7.2, 7.3 
const createTaskHtml = (name, description, assignedTo, dueDate, status ) => {  
    const html = `
    <li class="card" style="min-width: 50vw">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">
                ${description}
            </p>
            <p class="card-text">${assignedTo} To</p>
            <p class="card-text">${dueDate}</p>
            <div class="card-footer row">
                <div class="col-6">
                    <p class="card-text"><b>${status}</b></p>
                </div>
                <div class="col-3">
                    <button class="btn btn-outline-success done-button">
                        Done
                    </button>
                </div>
                <div class="col-3">
                    <button class="btn btn-outline-danger delete-button">
                        Delete
                    </button>
                </div>
            </div>
           </div>
        </li>
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
    this.tasks.push({ task });
    }
    // Task 7 - Step 2.1
    render() {
    // Task 7 - step 2.2
    let tasksHtmlList = [];
    for(let i=0; i< this.tasks.length; i++) {
    // Task 7 - step 2.3.i,ii,iii, iv, v
        const task = this.task[i];
        let date = new Date(task.dueDate);
        let formattedDate = (date.getDate() + (date.getMonth()+1) + date.getFullYear());
        let taskHtml = createTaskHtml(task.name, task.description, task.assignedTo, formattedDate, task.status);
        tasksHtmlList.push(taskHtml);

    }

    };


}
