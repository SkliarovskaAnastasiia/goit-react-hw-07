import { createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';
import { selectFilter } from './filterSlice';

axios.defaults.baseURL = 'https://67d0756e825945773eb0f9d8.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const responce = await axios.get('/contacts');
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const responce = await axios.post('/contacts', {
        name: contact.name,
        number: contact.number,
      });
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const responce = await axios.delete(`/contacts/${contactId}`);

      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Selectors

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().startsWith(filter.toLowerCase())
    );
  }
);
