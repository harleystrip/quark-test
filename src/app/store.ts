import {configureStore, createSlice, getDefaultMiddleware} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import saga from "./saga";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        modalType: null,
    },
    reducers: {
        changeModalState: (state, action) => {
            return {
                modalType: action.payload
            };
        }
    }
});

export const { changeModalState } = authSlice.actions;

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
    reducer: authSlice.reducer,
    middleware
})

sagaMiddleware.run(saga);

export type AppDispatch = typeof store.dispatch

export default store