import sectionsReducer from "./sectionsReducer.ts";
import chatsReducer from "./chatsReducer.ts";

export const rootReducer = {
    reducer: {
        sections: sectionsReducer,
        chats: chatsReducer,
    }
}