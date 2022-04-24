import { configureStore } from '@reduxjs/toolkit'
import disneySlice from '../components/homeSlice'

const store = configureStore({
    reducer: {
        disney: disneySlice.reducer
    }
})

export default store