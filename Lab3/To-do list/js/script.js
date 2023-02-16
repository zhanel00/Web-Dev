const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-input');
const todoItems = document.querySelector('.todo-list');

let todos = [];

todoForm.addEventListener('submit',
                        function(event) {
                                event.preventDefault();
                                addTodo(todoInput.value);
                        });
function addTodo(item) {
    if (item != '') {
        const todo = {
            id : Date.now(),
            name: item,
            completed: false,
        };
        todos.push(todo)
        renderTodos(todos);
        todoInput.value = '';
    }
}

function renderTodos(todos) {
    todoItems.innerHTML = '';
    todos.forEach(function(item) {
        const checked = item.completed ? 'checked' : null;

        const li = document.createElement('li');
        li.setAttribute('class', 'item');
        li.setAttribute('data-key', item.id);

        if (item.completed) {
            li.classList.add('checked');
        }

        li.innerHTML = `
            <input type="checkbox" class="checkbox" ${checked}>
            ${item.name}
            <button class="delete-button">x</button>
        `;
        todoItems.append(li);
    })
}

function toggle(id) {
    todos.forEach(function(item) {
        if (item.id == id) {
            item.completed = !item.completed;
        }
    });
}

function deleteTodo(id) {
    todos = todos.filter(function(item) {
        return item.id != id;
    });
}

todoItems.addEventListener('click', function(event) {
    if (event.target.type === 'checkbox') {
        toggle(event.target.parentElement.getAttribute('data-key'));
    }

    if (event.target.classList.contains('delete-button')) {
        deleteTodo(event.target.parentElement.getAttribute('data-key'));
    }
    renderTodos(todos);
})

