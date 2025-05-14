"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

export default function TestimonialsSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const testimonials = [
        {
            name: "Ana e Pedro",
            location: "São Paulo, SP",
            image: "/placeholder.svg?height=200&width=200",
            text: "Nossa estadia na Villa Mar foi incrível! O atendimento foi impecável, o quarto confortável e a vista para o mar simplesmente deslumbrante. Já estamos planejando voltar no próximo verão.",
            rating: 5,
        },
        {
            name: "Carlos Mendes",
            location: "Rio de Janeiro, RJ",
            image: "/placeholder.svg?height=200&width=200",
            text: "Passamos uma semana maravilhosa na pousada. A localização é perfeita, com acesso direto à praia. O café da manhã é delicioso e variado. Recomendo fortemente para quem busca tranquilidade e conforto.",
            rating: 5,
        },
        {
            name: "Família Silva",
            location: "Belo Horizonte, MG",
            image: "/placeholder.svg?height=200&width=200",
            text: "Viajamos com crianças e a experiência não poderia ter sido melhor. A equipe foi muito atenciosa com os pequenos, a área de lazer é ótima e a proximidade com a praia facilitou muito nossa estadia.",
            rating: 5,
        },
        {
            name: "Juliana Costa",
            location: "Brasília, DF",
            image: "/placeholder.svg?height=200&width=200",
            text: "A Villa Mar superou todas as minhas expectativas. O quarto era espaçoso e limpo, a vista para o mar incrível e o atendimento personalizado fez toda a diferença. Certamente voltarei mais vezes.",
            rating: 5,
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <section className="py-20 bg-blue-50">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    ref={ref}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
                        O que nossos hóspedes dizem
                    </h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto font-open-sans">
                        Veja as experiências de quem já se hospedou na Villa Mar e aproveitou momentos inesquecíveis.
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    <div className="overflow-hidden">
                        <motion.div
                            className="flex"
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                x: `-${currentIndex * 100}%`,
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="min-w-full px-4">
                                    <Card className="bg-white shadow-lg border-none overflow-hidden">
                                        <CardContent className="p-8">
                                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                                <div className="flex-1">
                                                    <div className="flex items-center mb-2">
                                                        {[...Array(testimonial.rating)].map((_, i) => (
                                                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                                        ))}
                                                    </div>
                                                    <p className="text-gray-600 italic mb-4 font-open-sans">{testimonial.text}</p>
                                                    <div>
                                                        <h4 className="font-semibold text-gray-800 font-poppins">{testimonial.name}</h4>
                                                        <p className="text-sm text-gray-500 font-open-sans">{testimonial.location}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    <button
                        className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                        onClick={prevTestimonial}
                        aria-label="Depoimento anterior"
                    >
                        <ChevronLeft className="h-6 w-6 text-gray-600" />
                    </button>

                    <button
                        className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                        onClick={nextTestimonial}
                        aria-label="Próximo depoimento"
                    >
                        <ChevronRight className="h-6 w-6 text-gray-600" />
                    </button>

                    <div className="flex justify-center mt-6 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-blue-500" : "bg-gray-300"}`}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Ir para depoimento ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
