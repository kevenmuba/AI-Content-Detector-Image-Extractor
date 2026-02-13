"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import {
  Copy,
  Trash2,
  Upload,
  FileText,
  BarChart3,
  Sparkles,
  CheckCircle,
} from "lucide-react";

export default function AITextDetector() {
  const [text, setText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isHumanizing, setIsHumanizing] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");
  const [isHumanizedSuccess, setIsHumanizedSuccess] = useState(false);

  const maxLength = 25000;
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  // 🔐 FORCE LOGIN
  useEffect(() => {
    if (!isLoaded) return;
    if (!isSignedIn) router.replace("/signin");
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded || !isSignedIn) return null;

  // ===============================
  // 📋 PASTE FUNCTION
  // ===============================
  const handlePaste = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setText(clipboardText);
    } catch {
      setError("Failed to read clipboard.");
    }
  };

  // ===============================
  // 📄 FILE UPLOAD FUNCTION
  // ===============================
  const handleFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fileType = file.name.split(".").pop()?.toLowerCase();

    if (fileType === "txt") {
      const reader = new FileReader();
      reader.onload = () => {
        setText(reader.result as string);
      };
      reader.readAsText(file);
    }

    if (fileType === "docx") {
      const mammoth = await import("mammoth");
      const arrayBuffer = await file.arrayBuffer();
      const result = await mammoth.extractRawText({ arrayBuffer });
      setText(result.value);
    }

    e.target.value = "";
  };

  // ===============================
  // 🚀 ANALYZE FUNCTION
  // ===============================
  const handleAnalyze = async () => {
    try {
      setIsAnalyzing(true);
      setError("");
      setResult(null);
      setIsHumanizedSuccess(false);

      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      if (!res.ok) throw new Error();

      const data = await res.json();
      setResult(data);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  // ===============================
  // ✨ HUMANIZE FUNCTION
  // ===============================
  const handleHumanize = async () => {
    try {
      setIsHumanizing(true);
      setError("");

      const res = await fetch("/api/analyze?mode=humanize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      if (!res.ok) throw new Error();

      const data = await res.json();

      if (data?.humanized_text) {
        setText(data.humanized_text);
        setResult(null);
        setIsHumanizedSuccess(true);

        // remove green effect after 4s
        setTimeout(() => setIsHumanizedSuccess(false), 4000);
      }
    } catch {
      setError("Failed to humanize text.");
    } finally {
      setIsHumanizing(false);
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
            <div
              className={`bg-white rounded-3xl shadow-sm border transition-all duration-500 
              ${isHumanizedSuccess
                  ? "border-green-500 shadow-green-200 shadow-lg"
                  : "border-gray-100"
                } overflow-hidden flex flex-col h-[600px]`}
            >

              {/* Toolbar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white">
                <div className="flex items-center gap-2">

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handlePaste}
                    className="bg-orange-50 text-[#fe6b46] hover:bg-orange-100 gap-2 font-medium"
                  >
                    <FileText className="h-4 w-4" />
                    Paste Text
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => fileInputRef.current?.click()}
                    className="text-gray-500 hover:text-[#1e1e2e] gap-2"
                  >
                    <Upload className="h-4 w-4" />
                    Upload Document
                  </Button>

                  <input
                    type="file"
                    accept=".txt,.docx"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>

                <div className="text-xs font-medium text-gray-400">
                  {text.length.toLocaleString()} / {maxLength.toLocaleString()}
                </div>
              </div>

              {/* Text Area */}
              <div className="flex-1 p-6 relative">
                <textarea
                  className="w-full h-full resize-none border-none focus:ring-0 p-0 text-gray-700 placeholder:text-gray-300 text-lg leading-relaxed bg-transparent font-light"
                  placeholder="Start typing or paste your content here..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  maxLength={maxLength}
                />

                {isHumanizedSuccess && (
                  <div className="absolute top-4 right-4 flex items-center gap-2 text-green-600 animate-bounce">
                    <CheckCircle className="h-5 w-5" />
                    <span className="text-sm font-medium">
                      Humanized Successfully!
                    </span>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setText("");
                      setResult(null);
                      setIsHumanizedSuccess(false);
                    }}
                    disabled={!text}
                  >
                    <Trash2 className="h-5 w-5 text-gray-400 hover:text-red-500" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => navigator.clipboard.writeText(text)}
                    disabled={!text}
                  >
                    <Copy className="h-5 w-5 text-gray-400 hover:text-black" />
                  </Button>
                </div>

                <Button
                  size="lg"
                  className="bg-[#fe6b46] hover:bg-[#e05a38] text-white rounded-full px-8 font-bold gap-2"
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
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 h-[600px] flex items-center justify-center p-8 text-center">

              {isAnalyzing && (
                <h3 className="text-xl font-semibold text-gray-500">
                  Analyzing...
                </h3>
              )}

              {error && <p className="text-red-500">{error}</p>}

              {result && !isAnalyzing && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    AI Probability: {result.ai_probability}%
                  </h3>

                  <p className="text-gray-500 mb-2">
                    Human Probability: {result.human_probability}%
                  </p>

                  <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                    {result.reason}
                  </p>

                  {result.ai_probability > 50 && (
                    <Button
                      onClick={handleHumanize}
                      disabled={isHumanizing}
                      className="mt-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 gap-2"
                    >
                      {isHumanizing ? "Humanizing..." : "Humanize Text"}
                      <Sparkles className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              )}

              {!result && !isAnalyzing && !error && (
                <div>
                  <BarChart3 className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                  <h3 className="text-xl font-bold mb-2">
                    Ready to Scan
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Enter your text and click “Analyze”.
                  </p>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
