"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Trash2, Upload, FileText, CheckCircle, BarChart3, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function AITextDetector() {
    const [text, setText] = useState("");
    const [isanalyzing, setIsAnalyzing] = useState(false);
    const maxLength = 25000;

    return (
        <div className="min-h-screen bg-[#fafafa] pt-24 pb-12">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="mb-10 text-center">
                    <h1 className="text-3xl font-bold text-[#1e1e2e] sm:text-4xl md:text-5xl">
                        Verify Authenticity in Seconds
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-gray-500 md:text-lg">
                        Advanced AI detection for academic integrity, professional writing, and SEO content.
                        Identify GPT-4, Claude, and Gemini generated text with high precision.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-12 max-w-7xl mx-auto">
                    {/* LEFT COLUMN - INPUT */}
                    <div className="lg:col-span-7 space-y-4">
                        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-[600px]">
                            {/* Toolbar */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white">
                                <div className="flex items-center gap-2">
                                    <Button variant="ghost" size="sm" className="bg-orange-50 text-[#fe6b46] hover:bg-orange-100 hover:text-[#fe6b46] gap-2 font-medium">
                                        <FileText className="h-4 w-4" />
                                        Paste Text
                                    </Button>
                                    <Button variant="ghost" size="sm" className="text-gray-500 hover:text-[#1e1e2e] gap-2">
                                        <Upload className="h-4 w-4" />
                                        Upload Document
                                    </Button>
                                </div>
                                <div className="text-xs font-medium text-gray-400">
                                    Characters: {text.length.toLocaleString()} / {maxLength.toLocaleString()}
                                </div>
                            </div>

                            {/* Text Area */}
                            <div className="flex-1 relative p-6">
                                <textarea
                                    className="w-full h-full resize-none border-none focus:ring-0 p-0 text-gray-700 placeholder:text-gray-300 text-lg leading-relaxed bg-transparent font-light"
                                    placeholder="Start typing or paste your content here to check for AI generation..."
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    maxLength={maxLength}
                                />
                            </div>

                            {/* Footer Actions */}
                            <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="text-gray-400 hover:text-red-500 transition-colors"
                                        onClick={() => setText("")}
                                        disabled={!text}
                                    >
                                        <Trash2 className="h-5 w-5" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="text-gray-400 hover:text-[#1e1e2e] transition-colors"
                                        onClick={() => navigator.clipboard.writeText(text)}
                                        disabled={!text}
                                    >
                                        <Copy className="h-5 w-5" />
                                    </Button>
                                </div>

                                <Button
                                    size="lg"
                                    className="bg-[#fe6b46] hover:bg-[#e05a38] text-white rounded-full px-8 font-bold shadow-lg shadow-orange-500/20 gap-2"
                                    disabled={!text || isanalyzing}
                                    onClick={() => setIsAnalyzing(true)}
                                >
                                    {isanalyzing ? "Analyzing..." : "Analyze Text"}
                                    <BarChart3 className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN - RESULTS */}
                    <div className="lg:col-span-5">
                        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 h-[600px] flex items-center justify-center p-8 text-center relative overflow-hidden">
                            {/* Background Decor */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

                            <div className="relative z-10 max-w-xs">
                                <div className="w-20 h-20 bg-gray-50 rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-inner">
                                    <BarChart3 className="h-10 w-10 text-gray-300" />
                                </div>
                                <h3 className="text-xl font-bold text-[#1e1e2e] mb-2">Ready to Scan</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Enter your text and click 'Analyze' to see the probability of AI generation, tone analysis, and more.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
