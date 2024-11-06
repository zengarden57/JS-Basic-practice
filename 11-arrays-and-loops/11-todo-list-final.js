const todoList = JSON.parse(localStorage.getItem('todo-list')) || 
[{
    name: 'make dinner',
    dueDate: '2022-12-22'
},
{
    name: 'wash dishes',
    dueDate: '2022-12-22'
}];

renderTodoList();

function renderTodoList()
{
    let todoListHTML = '';

    for(let i = 0; i < todoList.length; i++)        // Generating the HTML with the data
    {
        const todoObject = todoList[i];
        //const name = todoObject.name;
        //const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject;                // De-structuring
        const html = `
            <div>${name}</div> 
            <div>${dueDate}</div>     
            <button
                class="delete-todo-button"
                onclick="todoList.splice(${i}, 1);
                renderTodoList();"
            >Delete</button>`;
        todoListHTML += html;
    }

    document.querySelector('.js-final-todo-list')
        .innerHTML = todoListHTML;
}

function addToDo()
{
    // Takes value entered in INPUT box and puts it into JS
    const inputElement = 
        document.querySelector('.js-name-input');
    
    const name = inputElement.value;

    const dateInputElement = 
        document.querySelector('.js-due-date-input');

    const dueDate = dateInputElement.value;

    //Test 1
    //console.log(name);

    todoList.push({ 
        name,                                  // Shorthand property syntax
        dueDate
     });

    // Reset text in Text Box
    inputElement.value = '';

    renderTodoList();
    saveToStorage();
}

function saveToStorage()
{
localStorage.setItem('todo-list', JSON.stringify(todoList));
}