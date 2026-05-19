import { useState } from "react";
import { Link, useNavigate } from "react-router";
import api from "../app/api";
import { setCrediantial } from "../feature/auth/AuthSlice";
import { useAppDispatch } from "../app/hooks";
import axios from 'axios';
import { motion } from 'framer-motion';

const Registration = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const dispatch = useAppDispatch();

    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await api.post('/auth/registration', formData);
            if (res.data.success) {
                dispatch(setCrediantial({
                    user: res.data.data.user,
                    token: res.data.data.token
                }));
            }
            localStorage.setItem('token', res.data.data.token);
            alert("Registration Successful");
            navigate('/');
        } catch (err: unknown) {
            let errorMessage = "An error occurred";
            if (axios.isAxiosError<{ message: string }>(err)) {
                errorMessage = err.response?.data?.message || err.message;
            }
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-linear-to-r fron-lime-200 to-green-100 dark:from-zinc-950 dark:to-black px-4 transition-colors duration-300">
            <div className="w-full max-w-md bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-xl border border-emerald-100/50 dark:border-zinc-800/80">
                {/* Heading  */}
                <div className="text-center mb-8">
                    <h1 className="font-extrabold text-zinc-900 dark:text-white text-3xl tracking-tight">
                        Create Account
                    </h1>
                    <p className="text-zinc-500 dark:text-zinc-400 mt-2 text-sm">
                        Join us today
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Name Input*/}
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            onChange={handleChange}
                            value={formData.name}
                            required
                            className="w-full h-11 px-4 border border-zinc-200 dark:border-zinc-700 rounded-xl bg-transparent outline-none text-zinc-900 dark:text-white text-sm"
                        />
                    </div>

                    {/*  Email Input*/}
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="name@example.com"
                            onChange={handleChange}
                            value={formData.email}
                            required
                            className="w-full h-11 px-4 border border-zinc-200 dark:border-zinc-700 rounded-xl bg-transparent outline-none text-zinc-900 dark:text-whitetext-sm"
                        />
                    </div>

                    {/* Password Input  */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            placeholder="........."
                            className="w-full h-11 px-4 border border-zinc-200 dark:border-zinc-700 rounded-xl bg-transparent outline-none text-zinc-900 dark:text-white text-sm"
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
                        {loading ? "Creating Account..." : "Sign Up"}
                    </motion.button>
                    <p className="text-center text-sm text-zinc-500 dark:text-zinc-400 mt-4">
                        Already have an account?{" "}
                        <Link to="/login" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                            Login
                        </Link>
                    </p>
                </form>

            </div>
        </section>
    );
};

export default Registration;
