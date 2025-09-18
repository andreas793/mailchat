import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const fetchChatsList = async () => {
    const response = await fetch("https://api.lenzaos.com/chat?v=0.0");
    return response.json();
}

export const fetchChats = createAsyncThunk(
    'chats/fetchChats',
    fetchChatsList
)

type ChatsType = {
    section_id: string;
    id: string;
    title: string;
    position: number;
    lastmessage: number;
    unread: number;
    notification: boolean;
    mention: boolean;
}

interface ChatsState {
    chats: ChatsType[];
    isLoading: boolean;
}

const initialState: ChatsState = {
    chats: [],
    isLoading: false,
}

const chatsSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchChats.fulfilled, (state, action) => {
                state.chats = [ ...action.payload.response ]
            })
    },
});

export default chatsSlice.reducer;