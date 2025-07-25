
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'


export const addTodo = () => { 
    type: ADD_TODO,
    payload
}

export const removeTodo = () => { 
    type: REMOVE_TODO, 
    payload 
}

export const toggleTodo = () => { 
        type: TOGGLE_TODO, 
        payload
}