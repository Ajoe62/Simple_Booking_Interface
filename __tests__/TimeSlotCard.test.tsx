import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TimeSlotCard } from "@/components/TimeSlotCard";
import { TimeSlot } from "@/types/booking";

describe("TimeSlotCard", () => {
  const mockSlot: TimeSlot = {
    id: "2024-01-01-09:00",
    day: "Monday",
    date: "Jan 1",
    time: "09:00",
    available: true,
  };

  it("renders slot information correctly", () => {
    render(
      <TimeSlotCard slot={mockSlot} isSelected={false} onClick={() => {}} />
    );

    expect(screen.getByText("09:00")).toBeInTheDocument();
    expect(screen.getByText("Jan 1")).toBeInTheDocument();
    expect(screen.getByText("Available")).toBeInTheDocument();
  });

  it("shows booked status for unavailable slots", () => {
    const bookedSlot = { ...mockSlot, available: false };

    render(
      <TimeSlotCard slot={bookedSlot} isSelected={false} onClick={() => {}} />
    );

    expect(screen.getByText("Booked")).toBeInTheDocument();
  });

  it("calls onClick when clicked and slot is available", () => {
    const handleClick = jest.fn();

    render(
      <TimeSlotCard slot={mockSlot} isSelected={false} onClick={handleClick} />
    );

    const card = screen.getByRole("button");
    fireEvent.click(card);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when slot is unavailable", () => {
    const handleClick = jest.fn();
    const bookedSlot = { ...mockSlot, available: false };

    render(
      <TimeSlotCard
        slot={bookedSlot}
        isSelected={false}
        onClick={handleClick}
      />
    );

    const card = screen.getByRole("button");
    fireEvent.click(card);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it("shows selected status", () => {
    render(
      <TimeSlotCard slot={mockSlot} isSelected={true} onClick={() => {}} />
    );

    expect(screen.getByText("Selected")).toBeInTheDocument();
  });
});
