export const todoActionsType = {
    TODOS_ADD_TODO: "TODOS_SET_TODO",
    TODOS_EDIT_TODO: "TODOS_EDIT_TODO",
    TODOS_DELETE_TODO: "TODOS_DELETE_TODO",
    TODOS_DONE_TODO: "TODOS_DONE_TODO"
}

export const todoActions = {
    addTodo : (data) =>  ({type: todoActionsType.TODOS_ADD_TODO, payload: data}),
    editTodo: (id, text) => ({type: todoActionsType.TODOS_EDIT_TODO, payload: {id, text}}),
    deleteTodo: (id) => ({type: todoActionsType.TODOS_DELETE_TODO, payload: id}),
    doneTodo: (id) => ({type: todoActionsType.TODOS_DONE_TODO, payload: id})
}