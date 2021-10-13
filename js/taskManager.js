//Task 7.1, 7.2, 7.3, // task 8 step 3.1 
const createTaskHtml = (id, name, description, assignedTo, dueDate, status) => {  
    const html = `
    <div class="col-sm-4 mb-5 text-center"> 
        <div class="card border border-3 mb-3 mx-auto" style="max-width: 18rem;" data-task-id="${id}">            
            <div class="card-header bg-primary bg-gradient pt-4 border-white">
                 <span class="text-white fw-bold fs-5 "></span>             
                 <p class="my-2 text-white pb-2">${name}</p>
            </div>
            <div class="card-header bg-transparent pt-3 text-center">
            <span class="text-dark fw-bold fs-5">Status</span>             
                 <p class="my-2">${status}</p>
            </div> 
            <div class="card-body text-center">
            <span class="card-text text-dark fw-bold fs-5";>Description</span>
                <p class="mt-2 overflow-auto" style="height: 45px">${description}</p>             
            </div>
            <div class="card-footer bg-transparent pt-3 text-center">
                <span class="text-dark fw-bold fs-5">Assigned To</span>             
                    <p class="my-2">${assignedTo}</p>
            </div>
            <div class="card-footer bg-transparent pt-3 text-center">
                 <span class="text-dark fw-bold fs-5 px-2">Due Date</span>             
                     <p class="my-2 px-2">${dueDate}</p>
            </div>          
            <div class="card-footer bg-transparent mx-auto border-white pb-3 text-center">
                <button class="btn btn-primary done-button ${status === "DONE" ? "invisible" : "visible"}">Done</button>
                <button class="btn btn-primary delete-button">Delete</button>
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
    //Task 10, step 2.1-4
    deleteTask(taskId) {
        const newTasks = [];
        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i];
            if (task.id !== taskId) {
                newTasks.push(task);
            }
        }
        this.tasks = newTasks;
    };

    addTask(name, description, assignedTo, dueDate, status) {
        const task = {
            id: this.currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: status,
        };
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

    render() {
        let tasksHtmlList = [];
        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i];
            let date = new Date(task.dueDate);
            let formattedDate = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
            let taskHtml = createTaskHtml(task.id, task.name, task.description, task.assignedTo, formattedDate, task.status);
            tasksHtmlList.push(taskHtml);
        }
        const tasksHtml = tasksHtmlList.join("\n");
        const tasksList = document.querySelector("#tasksList");
        tasksList.innerHTML = tasksHtml;
    }

    //task 9 step 1.1-1.5

    save() {
        // Create a JSON string of the tasks
        const tasksJson = JSON.stringify(this.tasks);
    
        // Store the JSON string in localStorage
        localStorage.setItem("tasks", tasksJson);
    
        // Convert the currentId to a string;
        const currentId = String(this.currentId);
    
        // Store the currentId in localStorage
        localStorage.setItem("currentId", currentId);
      }

    //task 9 step 2

    load() {
        if (localStorage.getItem("tasks")) {
            const tasksJson = localStorage.getItem("tasks");
            this.tasks = JSON.parse(tasksJson);
        }
        if (localStorage.getItem("currentId")) {
            const currentId = localStorage.getItem("currentId");
            this.currentId = Number(currentId);
        }
                
        }
    }
    



