import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const fetchSectionsList = async () => {
    const response = await fetch('https://api.lenzaos.com/section?v=0.0');
    return response.json();
}

export const fetchSections = createAsyncThunk(
    'sections/getAllSections',
    fetchSectionsList,
)

type SectionType = {
    id: string;
    title: string;
    position: number;
    collapse: boolean;
}

interface SectionState {
    sections: SectionType[],
    isLoading: boolean;
}

const initialState: SectionState = {
    sections: [],
    isLoading: false,
}

const sectionsSlice = createSlice({
    name: "sections",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase( fetchSections.fulfilled, (state, action) => {
                state.sections = [ ...action.payload.response ]
            } )
    }

})

// export const {getSections} = sectionsSlice.actions;

export default sectionsSlice.reducer;