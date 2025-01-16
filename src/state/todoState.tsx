import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "TodoState",
  initialState: {
    todoList: [
      {
        id: 1,
        name: "Name1",
      },
      {
        id: 2,
        name: "Name2",
      },
      {
        id: 3,
        name: "Name3",
      },
    ],
    votes: [
      {
        id: 1,
        vote: 0,
      },
      {
        id: 2,
        vote: 0,
      },
      {
        id: 3,
        vote: 0,
      },
    ],
  },
  reducers: {
    setTodoList: (state, action) => {
      state.todoList = action.payload;
    },
    setCounterPlus: (state, action) => {
      const newCount = state.votes.map((counter) => {
        if (counter.id == action.payload + 1) {
          return { ...counter, vote: counter.vote + 1 };
        }
        return { ...counter };
      });
      state.votes = newCount;
    },
    setCounterMinus: (state, action) => {
      const newCount = state.votes.map((counter) => {
        if (counter.id == action.payload + 1) {
          return { ...counter, vote: counter.vote - 1 };
        }
        return { ...counter };
      });
      state.votes = newCount;
    },
  },
});

export const { setTodoList, setCounterPlus, setCounterMinus } =
  todoSlice.actions;

export const getTodoList = (state) => state.todo.todoList;
export const getCounter = (state) => state.todo.votes;

export default todoSlice.reducer;
