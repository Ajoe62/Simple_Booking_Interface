"use client";

import React from "react";
import { motion } from "framer-motion";
import { TimeSlotCard } from "./TimeSlotCard";
import { useBooking } from "@/context/BookingContext";
import { daysOfWeek, timeSlots } from "@/data/booking-data";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export const BookingCalendar: React.FC = () => {
  const { state, dispatch } = useBooking();

  const handleSlotClick = (slot: any) => {
    if (slot.available) {
      dispatch({
        type: "SELECT_SLOT",
        payload: state.selectedSlot?.id === slot.id ? null : slot,
      });
    }
  };

  const getSlotsByDay = (day: string) => {
    return state.slots.filter((slot) => slot.day === day);
  };

  const filteredDays = daysOfWeek.map((day) => {
    const daySlots = getSlotsByDay(day);
    return {
      day,
      slots: state.filterAvailable
        ? daySlots.filter((slot) => slot.available)
        : daySlots,
    };
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full">
      <div className="hidden lg:block">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-7 gap-4"
        >
          {filteredDays.map(({ day, slots: daySlots }) => (
            <motion.div key={day} variants={item}>
              <Card className="h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold text-center">
                    {day}
                  </CardTitle>
                </CardHeader>
                <div className="p-3 pt-0 space-y-2">
                  {daySlots.length > 0 ? (
                    daySlots.map((slot) => (
                      <TimeSlotCard
                        key={slot.id}
                        slot={slot}
                        isSelected={state.selectedSlot?.id === slot.id}
                        onClick={() => handleSlotClick(slot)}
                      />
                    ))
                  ) : (
                    <p className="text-xs text-center text-muted-foreground py-4">
                      No slots available
                    </p>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="lg:hidden">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-4"
        >
          {filteredDays.map(({ day, slots: daySlots }) => (
            <motion.div key={day} variants={item}>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-semibold">
                    {day}
                  </CardTitle>
                </CardHeader>
                <div className="p-4 pt-0">
                  {daySlots.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                      {daySlots.map((slot) => (
                        <TimeSlotCard
                          key={slot.id}
                          slot={slot}
                          isSelected={state.selectedSlot?.id === slot.id}
                          onClick={() => handleSlotClick(slot)}
                        />
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-center text-muted-foreground py-4">
                      No slots available
                    </p>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
