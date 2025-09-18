import sectionsReducer from "./sectionsReducer.ts";
import chatsReducer from "./chatsReducer.ts";
import threadsReducer from "./threadsReducer.ts";

export const rootReducer = {
    reducer: {
        sections: sectionsReducer,
        chats: chatsReducer,
        threads: threadsReducer,
    }
}