import {createSlice} from '@reduxjs/toolkit'

export const goalsSlice = createSlice({
    name:'goals',
    initialState: {
        value: []
    },
    reducers:{
        addGoal: (state, action) =>{
            console.log(action.payload)
            state.value.push(action.payload);
            fetch("http://localhost:3001/goals/addGoal",{
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
        initAddGoal: (state,action) =>{
            console.log(action.payload);
            state.value.push(action.payload)
        },
        removeGoal: (state, action) => {
            console.log("remove:")
            console.log(action.payload)
            state.value=state.value.filter((goal)=>goal.id!==action.payload);
            fetch("http://localhost:3001/goals/removeGoal/"+action.payload,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"123456"
                }
            }).catch(err=>{
                console.log(err)
            })
        }
    }
})

export const {addGoal, initAddGoal, removeGoal} = goalsSlice.actions;
export const selectGoals = (state) => state.goals.value;

export default goalsSlice.reducer;
