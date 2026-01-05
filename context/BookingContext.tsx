"use client";

import React, { createContext, useContext, useReducer, useEffect } from "react";
import { BookingState, BookingAction, TimeSlot } from "@/types/booking";
import { initialBookingData } from "@/data/booking-data";

const STORAGE_KEY = "booking-data";
const bookingReducer = (
  state: BookingState,
  action: BookingAction
): BookingState => {
  switch (action.type) {
    case "SET_SLOTS":
      return {
        ...state,
        slots: action.payload,
      };

    case "SELECT_SLOT":
      return {
        ...state,
        selectedSlot: action.payload,
      };

    case "BOOK_SLOT":
      const updatedSlots = state.slots.map((slot) =>
        slot.id === action.payload.slotId
          ? { ...slot, available: false, bookedBy: action.payload.bookedBy }
          : slot
      );
      if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedSlots));
      }

      return {
        ...state,
        slots: updatedSlots,
        selectedSlot: null,
      };

    case "TOGGLE_FILTER":
      return {
        ...state,
        filterAvailable: !state.filterAvailable,
      };

    case "LOAD_FROM_STORAGE":
      return {
        ...state,
        slots: action.payload,
      };

    default:
      return state;
  }
};

const initialState: BookingState = {
  slots: initialBookingData,
  selectedSlot: null,
  filterAvailable: false,
};
const BookingContext = createContext<
  | {
      state: BookingState;
      dispatch: React.Dispatch<BookingAction>;
    }
  | undefined
>(undefined);
export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(bookingReducer, initialState);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          const parsedSlots: TimeSlot[] = JSON.parse(stored);
          dispatch({ type: "LOAD_FROM_STORAGE", payload: parsedSlots });
        } catch (error) {
          console.error("Error loading from localStorage:", error);
        }
      }
    }
  }, []);

  return (
    <BookingContext.Provider value={{ state, dispatch }}>
      {children}
    </BookingContext.Provider>
  );
};
export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
};
