import axios from "axios";
import api from "../../app/api";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// api connect 

export const fetchService = createAsyncThunk(
    "services/fetchServicesAll", async (_, { rejectWithValue }) => {
        try {
            const response = await api.get("/services");
            return response.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data || "Server error")
            }
            return rejectWithValue("an unexpected error ");
        }
    }
)

// service Slice 
interface Service {
    id: number;
    name: string;
    description?: string;
    category: string,
    price: number,
    duration: number,
    iconName: string,
    background: string

}

interface ServiceState {
    data: Service[];
    isLoading: boolean;
    isError: string | null;
}

const initialState: ServiceState = {
    data: [],
    isLoading: false,
    isError: null,
};

const serviceSlice = createSlice({
    name: "services",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchService.pending, (state) => {
                state.isLoading = true;
                state.isError = null;
            })
            .addCase(fetchService.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload.data || action.payload;
            })
            .addCase(fetchService.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.payload as string || " Somthing went Wrong"
            })
    }
})

export default serviceSlice.reducer