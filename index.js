import inquirer from "inquirer";
let my_todo_list = [];
let condition = true;
while (condition) {
    const add_task = await inquirer.prompt([
        {
            type: "input",
            message: "Please enter your task for todo list: ",
            name: "todo_task",
        },
        {
            name: "add_more_task",
            type: "confirm",
            message: "Do you want to add more task in todo list: ",
            default: false
        }
    ]);
    my_todo_list.push(add_task.todo_task);
    console.log(my_todo_list);
    condition = add_task.add_more_task;
}
