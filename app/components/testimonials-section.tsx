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
            name: "carloslima Carlos",
            location: "Google",
            image: "/placeholder.svg?height=200&width=200",
            text: "Super recomendo, atendimento diferenciado desde o primeiro contato. Quartos tudo limpo e organizado,com certeza voltaremos mais vezes. Recepção do adjair feztoda diferença. 👏🏾👏🏾👏🏾",
            rating: 5,
        },
        {
            name: "Clara Rayssa Aragão",
            location: "Google",
            image: "/placeholder.svg?height=200&width=200",
            text: "Uma estadia incrível! Local super agradável, quartos limpos e aconchegantes e a vista nem se fala. Equipe muito simpática, sempre dispostos a ajudar e indicar bons locais em Baia Formosa. Recomendo demais!",
            rating: 5,
        },
        {
            name: "Juliana Landim",
            location: "Google",
            image: "/placeholder.svg?height=200&width=200",
            text: "Quarto bem espaçoso, tudo organizado... Atendimento impecável! Voltei mais vezes! Recomendo!",
            rating: 5,
        },
        {
            name: "Hanna Camila",
            location: "Google",
            image: "/placeholder.svg?height=200&width=200",
            text: "Apartamentos confortáveis, com um bom custo benefício e ficam numa área de muito sossego. Tem uma ótima vista da cidade! Só não possui café da manhã, mas a cidade oferece algumas cafeterias.",
            rating: 5,
        },
        {
            name: "Roberto Friba",
            location: "Google",
            image: "/placeholder.svg?height=200&width=200",
            text: "Vista linda,  o atendimento é excepcional, o quarto é bem espaçoso.",
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
