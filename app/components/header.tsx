"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navItems = [
        { name: "Início", href: "#home" },
        { name: "Sobre", href: "#about" },
        { name: "Acomodações", href: "#accommodations" },
        { name: "Serviços", href: "#services" },
        { name: "Galeria", href: "#gallery" },
        { name: "Localização", href: "#location" },
        { name: "Contato", href: "#contact" },
    ]

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex items-center"
                    >
                        <Link href="/" className="flex items-center">
                            <span className={`text-2xl font-bold font-poppins ${scrolled ? "text-blue-600" : "text-white"}`}>
                                Villa<span className="text-blue-400">Mar</span>
                            </span>
                        </Link>
                    </motion.div>

                    <nav className="hidden md:flex items-center space-x-6">
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * (index + 1) }}
                            >
                                <Link
                                    href={item.href}
                                    className={`text-sm font-medium font-open-sans hover:text-blue-400 transition-colors ${scrolled ? "text-gray-700" : "text-white"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            </motion.div>
                        ))}
                    </nav>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="hidden md:block"
                    >
                        <Button
                            className="bg-blue-500 hover:bg-blue-600 text-white"
                            size="sm"
                            onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            Reserve Agora
                        </Button>
                    </motion.div>

                    <button
                        className="md:hidden text-blue-500 p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.header>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 bg-white pt-20 px-4"
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="flex flex-col gap-6">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className="border-b border-gray-100 pb-4"
                                >
                                    <Link
                                        href={item.href}
                                        className="text-xl font-medium text-gray-800 font-poppins"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.5 }}
                            >
                                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white mt-4">Reserve Agora</Button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
