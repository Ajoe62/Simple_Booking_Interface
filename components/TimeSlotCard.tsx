"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { TimeSlot } from "@/types/booking";
import { Check, X, Clock } from "lucide-react";

interface TimeSlotCardProps {
  slot: TimeSlot;
  isSelected: boolean;
  onClick: () => void;
}

export const TimeSlotCard: React.FC<TimeSlotCardProps> = ({
  slot,
  isSelected,
  onClick,
}) => {
  const getStatusIcon = () => {
    if (!slot.available) return <X className="h-3 w-3" />;
    if (isSelected) return <Check className="h-3 w-3" />;
    return <Clock className="h-3 w-3" />;
  };

  const getStatusBadge = () => {
    if (!slot.available) return <Badge variant="destructive">Booked</Badge>;
    if (isSelected) return <Badge variant="success">Selected</Badge>;
    return <Badge variant="outline">Available</Badge>;
  };

  return (
    <motion.div
      whileHover={slot.available ? { scale: 1.02 } : {}}
      whileTap={slot.available ? { scale: 0.98 } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Card
        className={cn(
          "p-3 cursor-pointer transition-all duration-200 border-2",
          slot.available
            ? "hover:border-primary hover:shadow-md"
            : "bg-muted cursor-not-allowed opacity-60",
          isSelected && "border-primary bg-primary/5 shadow-md"
        )}
        onClick={slot.available ? onClick : undefined}
        role="button"
        aria-label={`${slot.time} on ${slot.day}, ${
          slot.available ? "available" : "booked"
        }`}
        aria-pressed={isSelected}
        tabIndex={slot.available ? 0 : -1}
        onKeyDown={(e) => {
          if (slot.available && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            onClick();
          }
        }}
      >
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-1">
              {getStatusIcon()}
              <span className="font-semibold text-sm truncate">
                {slot.time}
              </span>
            </div>
            <p className="text-xs text-muted-foreground truncate">
              {slot.date}
            </p>
          </div>
          <div className="flex-shrink-0">{getStatusBadge()}</div>
        </div>
      </Card>
    </motion.div>
  );
};
