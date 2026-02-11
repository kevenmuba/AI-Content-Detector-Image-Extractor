"use client";

import { Button } from "@/components/ui/button";
import { Send, Users } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-20 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="relative rounded-3xl bg-[#1e1e2e] py-16 px-6 md:px-16 overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#fe6b46] opacity-10 blur-[100px] rounded-full pointer-events-none" />
                    <div className="relative z-10 grid gap-10 lg:grid-cols-2 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                                Ready to secure your <br />
                                <span className="text-[#fe6b46]">content?</span>
                            </h2>
                            <p className="text-gray-400 md:text-xl leading-relaxed max-w-[500px]">
                                Join over 5,000+ companies using NextDetectAI to verify content and extract value from data.
                            </p>

                            <div className="flex items-center gap-4 pt-4">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className={`w-10 h-10 rounded-full border-2 border-[#1e1e2e] bg-gray-300 flex items-center justify-center text-xs font-bold text-gray-600`}>
                                            {/* User avatar placeholder */}
                                        </div>
                                    ))}
                                </div>
                                <div className="text-sm font-medium text-white flex items-center gap-2">
                                    <Users className="h-4 w-4 text-[#fe6b46]" />
                                    Trusted by leading enterprises
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                            <form className="space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-white">Work Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="john@company.com"
                                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#fe6b46] focus:border-transparent transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-white">Message</label>
                                    <textarea
                                        id="message"
                                        placeholder="How can we help?"
                                        rows={3}
                                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#fe6b46] focus:border-transparent transition-all resize-none"
                                    />
                                </div>
                                <Button variant="orange" size="lg" className="w-full h-12 text-base font-bold shadow-lg shadow-orange-500/20">
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
