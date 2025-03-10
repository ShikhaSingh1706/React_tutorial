import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react";

const initialState={
    todos:[{id:1, text:"hello world"}]

}
// function sayHello(){
//     console.log("hello world!");
// }

export const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        // addTodo: sayHello
        addTodo:(state,action)=>{
            const todo={
                // id:1,
                id:nanoid(),
                // text:"hello world",
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
    }
})

export const {addTodo,removeTodo}=todoSlice.actions

export default todoSlice.reducer