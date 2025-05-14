"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"

import { Wifi, Tv, Bath, ChevronLeft, ChevronRight, Car } from "lucide-react"

export default function AccommodationsSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const [activeRoom, setActiveRoom] = useState(0)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const rooms = [
        {
            name: "Suíte com Ventilador",
            description:
                "Acomodação confortável e econômica com varanda e vista panorâmica da cidade. Ideal para quem busca simplicidade sem abrir mão da vista.",
            price: "R$ 129,99",
            images: [
                "/suite-dupla/suite-dupla1.jpeg",
                "/suite-dupla/suite-dupla2.jpeg",
                "/suite-dupla/suite-dupla3.jpeg",
            ],
            amenities: ["Cama box casal", "Ventilador", "Varanda", "Banheiro privativo", "Smart TV"],
            icons: [<Wifi key="wifi" />, <Car key="car" />, <Tv key="tv" />, <Bath key="bath" />],
        },
        {
            name: "Suíte Dupla",
            description:
                "Perfeita para casais, esta suíte oferece conforto e tranquilidade com vista para o jardim e todos os itens essenciais para uma estadia aconchegante.",
            price: "R$ 199,99",
            images: [
                "/suite-dupla/suite-dupla1.jpeg",
                "/suite-dupla/suite-dupla2.jpeg",
                "/suite-dupla/suite-dupla3.jpeg",
            ],
            amenities: ["Cama box casal", "Ar-condicionado", "Frigobar", "Banheiro privativo", "Smart TV", "Chuveiro Elétrico"],
            icons: [<Wifi key="wifi" />, <Car key="car" />, <Tv key="tv" />, <Bath key="bath" />],
        },
        {
            name: "Suíte Tripla",
            description:
                "A opção ideal para pequenos grupos ou famílias. Espaçosa e equipada, garante conforto com uma excelente relação custo-benefício.",
            price: "R$ 299,99",
            images: [
                "/suite-dupla/suite-dupla1.jpeg",
                "/suite-dupla/suite-dupla2.jpeg",
                "/suite-dupla/suite-dupla3.jpeg",
            ],
            amenities: ["Cama box casal", "Ar-condicionado", "Frigobar", "Banheiro privativo", "Smart TV", "Chuveiro Elétrico"],
            icons: [<Wifi key="wifi" />, <Car key="car" />, <Tv key="tv" />, <Bath key="bath" />],
        },
        {
            name: "Suíte Master",
            description:
                "Espaçosa e sofisticada, esta suíte oferece varanda com vista privilegiada da cidade e conforto premium para relaxar em grande estilo.",
            price: "R$ 349,99",
            images: [
                "/suite-dupla/suite-dupla1.jpeg",
                "/suite-dupla/suite-dupla2.jpeg",
                "/suite-dupla/suite-dupla3.jpeg",
            ],
            amenities: ["Cama queen", "Ar-condicionado", "Frigobar", "Banheiro privativo", "Varanda", "Bancada com pia flat"],
            icons: [<Wifi key="wifi" />, <Car key="car" />, <Tv key="tv" />, <Bath key="bath" />],
        },
        {
            name: "Suíte 4 Pessoas",
            description:
                "Ideal para famílias ou grupos, esta suíte espaçosa combina conforto, vista panorâmica e infraestrutura completa para uma estadia memorável.",
            price: "R$ 379,99",
            images: [
                "/suite-dupla/suite-dupla1.jpeg",
                "/suite-dupla/suite-dupla2.jpeg",
                "/suite-dupla/suite-dupla3.jpeg",
            ],
            amenities: ["Cama box casal", "Ar-condicionado", "Frigobar", "Banheiro privativo", "Smart TV", "Chuveiro Elétrico", "2 camas de solteiro"],
            icons: [<Wifi key="wifi" />, <Car key="car" />, <Tv key="tv" />, <Bath key="bath" />],
        },
    ];


    const nextImage = () => {
        const room = rooms[activeRoom]
        setCurrentImageIndex((prev) => (prev + 1) % room.images.length)
    }

    const prevImage = () => {
        const room = rooms[activeRoom]
        setCurrentImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length)
    }

    const handleRoomChange = (index: number) => {
        setActiveRoom(index)
        setCurrentImageIndex(0) // Reset para a primeira imagem ao trocar de quarto
    }

    return (
        <section id="accommodations" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    ref={ref}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">Nossas Acomodações</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto font-open-sans">
                        Conheça nossas suítes cuidadosamente decoradas para proporcionar o máximo de conforto durante sua estadia.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center mb-10 space-x-2">
                    {rooms.map((room, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                        >
                            <Button
                                variant={activeRoom === index ? "default" : "outline"}
                                className={activeRoom === index ? "bg-blue-500 hover:bg-blue-600" : "border-blue-500 text-blue-500"}
                                onClick={() => handleRoomChange(index)}
                            >
                                {room.name}
                            </Button>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        key={`image-${activeRoom}-${currentImageIndex}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
                    >
                        <Image
                            src={rooms[activeRoom].images[currentImageIndex] || "/placeholder.svg"}
                            alt={`${rooms[activeRoom].name} - Imagem ${currentImageIndex + 1}`}
                            fill
                            className="object-cover"
                        />

                        {/* Controles de navegação */}
                        <div className="absolute inset-y-0 left-0 flex items-center">
                            <button
                                className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors ml-4"
                                onClick={prevImage}
                                aria-label="Imagem anterior"
                            >
                                <ChevronLeft className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center">
                            <button
                                className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors mr-4"
                                onClick={nextImage}
                                aria-label="Próxima imagem"
                            >
                                <ChevronRight className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Indicadores */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                            {rooms[activeRoom].images.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-2 h-2 rounded-full ${currentImageIndex === index ? "bg-blue-500" : "bg-white/70"}`}
                                    onClick={() => setCurrentImageIndex(index)}
                                    aria-label={`Ir para imagem ${index + 1}`}
                                />
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        key={`content-${activeRoom}`}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 font-poppins">{rooms[activeRoom].name}</h3>
                        <p className="text-gray-600 mb-6 font-open-sans">{rooms[activeRoom].description}</p>

                        <div className="mb-6">
                            <h4 className="text-lg font-semibold text-gray-800 mb-3 font-poppins">Comodidades:</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {rooms[activeRoom].amenities.map((amenity, index) => (
                                    <li key={index} className="flex items-center text-gray-600 font-open-sans">
                                        <span className="mr-2 text-blue-500">✓</span> {amenity}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex  justify-between mb-8 flex-col">
                            <div>
                                <span className="text-gray-600 font-open-sans">A partir de</span>
                                <p className="text-3xl font-bold text-blue-600 font-poppins">
                                    {rooms[activeRoom].price} <span className="text-sm font-normal text-gray-600">/ noite</span>
                                </p>
                            </div>
                            <Button
                                className="bg-blue-500 hover:bg-blue-600 text-white lg:max-w-96 mt-5 "
                                onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
                            >
                                Reservar Agora
                            </Button>
                        </div>


                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
