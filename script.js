const getElement = (inputId) => {
    const inputElement = document.getElementById(inputId);
    return inputElement;
};



// 
const handleSubmit = () => {
    const toDos = JSON.parse(localStorage.getItem('ToDos'));
    const inputText = getElement('todo-text').value;
    if (!toDos) {
        const todoList = [
            {
                title: inputText,
                completed: false,
            }
        ];
        localStorage.setItem('ToDos', JSON.stringify(todoList))
    } else {
        const todoList = [
            ...toDos,
            {
                title: inputText,
                completed: false,
            }
        ];
        localStorage.setItem('ToDos', JSON.stringify(todoList))
    }
    getElement('todo-text').value = '';
    render()
}



const render = () => {
    //get data local storage
    const toDos = JSON.parse(localStorage.getItem('ToDos'));
    const ul = getElement('todo-list');
    ul.innerHTML = ''
    toDos.forEach(todo => {
        console.log(todo.title)
        const li = document.createElement('li');
        li.classList.add('py-2')
        li.innerText = todo.title
        ul.appendChild(li)
    })
};


const handleClearAll = () => {
    localStorage.removeItem('ToDos')
    render()
};


render()




