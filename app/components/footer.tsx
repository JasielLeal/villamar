"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Instagram, Mail, Phone } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import Image from "next/image"

export default function Footer() {
    const footerLinks = [
        {
            title: "Pousada",
            links: [
                { name: "Sobre Nós", href: "#about", icon: '' },
                { name: "Acomodações", href: "#accommodations", icon: '' },
                { name: "Serviços", href: "#services", icon: '' },
            ],
        },
        {
            title: "Informações",
            links: [
                { name: "Localização", href: "#location", icon: '' },
                { name: "Política de Reservas", href: "#", icon: '' },
                { name: "FAQ", href: "#", icon: '' },
            ],
        },
        {
            title: "Contato",
            links: [
                { name: "contato@villamar.com.br", href: "mailto:contato@villamar.com.br", icon: <Mail className="h-4 w-4" /> },
                { name: "+55 84 9406-7845", href: "tel:https://wa.me/558494067845", icon: <Phone className="h-4 w-4" /> },
            ],
        },
    ]

    const socialLinks = [
        { name: "WhatsApp", href: "https://wa.me/558494067845", icon: <FaWhatsapp className="h-5 w-5" /> },
        { name: "Instagram", href: "https://www.instagram.com/villamar_bf/", icon: <Instagram className="h-5 w-5" /> },
    ]

    return (
        <footer className="bg-blue-900 text-white">
            <div className="container mx-auto px-4">
                <div className="pt-16 pb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <Link href="/" className="inline-block mb-6">
                                <Image
                                    src={"/logoWhite.png"}
                                    alt="Logo da Pousada Villa Mar"
                                    width={100}
                                    height={50}
                                />
                            </Link>
                            <p className="text-blue-100 mb-6 font-open-sans">
                                Uma hospedagem acolhedora, ideal para relaxar e aproveitar o melhor da região com uma vista panorâmica encantadora
                            </p>
                            <div className="flex space-x-4">
                                {socialLinks.map((link, index) => (
                                    <motion.a
                                        key={index}
                                        href={link.href}
                                        className="bg-blue-800 p-2 rounded-full text-blue-200 hover:text-white hover:bg-blue-600 transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label={link.name}
                                    >
                                        {link.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {footerLinks.map((section, sectionIndex) => (
                            <div key={sectionIndex}>
                                <h3 className="text-lg font-semibold mb-4 font-poppins">{section.title}</h3>
                                <ul className="space-y-3">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <Link
                                                href={link.href}
                                                className="text-blue-200 hover:text-blue-400 transition-colors flex items-center gap-2 font-open-sans"
                                            >
                                                {link.icon && link.icon}
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="border-t border-blue-800 py-6 text-center md:flex md:justify-between md:text-left">
                    <p className="text-blue-300 mb-4 md:mb-0 font-open-sans">
                        &copy; {new Date().getFullYear()} Villa Mar. Todos os direitos reservados.
                    </p>
                    <div className="flex justify-center md:justify-end space-x-6">
                        <Link href="#" className="text-blue-300 hover:text-blue-400 transition-colors font-open-sans">
                            Termos de Uso
                        </Link>
                        <Link href="#" className="text-blue-300 hover:text-blue-400 transition-colors font-open-sans">
                            Política de Privacidade
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
