"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Image as ImageIcon, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const features = [
    {
        title: "AI Text Detector",
        description: "Distinguish between human-written and AI-generated content across GPT-4, Claude, and Gemini models with granular scoring.",
        icon: ShieldCheck,
        color: "bg-red-50 text-red-500",
        link: "/ai-text-detector",
        benefits: ["Sentence-level analysis", "Plagiarism cross-referencing"],
    },
];

export default function Features() {
    return (
        <section id="features" className="py-20 lg:py-32 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1e1e2e]">
                        Powerful Detection Suite
                    </h2>
                    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                        Everything you need to verify and extract content authenticity.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-[#fafafa] p-8 hover:shadow-lg transition-shadow"
                        >
                            <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.color}`}>
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mb-3 text-2xl font-bold text-[#1e1e2e]">
                                {feature.title}
                            </h3>
                            <p className="mb-6 text-gray-500 leading-relaxed">
                                {feature.description}
                            </p>
                            <ul className="mb-8 space-y-3">
                                {feature.benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-center text-sm text-gray-600">
                                        <div className="mr-3 h-1.5 w-1.5 rounded-full bg-[#fe6b46]" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                            <Link href={feature.link}>
                                <Button variant="link" className="p-0 h-auto text-[#fe6b46] hover:no-underline font-semibold group-hover:gap-2 transition-all">
                                    Explore {feature.title} <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
