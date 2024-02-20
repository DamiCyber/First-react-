import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import userReducer from "./UserSlice";

const Store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer, // assuming you have a UserSlice file
  },
});

export default Store;