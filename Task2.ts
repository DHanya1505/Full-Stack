// Define a Task interface using an object
interface Task {
    id: number;
    title: string;
    completed: boolean;
}

// Array to store tasks
let tasks: Task[] = [];

// Function to add a task
function addTask(title: string): void {
    const newTask: Task = {
        id: tasks.length + 1,
        title: title,
        completed: false
    };
    tasks.push(newTask);
    console.log(`Task "${title}" added.`);
}

// Function to mark a task as completed
function completeTask(id: number): void {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        tasks[taskIndex].completed = true;
        console.log(`Task with ID ${id} marked as completed.`);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}

// Function to list all tasks
function listTasks(): void {
    console.log("Tasks:");
    tasks.forEach(task => {
        console.log(`ID: ${task.id}, Title: ${task.title}, Completed: ${task.completed ? 'Yes' : 'No'}`);
    });
}

// Add some initial tasks
addTask("Complete TypeScript tutorial");
addTask("Prepare for meeting");

// Mark the first task as completed
completeTask(1);

// List all tasks
listTasks();
