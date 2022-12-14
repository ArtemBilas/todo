import { todoActionsType } from './actions';
import { loadState } from '../../utils';

const persistedState = loadState();

const initialState = {
    todos: persistedState ? [...persistedState.todos] : [],
    filterMode: 'all-list'
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case todoActionsType.TODOS_ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };

        case todoActionsType.TODOS_EDIT_TODO:
            return (() => {
                const { text, id } = action.payload;
                const { todos } = state;
                const indexTodo = todos.findIndex(todo => todo.id === id);

                const editedTodo = {
                    ...todos[indexTodo],
                    text: text
                }

                const updatedTodos = [
                    ...state.todos.slice(0, indexTodo),
                    editedTodo,
                    ...state.todos.slice(indexTodo + 1)
                ];

                return {
                    ...state,
                    todos: updatedTodos
                }
            })();

        case todoActionsType.TODOS_DELETE_TODO:
            return (() => {
                const id = action.payload;
                const { todos } = state;
                const newTodos = todos.filter(todo => todo.id !== id);

                return {
                    ...state,
                    todos: newTodos
                }
            })();

        case todoActionsType.TODOS_DONE_TODO:
            return (() => {
                const id = action.payload;
                const { todos } = state;
                const todoIndex = todos.findIndex(todo => todo.id === id);

                const doneTodo = {
                    ...todos[todoIndex],
                    isDone: !todos[todoIndex].isDone
                }

                const nextTodo = [
                    ...todos.slice(0, todoIndex),
                    doneTodo,
                    ...todos.slice(todoIndex + 1)
                ];

                return {
                    ...state,
                    todos: nextTodo
                }
            })();

        case todoActionsType.TODOS_ALL_TODO_LIST:
            return {
                ...state,
                filterMode: action.payload
            };

        case todoActionsType.TODOS_COMPLETE_LIST:
            return {
                ...state,
                filterMode: action.payload
            };

        case todoActionsType.TODOS_NEED_TODO_LIST:
            return {
                ...state,
                filterMode: action.payload
            };

        default:
            return state;
    }
}