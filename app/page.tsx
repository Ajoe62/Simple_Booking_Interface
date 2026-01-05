"use client";

import { useState } from "react";
import { BookingCalendar } from "@/components/BookingCalendar";
import { BookingHeader } from "@/components/BookingHeader";
import { BookingModal } from "@/components/BookingModal";
import { motion } from "framer-motion";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <BookingHeader onConfirmClick={() => setIsModalOpen(true)} />
          <BookingCalendar />
        </motion.div>
      </main>

      <BookingModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}
