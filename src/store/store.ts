import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "../redux/rootReducer.ts";

export const store = configureStore(rootReducer);