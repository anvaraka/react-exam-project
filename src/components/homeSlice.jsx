import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const callToAPi = createAsyncThunk('api/disney', async (obj, { state, error }) => {
    try {
        const res = await axios.get('https://api.disneyapi.dev/characters?page=2')
        return res.data.data
    } catch (error) {
        return []
    }
})

const disneySlice = createSlice({
    name: 'disney',
    initialState: [],
    reducers: {},
    extraReducers: {
        [callToAPi.pending]: (state, action) => {
            return []
        },
        [callToAPi.fulfilled]: (state, action) => {
            return action.payload
        },
        [callToAPi.rejected]: (state, action) => {
            return []
        },
    }
})

export const actions = disneySlice.actions
export default disneySlice