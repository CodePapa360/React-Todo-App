import { createSlice } from "@reduxjs/toolkit";

const tempTodo = [
  {
    id: 10,
    content: "Going to scool",
    done: false,
  },
  {
    id: 11,
    content: "Playing football",
    done: true,
  },
  {
    id: 12,
    content: "Talking to friends",
    done: false,
  },
  {
    id: 13,
    content: "Food shopping",
    done: false,
  },
  {
    id: 14,
    content: "Filling the gas to the car",
    done: true,
  },
];

const initialState = {
  todos: tempTodo,
  filter: "all",
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: {
      prepare(newTodo) {
        return {
          payload: { content: newTodo, done: false, id: Math.random() },
        };
      },
      reducer(state, action) {
        state.todos = [action.payload, ...state.todos];
      },
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    doneTodo(state, action) {
      const targetTodo = state.todos.find((todo) => todo.id === action.payload);

      targetTodo.done = !targetTodo.done;
    },
    clearCompletedTodos(state) {
      state.todos = state.todos.filter((todo) => todo.done !== true);
    },
    filterAll(state) {
      state.filter = "all";
    },
    filterActive(state) {
      state.filter = "active";
    },
    filterCompleted(state) {
      state.filter = "completed";
    },
  },
});

export const selectFilteredTodos = (state) => {
  const { todos, filter } = state.todo;
  switch (filter) {
    case "active":
      return todos.filter((todo) => !todo.done);
    case "completed":
      return todos.filter((todo) => todo.done);
    default:
      return todos;
  }
};

export const {
  addTodo,
  deleteTodo,
  doneTodo,
  clearCompletedTodos,
  filterAll,
  filterActive,
  filterCompleted,
} = todoSlice.actions;

export default todoSlice.reducer;
