"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";


export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-[#fafafa] py-20 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col justify-center space-y-8"
                    >
                        <div className="space-y-4">
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#1e1e2e]">
                                The Future of <br />
                                <span className="text-[#fe6b46]">Content Authenticity</span>
                            </h1>
                            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 leading-relaxed">
                                Advanced AI models to detect synthetically generated text and extract
                                high-fidelity images from raw data. Secure your integrity in an
                                AI-driven world.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Button variant="orange" size="lg" className="rounded-full px-8 gap-2" asChild>
                                <a href="https://github.com/kevenmuba/AI-Content-Detector-Image-Extractor.git" target="_blank" rel="noopener noreferrer">
                                    See Project Source Code <ArrowRight className="h-4 w-4" />
                                </a>
                            </Button>
                            <Button variant="dark" size="lg" className="rounded-full px-8 gap-2" asChild>
                                <a href="https://mubarek-beta.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <PlayCircle className="h-4 w-4" /> Contact the Developer
                                </a>
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative mx-auto w-full max-w-[500px] lg:max-w-none"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square border border-white/20 group">
                            <img
                                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop"
                                alt="AI Analysis"
                                className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e2e]/80 via-transparent to-transparent" />

                            {/* Floating Badge */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="absolute -left-6 bottom-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 max-w-[240px] border border-white/50"
                            >
                                <div className="relative h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-green-100 to-green-50 shadow-inner">
                                    <div className="absolute inset-0 bg-green-500/20 blur-lg rounded-full" />
                                    <CheckCircle className="h-6 w-6 text-green-600 relative z-10" />
                                </div>
                                <div>
                                    <p className="font-bold text-[#1e1e2e] text-lg">99.8%</p>
                                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Accuracy</p>
                                </div>

                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section >
    );
}
