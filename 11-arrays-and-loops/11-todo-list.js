const todoList = ['make dinner', 'wash dishes'];    // Saving the data

renderTodoList();

function renderTodoList()
{
    let todoListHTML = '';

    for(let i = 0; i < todoList.length; i++)        // Generating the HTML with the data
    {
        const todo = todoList[i];
        const html = `<p>${todo}</p>`;
        todoListHTML += html;
    }

    console.log(todoListHTML);

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
}

function addToDo()
{
    // Takes value entered in INPUT box and puts it into JS
    const inputElement = 
        document.querySelector('.js-name-input2');
    
    const name = inputElement.value;

    //Test 1
    //console.log(name);

    todoList.push(name);
    console.log(todoList);

    // Reset text in Text Box
    inputElement.value = '';

    renderTodoList();
}