export interface TimeSlot {
  id: string;
  day: string;
  date: string;
  time: string;
  available: boolean;
  bookedBy?: string;
}

export interface BookingState {
  slots: TimeSlot[];
  selectedSlot: TimeSlot | null;
  filterAvailable: boolean;
}

export type BookingAction =
  | { type: "SET_SLOTS"; payload: TimeSlot[] }
  | { type: "SELECT_SLOT"; payload: TimeSlot | null }
  | { type: "BOOK_SLOT"; payload: { slotId: string; bookedBy: string } }
  | { type: "TOGGLE_FILTER" }
  | { type: "LOAD_FROM_STORAGE"; payload: TimeSlot[] };
