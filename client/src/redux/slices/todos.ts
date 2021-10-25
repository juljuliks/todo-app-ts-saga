/* eslint-disable import/prefer-default-export */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITodo } from '../../types';

interface TodosSliceState {
  items: ITodo[];
  isLoading: boolean;
  error: string | null
}

const initialState: TodosSliceState = {
  items: [],
  isLoading: false,
  error: null,
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    getAllTodosPending: (state) => {
      state.isLoading = true;
    },
    getAllTodosFullfilled: (state, action: PayloadAction<ITodo[]>) => {
      state.items = action.payload;
      state.error = null;
      state.isLoading = false;
    },
    getAllTodosRejected: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    createTodoPending: (state, action) => {
      state.isLoading = true;
    },
    createTodoFullfilled: (state, action: PayloadAction<ITodo>) => {
      state.items.push(action.payload);
      state.error = null;
      state.isLoading = false;
    },
    createTodoRejected: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    deleteTodoPending: (state, action) => {
      state.isLoading = true;
    },
    deleteTodoFullfilled: (state, action: PayloadAction<{ todoId: number }>) => {
      const index = state.items.findIndex((todo) => todo.id === action.payload.todoId);
      state.items.splice(index, 1);
      state.error = null;
      state.isLoading = false;
    },
    deleteTodoRejected: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    editTodoPending: (state, action) => {
      state.isLoading = true;
    },
    editTodoFullfilled: (state, action: PayloadAction<ITodo>) => {
      state.items = state.items.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }
        return todo;
      });
      state.error = null;
      state.isLoading = false;
    },
    editTodoRejected: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default todosSlice.reducer;
export const { actions: todosActions } = todosSlice;
