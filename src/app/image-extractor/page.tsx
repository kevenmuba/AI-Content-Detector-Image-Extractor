"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Image as ImageIcon, Link2, Paperclip, Share2, Wand2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ImageExtractor() {
    const [input, setInput] = useState("");
    const [isExtracting, setIsExtracting] = useState(false);

    return (
        <div className="min-h-screen bg-[#fafafa] pt-24 pb-12">
            <div className="container mx-auto px-4 md:px-6">

                <div className="grid gap-8 lg:grid-cols-12 max-w-7xl mx-auto items-start">

                    {/* LEFT COLUMN - INPUT */}
                    <div className="lg:col-span-5 space-y-6 sticky top-24">
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-[#1e1e2e] flex items-center justify-center text-white">
                                    <Wand2 className="h-5 w-5" />
                                </div>
                                <h2 className="text-xl font-bold text-[#1e1e2e]">New Extraction</h2>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">
                                        Source Text or URL
                                    </label>
                                    <div className="relative">
                                        <textarea
                                            className="w-full min-h-[200px] p-4 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#fe6b46]/20 transition-all resize-none text-gray-700 placeholder:text-gray-400"
                                            placeholder="Paste your article text, URLs, or creative brief here..."
                                            value={input}
                                            onChange={(e) => setInput(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <div className="flex-1 bg-gray-50 rounded-lg p-3 flex items-center gap-2 text-gray-400 cursor-pointer hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200">
                                        <Paperclip className="h-4 w-4" />
                                        <span className="text-sm font-medium">Attach document</span>
                                    </div>
                                    <Button
                                        className="h-12 w-12 rounded-lg bg-[#fe6b46] hover:bg-[#e05a38] text-white shadow-lg shadow-orange-500/20"
                                        onClick={() => setIsExtracting(true)}
                                        disabled={!input}
                                    >
                                        <ArrowRight className="h-5 w-5" />
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-orange-50/50 rounded-2xl p-6 border border-orange-100">
                            <p className="text-xs text-[#fe6b46] font-bold mb-1">Pro Tip:</p>
                            <p className="text-xs text-orange-800/70 leading-relaxed">
                                You can paste multiple URLs at once to batch process image extractions in seconds.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT COLUMN - RESULTS */}
                    <div className="lg:col-span-7">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Extracted Assets</h3>
                            <div className="flex items-center gap-2 text-xs text-green-500 font-medium">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                Auto-saving to cloud
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {/* Mock Card 1 - Geometric Art */}
                            <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                                <div className="aspect-square rounded-2xl bg-gradient-to-br from-orange-400 to-[#1e1e2e] mb-4 relative overflow-hidden">
                                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-gray-600">4K HD</div>
                                    <img
                                        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
                                        alt="Abstract Art"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#1e1e2e]">Geometric Minimalist Art</h4>
                                    <p className="text-xs text-gray-400 mt-1">Extracted from paragraph 2</p>

                                    <div className="flex items-center gap-2 mt-4">
                                        <Button variant="outline" size="sm" className="flex-1 rounded-lg border-gray-100 text-gray-600 hover:bg-gray-50 h-9 font-medium text-xs">
                                            Download
                                        </Button>
                                        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-lg text-gray-400 hover:text-[#1e1e2e]">
                                            <Share2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Mock Card 2 - Workspace */}
                            <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                                <div className="aspect-square rounded-2xl bg-gray-100 mb-4 relative overflow-hidden">
                                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-[#fe6b46]">PNG</div>
                                    <img
                                        src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop"
                                        alt="Workspace"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#1e1e2e]">Workspace Aesthetic</h4>
                                    <p className="text-xs text-gray-400 mt-1">Extracted from header URL</p>

                                    <div className="flex items-center gap-2 mt-4">
                                        <Button variant="outline" size="sm" className="flex-1 rounded-lg border-gray-100 text-gray-600 hover:bg-gray-50 h-9 font-medium text-xs">
                                            Download
                                        </Button>
                                        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-lg text-gray-400 hover:text-[#1e1e2e]">
                                            <Share2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Skeleton Loading Card 1 */}
                            <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 opacity-60">
                                <div className="aspect-square rounded-2xl bg-gray-100 mb-4 animate-pulse" />
                                <div className="space-y-3">
                                    <div className="h-4 bg-gray-100 rounded w-3/4 animate-pulse" />
                                    <div className="h-3 bg-gray-100 rounded w-1/2 animate-pulse" />
                                    <div className="flex gap-2 mt-4">
                                        <div className="h-9 bg-gray-100 rounded-lg flex-1 animate-pulse" />
                                        <div className="h-9 w-9 bg-gray-100 rounded-lg animate-pulse" />
                                    </div>
                                </div>
                            </div>

                            {/* Skeleton Loading Card 2 */}
                            <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 opacity-60">
                                <div className="aspect-square rounded-2xl bg-gray-100 mb-4 animate-pulse" />
                                <div className="space-y-3">
                                    <div className="h-4 bg-gray-100 rounded w-3/4 animate-pulse" />
                                    <div className="h-3 bg-gray-100 rounded w-1/2 animate-pulse" />
                                    <div className="flex gap-2 mt-4">
                                        <div className="h-9 bg-gray-100 rounded-lg flex-1 animate-pulse" />
                                        <div className="h-9 w-9 bg-gray-100 rounded-lg animate-pulse" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
