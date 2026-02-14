"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "1",
        title: "Upload Content",
        description: "Paste your text or upload files directly to our secure dashboard for immediate analysis.",
    },
    {
        number: "2",
        title: "Deep Scan Engine",
        description: "Our multi-layered AI models scan for linguistic patterns and hidden metadata signatures.",
    },
    {
        number: "3",
        title: "Instant Verification",
        description: "Get a comprehensive report with authenticity scores and highlighted areas of concern.",
    },
        {
        number: "4",
        title: "Humanize Content",
        description: "Transform detected AI text into natural, human-like writing that bypasses detection while preserving your original meaning.",
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-20 lg:py-32 bg-[#fafafa]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1e1e2e] mb-12">
                            Complete <span className="text-[#fe6b46]">Authenticity</span> Workflow
                        </h2>
                        <div className="space-y-8">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="flex gap-6"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#fe6b46] font-bold shadow-sm border border-orange-100">
                                            {step.number}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#1e1e2e] mb-2">{step.title}</h3>
                                        <p className="text-gray-500 leading-relaxed max-w-md">{step.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
                    >
                        {/* Mock UI for the process */}
                        <div className="space-y-6">
                            {/* Header Mock */}
                            <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                                <div className="h-10 w-10 bg-gray-100 rounded-full" />
                                <div className="space-y-2 flex-1">
                                    <div className="h-3 w-3/4 bg-gray-100 rounded-full" />
                                    <div className="h-2 w-1/2 bg-gray-50 rounded-full" />
                                </div>
                            </div>

                            {/* Content Mock */}
                            <div className="bg-orange-50/50 rounded-xl p-6 border border-orange-100/50 relative">
                                <div className="absolute top-0 right-0 -mt-3 mr-4 bg-[#fe6b46] text-white text-[10px] font-bold px-2 py-1 rounded-full">
                                    AI DETECTED
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed italic">
                                    "The quick brown fox jumps over the lazy dog using revolutionary AI strategies for digital transformation..."
                                </p>
                                <div className="mt-4 flex items-center justify-between">
                                    <div className="h-1.5 w-full bg-gray-200 rounded-full max-w-[200px] overflow-hidden">
                                        <div className="h-full bg-[#fe6b46] w-[85%]" />
                                    </div>
                                    <span className="text-xs font-bold text-[#fe6b46]">85% Probability</span>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
