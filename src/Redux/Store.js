import { configureStore } from '@reduxjs/toolkit'
import peopleReducer from '../Redux/Slices.js'

export default configureStore({
    reducer: {

        people: peopleReducer,
    },
})