//The class responsible for the to-do list
class ToDoList {
    constructor() {
        document.querySelector("form.add").addEventListener('submit', this.addTask.bind(this))
        this.taskNumber = document.querySelector("h1 span");
        this.inputAdd = document.querySelector("form.add input");
        this.listItems = document.getElementsByClassName("task");
        this.ul = document.querySelector("section.Lista ul");
    }

    //A function that adds a task to the list
    addTask() {
        event.preventDefault();
        const tittletask = this.inputAdd.value;
        console.log(tittletask);
        if (!tittletask) return alert("Nie podałeś zadania");
        const task = document.createElement('li');
        task.className = 'task';
        task.innerHTML = tittletask + "<span> X  </span>";
        this.ul.appendChild(task);
        this.inputAdd.value = " ";

        this.taskNumber.textContent = this.listItems.length;
        task.querySelector("span").addEventListener('click', this.removeTask.bind(this));
    }

    //A function that deletes a job from the list
    removeTask() {
        event.target.parentNode.remove();
        this.taskNumber.textContent = this.listItems.length;
    }
}

const lista = new ToDoList;
