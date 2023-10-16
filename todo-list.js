const TodoList = [{
    name: 'make dinner',
    dueDate: '2023-10-20'
}, 
{
    name: 'wash dinner',
    dueDate: '2023-10-20'
}
];

renderTodoList();

function renderTodoList() {

    let todoListHTML = '';

    for(let i = 0; i < TodoList.length; i++){
        const todoObject = TodoList[i];
       /* const name = todoObject.name;
        const date = todoObject.dueDate; */
        const { name, dueDate } = todoObject;

        const html = 
        `<div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
            TodoList.splice(${i}, 1);
            renderTodoList();
        " class="delete-todo-button">Delete</button>`;
        
        todoListHTML += html;
    }
    
    document.querySelector('.js-todo-list').innerHTML = todoListHTML; 
}


function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    TodoList.push({name, dueDate});

    inputElement.value = '';

    renderTodoList();

}