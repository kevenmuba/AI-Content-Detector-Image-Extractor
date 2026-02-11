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
                            <Button variant="orange" size="lg" className="rounded-full px-8 gap-2">
                                Request a Demo <ArrowRight className="h-4 w-4" />
                            </Button>
                            <Button variant="dark" size="lg" className="rounded-full px-8 gap-2">
                                <PlayCircle className="h-4 w-4" /> Watch Video
                            </Button>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative mx-auto w-full max-w-[500px] lg:max-w-none"
                    >
                        <div className="relative rounded-2xl bg-[#4d9e87] p-8 shadow-2xl aspect-square flex items-center justify-center">
                            <div className="relative z-10 w-full h-full border border-white/20 rounded-xl p-6 flex flex-col justify-between">
                                <div className="self-end bg-[#fe6b46] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                    2.5M+ <br /> <span className="font-normal opacity-90">Documents scanned monthly</span>
                                </div>

                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

                                <div className="relative mt-auto">
                                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 text-white">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-8 h-8 rounded bg-white/20 flex items-center justify-center">
                                                <span className="font-bold">AI</span>
                                            </div>
                                            <span className="font-medium">Analysis Complete</span>
                                        </div>
                                        <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                                            <div className="h-full bg-[#fe6b46] w-[98%]" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="absolute -left-8 bottom-20 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 max-w-[200px]"
                            >
                                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                    <CheckCircle className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="font-bold text-[#1e1e2e]">99.8% Accuracy</p>
                                    <p className="text-xs text-gray-500 mt-1">Our detection engine identifies AI signatures with industry-leading precision.</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
