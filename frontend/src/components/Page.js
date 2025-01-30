"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function Page() {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.3 }}
            >
            </motion.div>
        </AnimatePresence>
    );
}