import { configureStore } from '@reduxjs/toolkit';

import locationReducer from '../features/location/locationSlice';
import userDataReducer from '../features/user/userDataSlice';

export const store = configureStore({
	reducer: {
		location: locationReducer,
		userData: userDataReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch