"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import {
  Copy,
  Trash2,
  Upload,
  FileText,
  BarChart3,
} from "lucide-react";

export default function AITextDetector() {
  const [text, setText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");
  const maxLength = 25000;

  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  // 🔐 FORCE LOGIN
  useEffect(() => {
    if (!isLoaded) return;
    if (!isSignedIn) {
      router.replace("/signin");
    }
  }, [isLoaded, isSignedIn, router]);

  // 🛑 Prevent UI flicker
  if (!isLoaded || !isSignedIn) {
    return null;
  }

  // 🚀 ANALYZE FUNCTION
  const handleAnalyze = async () => {
    try {
      setIsAnalyzing(true);
      setError("");
      setResult(null);

      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      if (!res.ok) {
        throw new Error("Failed to analyze text");
      }

      const data = await res.json();
      setResult(data);

    } catch (err: any) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-[#1e1e2e] sm:text-4xl md:text-5xl">
            Verify Authenticity in Seconds
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500 md:text-lg">
            Advanced AI detection for academic integrity, professional writing,
            and SEO content.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 max-w-7xl mx-auto">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-[600px]">

              {/* Toolbar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white">
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="bg-orange-50 text-[#fe6b46] hover:bg-orange-100 gap-2 font-medium"
                  >
                    <FileText className="h-4 w-4" />
                    Paste Text
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-500 hover:text-[#1e1e2e] gap-2"
                  >
                    <Upload className="h-4 w-4" />
                    Upload Document
                  </Button>
                </div>

                <div className="text-xs font-medium text-gray-400">
                  Characters: {text.length.toLocaleString()} /{" "}
                  {maxLength.toLocaleString()}
                </div>
              </div>

              {/* Text Area */}
              <div className="flex-1 p-6">
                <textarea
                  className="w-full h-full resize-none border-none focus:ring-0 p-0 text-gray-700 placeholder:text-gray-300 text-lg leading-relaxed bg-transparent font-light"
                  placeholder="Start typing or paste your content here..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  maxLength={maxLength}
                />
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-red-500"
                    onClick={() => {
                      setText("");
                      setResult(null);
                    }}
                    disabled={!text}
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-[#1e1e2e]"
                    onClick={() => navigator.clipboard.writeText(text)}
                    disabled={!text}
                  >
                    <Copy className="h-5 w-5" />
                  </Button>
                </div>

                <Button
                  size="lg"
                  className="bg-[#fe6b46] hover:bg-[#e05a38] text-white rounded-full px-8 font-bold shadow-lg shadow-orange-500/20 gap-2"
                  disabled={!text || isAnalyzing}
                  onClick={handleAnalyze}
                >
                  {isAnalyzing ? "Analyzing..." : "Analyze Text"}
                  <BarChart3 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 h-[600px] flex items-center justify-center p-8 text-center relative overflow-hidden">

              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10 w-full">

                {isAnalyzing && (
                  <h3 className="text-xl font-semibold text-gray-500">
                    Analyzing...
                  </h3>
                )}

                {error && (
                  <p className="text-red-500">{error}</p>
                )}

                {result && !isAnalyzing && (
                  <div>
                    <h3 className="text-2xl font-bold text-[#1e1e2e] mb-4">
                      AI Probability: {result.ai_probability}%
                    </h3>

                    <p className="text-gray-500 mb-2">
                      Human Probability: {result.human_probability}%
                    </p>

                    <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                      {result.reason}
                    </p>
                  </div>
                )}

                {!result && !isAnalyzing && !error && (
                  <div>
                    <div className="w-20 h-20 bg-gray-50 rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-inner">
                      <BarChart3 className="h-10 w-10 text-gray-300" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1e1e2e] mb-2">
                      Ready to Scan
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Enter your text and click “Analyze” to see AI probability.
                    </p>
                  </div>
                )}

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
