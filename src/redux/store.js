import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import filterReducer from './filterSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistContactsConfig = {
  key: 'contacts',
  storage,
};

const persistedContactsReducer = persistReducer(
  persistContactsConfig,
  contactsReducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export const persistor = persistStore(store);
