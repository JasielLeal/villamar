"use client"

import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"
export default function WhatsAppButton() {
    return (
        <motion.a
            href="https://wa.me/558494067845"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
        >
            <FaWhatsapp className="h-6 w-6" />
            <span className="sr-only">WhatsApp</span>
        </motion.a>
    )
}
