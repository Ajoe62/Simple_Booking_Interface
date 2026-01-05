import { renderHook, act } from "@testing-library/react";
import { BookingProvider, useBooking } from "@/context/BookingContext";
import { ReactNode } from "react";

const wrapper = ({ children }: { children: ReactNode }) => (
  <BookingProvider>{children}</BookingProvider>
);

describe("BookingContext", () => {
  it("provides initial state", () => {
    const { result } = renderHook(() => useBooking(), { wrapper });

    expect(result.current.state.slots).toBeDefined();
    expect(result.current.state.selectedSlot).toBeNull();
    expect(result.current.state.filterAvailable).toBe(false);
  });

  it("selects a slot", () => {
    const { result } = renderHook(() => useBooking(), { wrapper });

    const slot = result.current.state.slots[0];

    act(() => {
      result.current.dispatch({
        type: "SELECT_SLOT",
        payload: slot,
      });
    });

    expect(result.current.state.selectedSlot).toEqual(slot);
  });

  it("toggles filter", () => {
    const { result } = renderHook(() => useBooking(), { wrapper });

    expect(result.current.state.filterAvailable).toBe(false);

    act(() => {
      result.current.dispatch({ type: "TOGGLE_FILTER" });
    });

    expect(result.current.state.filterAvailable).toBe(true);
  });

  it("books a slot", () => {
    const { result } = renderHook(() => useBooking(), { wrapper });

    const availableSlot = result.current.state.slots.find((s) => s.available)!;

    act(() => {
      result.current.dispatch({
        type: "BOOK_SLOT",
        payload: {
          slotId: availableSlot.id,
          bookedBy: "John Doe",
        },
      });
    });

    const bookedSlot = result.current.state.slots.find(
      (s) => s.id === availableSlot.id
    );

    expect(bookedSlot?.available).toBe(false);
    expect(bookedSlot?.bookedBy).toBe("John Doe");
    expect(result.current.state.selectedSlot).toBeNull();
  });
});
