import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const getThreadsList = async () => {
    const response = await fetch("https://api.lenzaos.com/thread?v=0.0");
    return response.json();
}

export const getThreads = createAsyncThunk(
    'threads/getThreads',
    getThreadsList,
    );

type TreadType = {
    chat_id: string,
    id: string,
    title: string,
    position: number,
    lastmessage: number,
    unread: 3,
    notification: boolean,
    mention: boolean,
}

interface TreadsState {
    threads: TreadType[],
    isLoading: boolean,
}

const initialState: TreadsState = {
    threads: [],
    isLoading: false,
}

const threadsSlice = createSlice({
    name: "threads",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getThreads.fulfilled, (state, action) => {
                state.threads = [ ...action.payload.response ];
            })
    }
})

export default threadsSlice.reducer;