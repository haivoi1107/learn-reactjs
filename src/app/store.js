import counterReducer from '../features/Counter/counterSlice';
import useReducer from '../features/Auth/userSlice';
const { configureStore } =  require("@reduxjs/toolkit");

const rootReducer = {
    count: counterReducer,
    user: useReducer
}
const store = configureStore({
    reducer : rootReducer,
});

export default store;