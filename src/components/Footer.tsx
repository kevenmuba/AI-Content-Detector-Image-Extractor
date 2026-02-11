import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white py-12 border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
                    <div className="lg:col-span-2 space-y-4">
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
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                            Leading the charge in digital authenticity and content verification through advanced machine learning.
                        </p>
                        <div className="text-xs text-gray-400 pt-8">
                            &copy; 2024 NextDetectAI Inc. All rights reserved.
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold text-[#1e1e2e]">Product</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link href="/ai-text-detector" className="hover:text-[#fe6b46] transition-colors">Text Detector</Link></li>
                            <li><Link href="/image-extractor" className="hover:text-[#fe6b46] transition-colors">Image Extractor</Link></li>
                        </ul>
                    </div>



                    <div className="space-y-4">
                        <h4 className="font-bold text-[#1e1e2e]">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link href="http://mubarek-beta.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#fe6b46] transition-colors">About Us</Link></li>
                            <li><Link href="/#contact" className="hover:text-[#fe6b46] transition-colors">Contact</Link></li>
                        </ul>
                    </div>


                </div>

            </div>
        </footer>
    );
}
