import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../app/api";
import axios from "axios";



interface bookingItem {
    userId: string,
    serviceID: string,
    price: number,
    createdAt: string,
    status: string
}

interface BookingState {
    isLoading: boolean;
    success: boolean;
    error: string | null;
    bookings: bookingItem[];
}

const initialState: BookingState = {
    isLoading: false,
    success: false,
    error: null,
    bookings: []
}

export const fetchbooking = createAsyncThunk("booking/createBooking", async (bookingData: bookingItem, { rejectWithValue }) => {
    try {
        const response = await api.post("/booking", bookingData);
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data?.message || "Booking Error ")
        }
    }
})


const bookingSlice = createSlice({
    name: "booking",
    initialState: initialState,
    reducers: {
        resetBookingState: (state) => {
            state.isLoading = false;
            state.success = false;
            state.error = null
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchbooking.pending, (state) => {
                state.isLoading = true;
                state.success = false;
                state.error = null
            })
            .addCase(fetchbooking.fulfilled, (state, action) => {
                state.isLoading = false;
                state.success = true;
                state.bookings.push(action.payload)
            })
            .addCase(fetchbooking.rejected, (state, action) => {
                state.isLoading = false;
                state.success = false;
                state.error = action.payload as string || "somthing went wrong "
            })
    }


})


export const { resetBookingState } = bookingSlice.actions;
export default bookingSlice.reducer;