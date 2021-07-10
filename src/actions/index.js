const updateEmail = (email) =>{
    return {
        type: 'UPDATE_LOGIN_EMAIL',
        payload: email
    }
}

const updatePassword = (password) =>{
    return {
        type: 'UPDATE_LOGIN_PASSWORD',
        payload: password
    }
}

const updateNameTaskForm = (name) =>{
    return {
        type: 'UPDATE_NAME_TASK_FORM',
        payload: name
    }
}

const updateDescribtionTaskForm = (describtion) =>{
    return {
        type: 'UPDATE_DESCRIBTION_TASK_FORM',
        payload: describtion
    }
}

const updateEmptyTaskForm = (value) =>{
    return {
        type: 'UPDATE_EMPTY_TASK_FORM',
        payload: value
    }
}

const addTask = (name,describtion) =>{
    const task = {
        name,
        describtion,
        date: new Date().toDateString()
    };
    return {
        type: 'ADD_TASK',
        payload: task
    }
}

const deleteTask = (id) => {
    return {
        type:'DELETE_TASK',
        payload: id
    }
}

const editTask = (body) =>{
    return {
        type: 'EDIT_TASK',
        payload: body
    }
}

const updateNameEditTaskForm = (name) =>{
    return {
        type: 'EDIT_NAME_TASK_FORM',
        payload: name
    }
}

const updateDescribtionEditTaskForm = (describtion) =>{
    return {
        type: 'EDIT_DESCRIBTION_TASK_FORM',
        payload: describtion
    }
}

const updateEmptyEditTaskForm = (value) => {
    return {
        type: 'EDIT_EMPTY_TASK_FORM',
        payload: value
    }
}

export {
    updateEmail,
    updatePassword,
    updateNameTaskForm,
    updateDescribtionTaskForm,
    updateEmptyTaskForm,
    addTask,
    deleteTask,
    editTask,
    updateNameEditTaskForm,
    updateDescribtionEditTaskForm,
    updateEmptyEditTaskForm
}