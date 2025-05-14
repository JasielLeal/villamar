"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { MapPin, Clock, Bus, Compass } from "lucide-react"

export default function LocationSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const locationInfo = [
        {
            icon: <MapPin className="h-6 w-6 text-blue-500" />,
            title: "Endereço",
            description: "Rua Maria Neuza Cipriano da Costa 2, Alto do pau ferro, Centro, Baía Formosa - RN",
        },
        {
            icon: <Clock className="h-6 w-6 text-blue-500" />,
            title: "Check-in / Check-out",
            description: "Check-in: 14h / Check-out: 12h",
        },
        {
            icon: <Bus className="h-6 w-6 text-blue-500" />,
            title: "Como Chegar",
            description: "A apenas 5 minutos da praia de Villamar, acesso pela rodovia principal",
        },
        {
            icon: <Compass className="h-6 w-6 text-blue-500" />,
            title: "Atrações Próximas",
            description: "Trilhas, passeios de barco, restaurantes e comércio local",
        },
    ]

    return (
        <section id="location" className="py-20 bg-gradient-to-b from-blue-50 to-white">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    ref={ref}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">Localização</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto font-open-sans">
                        Estrategicamente localizada em uma das mais belas praias do litoral, com fácil acesso e próxima a diversas
                        atrações.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8 }}
                        className="bg-gray-200 rounded-lg overflow-hidden h-[400px] shadow-lg"
                    >
                        
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.1530010195634!2d-35.0082467!3d-6.374240299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b29d2bdbb99865%3A0xea1d80a6b686eee2!2sVilla%20Mar%20-%20Ba%C3%ADa%20Formosa!5e0!3m2!1spt-BR!2sbr!4v1747228721770!5m2!1spt-BR!2sbr"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Localização da Pousada Villa Mar">
                        </iframe>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="grid grid-cols-1 gap-6">
                            {locationInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start space-x-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                                >
                                    <div className="mt-1 bg-blue-100 rounded-full p-2">{info.icon}</div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 font-poppins">{info.title}</h4>
                                        <p className="text-gray-600 font-open-sans">{info.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            className="mt-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <h4 className="text-lg font-semibold text-gray-800 mb-2 font-poppins">Explore a Região</h4>
                            <p className="text-gray-600 mb-4 font-open-sans">
                                Nossa pousada está localizada em uma região privilegiada, com fácil acesso a diversas atrações
                                turísticas, restaurantes, comércio local e atividades de lazer. Aproveite para conhecer as belezas
                                naturais do litoral e vivenciar experiências únicas.
                            </p>
                            <p className="text-gray-600 font-open-sans">
                                Nossa equipe está à disposição para fornecer informações sobre passeios, restaurantes e dicas locais
                                para tornar sua estadia ainda mais especial.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section >
    )
}
