import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Notiflix from 'notiflix';

const axiosInstance = axios.create({
  baseURL: "https://65ff177fdf565f1a6144bc70.mockapi.io/api/camper",
});

const ENDPOINTS = Object.freeze({
  getAll: "adverts",
});

export const SearchParams = (params, obj) => {
  for (const [key, value] of params.entries()) {
    obj[key] = value;
  }
};

export const getAllCards = createAsyncThunk(
  "adverts/getAll",
  async ({ page, limit, searchParams }, thunkAPI) => {
    const axiosParams = {
      page,
      limit,
    };

    SearchParams(searchParams, axiosParams);

    try {
      const { data } = await axiosInstance.get(ENDPOINTS.getAll, {
        params: axiosParams,
      });

      return data;
    } catch (error) {
      Notiflix.Notify.warning('Oooops, something goes wrong');
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getTotal = createAsyncThunk(
  "adverts/getTotal",
  async (searchParams, thunkAPI) => {
    const axiosParams = {};

    SearchParams(searchParams, axiosParams);

    try {
      const { data } = await axiosInstance.get(ENDPOINTS.getAll, {
        params: axiosParams,
      });

      return data;
    } catch (error) {
      Notiflix.Notify.warning('Oooops, something goes wrong');
      return thunkAPI.rejectWithValue(error);
    }
  }
);