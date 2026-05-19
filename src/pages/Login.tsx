import { useDispatch } from "react-redux"
import { setCrediantial } from "../feature/auth/AuthSlice"
import { useState } from "react"
import api from "../app/api"
import axios from "axios"
import { motion } from 'framer-motion';
import { Link, useNavigate } from "react-router"

const Login = () => {
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);


        try {
            const response = await api.post("/auth/login", { email, password })
            const data = response.data
            dispatch(setCrediantial({ user: data.user, token: data.token }))           
            navigate("/")
        } catch (err: unknown) {
            let errorMessage = "An error occurred"
            if (axios.isAxiosError<{ message: string }>(err)) {
                errorMessage = err.response?.data?.message || err.message
            }
            setError(errorMessage)
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className="min-h-screen flex items-center justify-center bg-linear-to-r fron-lime-200 to-green-100  dark:from-zinc-900 dark:to-black px-4 transition-colors duration-300">
            <div className="w-full max-w-md bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-xl border border-emerald-100/50 dark:border-zinc-800">

                {/* Heading */}
                <div className="text-center mb-8">
                    <h1 className="font-extrabold text-zinc-900 dark:text-white text-3xl tracking-tight">
                        Welcome Back
                    </h1>
                    <p className="text-zinc-500 dark:text-zinc-400 mt-2 text-sm">
                        Please enter your details to sign in
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                            Email :
                        </label>
                        <input
                            type="email"
                            placeholder="name@example.com"
                            onChange={(e) => setemail(e.target.value)}
                            value={email}
                            required
                            className="w-full h-11 px-4 border border-zinc-200 dark:border-zinc-700 rounded-xl bg-transparent outline-none  dark:text-white transition-all text-sm"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder=".........."
                            className="w-full h-11 px-4 border border-zinc-200 dark:border-zinc-700 rounded-xl bg-transparent outline-none dark:text-white transition-all text-sm"
                        />
                    </div>

                    {/* Error Message */}
                    {error && (
                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 dark:text-red-400 font-medium text-sm bg-red-50 dark:bg-red-950/30 p-3 rounded-xl border border-red-100 dark:border-red-900/50"
                        >
                            {error}
                        </motion.p>
                    )}

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        whileHover={{ scale: loading ? 1 : 1.01 }}
                        whileTap={{ scale: loading ? 1 : 0.98 }}
                        disabled={loading}
                        className={`w-full h-11 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold shadow-md shadow-emerald-600/10 flex items-center justify-center gap-2 transition-colors duration-200 ${loading ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'
                            }`}
                    >
                        {loading ? "Loading..." : "Submit"}
                    </motion.button>
                    <p className="text-center">Don't have an account? <Link to="/registration" className="text-green-600 "> Registration</Link> </p>
                </form>
            </div>
        </section>
    )
}

export default Login
