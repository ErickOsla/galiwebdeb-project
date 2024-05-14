import { configureStore } from "@reduxjs/toolkit";
import goalReducer from "./reducers/goalsSlice";
import optionReducer from "./reducers/optionSlice";
import taskReducer from "./reducers/taskSlice"


export default configureStore({
    reducer:{
        tasks:taskReducer,
        goals:goalReducer,
        option:optionReducer
    }
})

