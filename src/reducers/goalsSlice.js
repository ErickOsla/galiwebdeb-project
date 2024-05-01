import {createSlice} from '@reduxjs/toolkit'

export const goalsSlice = createSlice({
    name:'goals',
    initialState: {
        value: [
            {
            "name": 'Terminar el TDS',
            "description":'Completar todos los cursos',
            "dueDate":'01-12-24'
            }
        ]
    },
    reducers:{
        addGoal: (state, acction) =>{
            state.value.push(acction.payload);
        }
    }
})

export const {addGoal} = goalsSlice.actions;
export default goalsSlice.reducer;
