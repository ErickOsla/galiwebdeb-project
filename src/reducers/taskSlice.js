import {createSlice} from '@reduxjs/toolkit'

export const taskSlice = createSlice({
    name:'tasks',
    initialState: {
        value: []
    },
    reducers:{
        addTask: (state, action) =>{
            console.log(action.payload);
            state.value.push(action.payload);
            fetch("http://localhost:3001/tasks/addTask",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"123456"
                },
                body: JSON.stringify(action.payload)
            }).catch(err=>{
                console.log(err);
            })
        },
        initAddTask: (state, action) => {
            console.log(action.payload);
            state.value.push(action.payload)
        },
        removeTask: (state, action) =>{
            state.value= state.value.filter((task)=>task.id!==action.payload);
            fetch("http://localhost:3001/tasks/removeTask/"+action.payload,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"123456"
                },
            }).catch(err=>{
                console.log(err);
            })
        },
    }
})

export const {addTask, initAddTask, removeTask} = taskSlice.actions;
export const selectTasks = (state) => state.tasks.value;

export default taskSlice.reducer;
