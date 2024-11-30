import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6749dd03868020296632e71d.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "fetchData",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  "deleteContacts",
  async (id, thunkApi) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data.id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  "addContacts",
  async (contact, thunkApi) => {
    try {
      const { data } = await axios.post("/contacts", contact);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
