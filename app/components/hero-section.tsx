"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    })

    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden" ref={ref}>
            {/* Background Image with Parallax Effect */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="w-full h-full bg-cover bg-center"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: inView ? 1 : 1.1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    style={{
                        backgroundImage: "url('/background.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "100%",
                        width: "100%",
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-10"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-poppins">
                        Bem-vindo à <span className="text-blue-400">Villa Mar</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-open-sans">
                        Conforto e Beleza à Beira-Mar. Descanse em nossos ambientes exclusivos com o melhor do litoral.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Button
                        size="lg"
                        className="bg-blue-500 hover:bg-blue-600 text-white"
                        onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        <Link href={"https://wa.me/558494067845"} target="_blank">
                            Reserve agora
                        </Link>
                    </Button>
                    <Button
                        size="lg"
                        variant="link"
                        className="border-white text-white hover:bg-white/10"
                        onClick={() => document.getElementById("accommodations")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        Conheça Nossas Acomodações
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
                transition={{ duration: 0.8, delay: 0.8 }}
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                >
                    <ChevronDown className="h-10 w-10 text-white/80" />
                </motion.div>
            </motion.div>
        </section>
    )
}
