"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useBooking } from "@/context/BookingContext";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Calendar, Clock, User } from "lucide-react";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  open,
  onOpenChange,
}) => {
  const { state, dispatch } = useBooking();
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirmBooking = async () => {
    if (!state.selectedSlot) return;

    if (!userName.trim()) {
      toast.error("Please enter your name");
      return;
    }

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));

    dispatch({
      type: "BOOK_SLOT",
      payload: {
        slotId: state.selectedSlot.id,
        bookedBy: userName,
      },
    });

    toast.success("Booking confirmed!", {
      description: `Your appointment on ${state.selectedSlot.day} at ${state.selectedSlot.time} has been booked.`,
    });

    setUserName("");
    setIsLoading(false);
    onOpenChange(false);
  };

  if (!state.selectedSlot) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Confirm Your Booking</DialogTitle>
          <DialogDescription>
            Please review your booking details and enter your name to confirm.
          </DialogDescription>
        </DialogHeader>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-4 py-4"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Date</p>
                <p className="text-sm text-muted-foreground">
                  {state.selectedSlot.day}, {state.selectedSlot.date}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <Clock className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Time</p>
                <p className="text-sm text-muted-foreground">
                  {state.selectedSlot.time}
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Your Name</span>
            </div>
            <Input
              id="userName"
              placeholder="Enter your full name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleConfirmBooking();
                }
              }}
              autoFocus
            />
          </div>
        </motion.div>

        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button
            variant="outline"
            onClick={() => {
              onOpenChange(false);
              setUserName("");
            }}
            disabled={isLoading}
            className="w-full sm:w-auto"
          >
            Cancel
          </Button>
          <Button
            onClick={handleConfirmBooking}
            disabled={isLoading}
            className="w-full sm:w-auto"
          >
            {isLoading ? "Confirming..." : "Confirm Booking"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
