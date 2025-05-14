"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
    Wifi,
    Car,
    Umbrella,
    Compass,
    Mountain,
} from "lucide-react"

export default function ServicesSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const services = [
        {
            icon: <Wifi className="h-8 w-8" />,
            title: "Wi-Fi Gratuito",
            description: "Conexão de alta velocidade em todas as áreas da pousada.",
        },
        {
            icon: <Car className="h-8 w-8" />,
            title: "Estacionamento",
            description: "Estacionamento privativo gratuito para hóspedes.",
        },
        {
            icon: <Umbrella className="h-8 w-8" />,
            title: "Área de Lazer",
            description: "Piscina, espreguiçadeiras e área de descanso.",
        },
        {
            icon: <Compass className="h-8 w-8" />,
            title: "Aluguel de quadriciclos",
            description: "Explore a região com um belo passeio de quadriciclo.",
        },
        {
            icon: <Mountain className="h-8 w-8" />,
            title: "Passeio de buggy",
            description: "Passeios exclusivos pelas praias e dunas da região.",
        }
    ]

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    }

    return (
        <section id="services" className="py-20 bg-gradient-to-b from-white to-blue-50">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    ref={ref}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">Nossos Serviços</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto font-open-sans">
                        Oferecemos uma variedade de serviços e facilidades para tornar sua estadia mais confortável e agradável.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={container}
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                            variants={item}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                            <div className="text-blue-500 mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2 font-poppins">{service.title}</h3>
                            <p className="text-gray-600 font-open-sans">{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
