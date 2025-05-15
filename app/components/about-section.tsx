"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Anchor, Award, Users, Eye } from "lucide-react"

export default function AboutSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const features = [
        {
            icon: <Eye className="h-6 w-6 text-blue-500" />,
            title: "Vista Panorâmica",
            description: "Aprecie uma vista incrível de toda a cidade, direto da pousada.",
        },
        {
            icon: <Award className="h-6 w-6 text-blue-500" />,
            title: "Excelência em Hospitalidade",
            description: "Atendimento personalizado e cuidadoso para cada hóspede.",
        },
        {
            icon: <Anchor className="h-6 w-6 text-blue-500" />,
            title: "Experiências Únicas",
            description: "Atividades exclusivas para tornar sua estadia memorável.",
        },
        {
            icon: <Users className="h-6 w-6 text-blue-500" />,
            title: "Ambiente Familiar",
            description: "Espaço acolhedor ideal para famílias e grupos de amigos.",
        },
    ]

    return (
        <section id="about" className="py-20 bg-blue-50">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    ref={ref}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">Sobre a Villa Mar</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto font-open-sans">
                        Descubra o refúgio perfeito em meio à natureza, onde conforto e tranquilidade se encontram para criar momentos inesquecíveis
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src="/about.jpeg"
                                alt="Villa Mar Pousada"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 font-poppins">Nossa História</h3>
                        <p className="text-gray-600 mb-6 font-open-sans">
                            Fundada em 2013 sob o nome Flor do Caribe, a pousada passou por uma década de história recebendo hóspedes com carinho e simplicidade. Em 2023, iniciamos uma nova fase: assumimos a gestão, realizamos uma transformação completa no espaço e na proposta, e assim nasceu a Villa Mar
                        </p>
                        <p className="text-gray-600 mb-8 font-open-sans">
                            Com um novo conceito de hospedagem, a Villa Mar foi criada para oferecer uma experiência acolhedora, onde cada detalhe convida você a se sentir em casa — com o conforto, o cuidado e a autenticidade que só uma pousada familiar pode proporcionar.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start space-x-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                                >
                                    <div className="mt-1 bg-blue-100 rounded-full p-2">{feature.icon}</div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 font-poppins">{feature.title}</h4>
                                        <p className="text-gray-600 font-open-sans">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
