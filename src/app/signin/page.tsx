"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff } from "lucide-react"
import { useSignIn, SignInButton } from "@clerk/nextjs"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignInPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const { isLoaded, signIn, setActive } = useSignIn()
    const router = useRouter()

    const togglePasswordVisibility = () => setShowPassword(!showPassword)

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!isLoaded || !signIn) return

        setLoading(true)
        try {
            // Attempt to sign in
            const result = await signIn.create({ identifier: email, password })

            if (result.status === "complete") {
                // Activate the session
                await setActive({ session: result.createdSessionId })
                router.push("/ai-text-detector") // Redirect after successful login
            } else {
                // If multi-factor or email verification required
                alert("Additional verification required. Check your email or follow MFA steps.")
            }
        } catch (err: any) {
            alert(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-lg">
                <h1 className="text-2xl font-bold text-gray-900 text-center">
  Sign in to continue
</h1>
<p className="text-sm text-gray-600 text-center mt-1">
  Please log in to access our AI tools
</p>

                <form className="mt-8 space-y-6" onSubmit={handleSignIn}>
                    <div className="space-y-4">
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="password">Password</Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    required
                                    className="pr-10"
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400"
                                >
                                    {showPassword ? <EyeOff /> : <Eye />}
                                </button>
                            </div>
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-[#fca547] text-black hover:bg-[#fb923c]"
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login Now"}
                    </Button>

                    {/* Divider */}
                    <div className="flex items-center my-2">
                        <hr className="flex-1 border-gray-300" />
                        <span className="px-2 text-gray-400 text-sm">or</span>
                        <hr className="flex-1 border-gray-300" />
                    </div>

                    {/* Google Sign-In using Clerk */}
                    <SignInButton mode="modal">
                        <Button
                            type="button"
                            variant="outline"
                            className="w-full flex items-center justify-center gap-2 bg-gray-100 border-none hover:bg-gray-200 text-black font-semibold"
                        >
                            <svg className="h-5 w-5" viewBox="0 0 24 24">
                                <path
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    fill="#4285F4"
                                />
                                <path
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    fill="#34A853"
                                />
                                <path
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    fill="#FBBC05"
                                />
                                <path
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    fill="#EA4335"
                                />
                                <path d="M1 1h22v22H1z" fill="none" />
                            </svg>
                            Login with Google
                        </Button>
                    </SignInButton>
                </form>
            </div>
        </div>
    )
}
