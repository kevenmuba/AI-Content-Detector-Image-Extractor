"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fe6b46] text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                        >
                            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                            <path d="M8.5 8.5v.01" />
                            <path d="M16 15.5v.01" />
                            <path d="M12 12v.01" />
                            <path d="M11 17a2 2 0 0 1 2 2" />
                        </svg>
                    </div>
                    <span className="text-[#1e1e2e]">NextDetect<span className="text-[#fe6b46]">AI</span></span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
                    <Link href="/#features" className="hover:text-[#fe6b46] transition-colors">Products</Link>
                    <Link href="/#how-it-works" className="hover:text-[#fe6b46] transition-colors">How it Works</Link>
                    <Link href="/#contact" className="hover:text-[#fe6b46] transition-colors">Contact</Link>
                    <Link href="http://mubarek-beta.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#fe6b46] transition-colors">About</Link>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="text-gray-600">
                        <Moon className="h-5 w-5" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                    <Button variant="orange" className="rounded-full px-6">
                        Sign In
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-gray-600"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-gray-100 bg-white"
                    >
                        <div className="flex flex-col gap-4 p-4 text-sm font-medium text-gray-600">
                            <Link href="/#features" className="hover:text-[#fe6b46] transition-colors" onClick={() => setIsOpen(false)}>Products</Link>
                            <Link href="/#how-it-works" className="hover:text-[#fe6b46] transition-colors" onClick={() => setIsOpen(false)}>How it Works</Link>
                            <Link href="/#contact" className="hover:text-[#fe6b46] transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
                            <Link href="http://mubarek-beta.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#fe6b46] transition-colors" onClick={() => setIsOpen(false)}>About</Link>
                            <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                                <Button variant="ghost" size="icon" className="text-gray-600">
                                    <Moon className="h-5 w-5" />
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                                <Button variant="orange" className="w-full rounded-full">
                                    Sign In
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
