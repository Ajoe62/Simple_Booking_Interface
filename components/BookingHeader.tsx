"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";
import { useBooking } from "@/context/BookingContext";
import { ThemeToggle } from "./ThemeToggle";
import { Filter, CheckCircle2, Calendar as CalendarIcon } from "lucide-react";

interface BookingHeaderProps {
  onConfirmClick: () => void;
}

export const BookingHeader: React.FC<BookingHeaderProps> = ({
  onConfirmClick,
}) => {
  const { state, dispatch } = useBooking();

  const availableCount = state.slots.filter((slot) => slot.available).length;
  const bookedCount = state.slots.filter((slot) => !slot.available).length;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight flex items-center gap-2">
            <CalendarIcon className="h-8 w-8 text-primary" />
            Counselling Booking
          </h1>
          <p className="text-muted-foreground mt-2">
            Select an available time slot for your counselling session
          </p>
        </div>
        <ThemeToggle />
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span className="text-sm">
                  <span className="font-semibold">{availableCount}</span>{" "}
                  Available
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-destructive" />
                <span className="text-sm">
                  <span className="font-semibold">{bookedCount}</span> Booked
                </span>
              </div>
              {state.selectedSlot && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    {state.selectedSlot.day} at {state.selectedSlot.time}
                  </span>
                </motion.div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg border bg-card">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <label
                  htmlFor="filter-toggle"
                  className="text-sm font-medium cursor-pointer flex-1"
                >
                  Show Available Only
                </label>
                <Switch
                  id="filter-toggle"
                  checked={state.filterAvailable}
                  onCheckedChange={() => dispatch({ type: "TOGGLE_FILTER" })}
                />
              </div>
              <Button
                onClick={onConfirmClick}
                disabled={!state.selectedSlot}
                size="lg"
                className="sm:min-w-[160px]"
              >
                Confirm Booking
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
