import { Sun, Moon, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import type { RootState } from "../app/store";
import { motion } from 'framer-motion';
import { logout as logoutAction } from "../feature/auth/AuthSlice";

const Nav = () => {
    // নোট: আপনার store.ts ফাইলে যদি "auth" ছোট হাতের অক্ষরে থাকে, তবে state.auth লিখবেন
    const { user } = useSelector((state: RootState) => state.Auth);

    const navList = [
        { name: "Home", link: "/" },
        { name: "Get a Quote", link: "/get-quote" },
        { name: "Services", link: "/services" },
        { name: "Projects", link: "/projects" },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" }
    ];

    const [dark, setDark] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [dark]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        dispatch(logoutAction());
        alert("Logout successful");
        setIsOpen(false);
        navigate("/login");
    };

    return (
        // 👑 ১. মূল প্যারেন্ট এলিমেন্ট (header)-কে sticky top-0 এবং z-50 দেওয়া হয়েছে
        <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-lime-200 to-green-100 dark:from-slate-900 dark:to-slate-800 shadow-sm border-b dark:border-white/20 border-black/10 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-0">
                <div className="flex justify-between items-center py-2">

                    {/* Logo */}
                    <Link to="/" className="z-50">
                        <img src="/logo.png" alt="Company Logo" className="w-16 h-16 md:w-20 md:h-20" />
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden md:block">
                        <ul className="flex gap-8">
                            {navList.map((item, index) => (
                                <Link
                                    to={item.link}
                                    key={index}
                                    className="relative group text-gray-800 dark:text-gray-200 font-medium hover:text-green-700 dark:hover:text-green-400 transition-colors"
                                >
                                    {item.name}
                                    <span className="absolute left-0 bottom-0.5 w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            ))}
                        </ul>
                    </nav>

                    {/* Right Side Icons */}
                    <div className="flex items-center gap-4 z-50">
                        {/* Dark Mode Toggle */}
                        <button
                            className="cursor-pointer p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-all outline-none"
                            onClick={() => setDark(!dark)}
                            aria-label="Toggle Dark Mode"
                        >
                            {dark ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} className="text-gray-700" />}
                        </button>

                        {/* Desktop Auth Buttons */}
                        <div className="hidden md:flex items-center gap-3">
                            {!user ? (
                                <Link to="/login">
                                    <motion.div
                                        whileTap={{ scale: 0.95 }}
                                        className="font-bold py-1.5 px-4 rounded-full bg-violet-100 hover:bg-violet-200 shadow text-black cursor-pointer text-sm"
                                    >
                                        Login
                                    </motion.div>
                                </Link>
                            ) : (
                                <div className="flex items-center gap-3">
                                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                                        {user.name}
                                    </span>
                                    <motion.button
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleLogout}
                                        className="font-bold py-1.5 px-4 rounded-full bg-red-100 hover:bg-red-200 shadow text-red-700 cursor-pointer text-sm"
                                    >
                                        Logout
                                    </motion.button>
                                </div>
                            )}
                        </div>

                        {/* Menu Button */}
                        <button
                            className="md:hidden cursor-pointer p-2 text-gray-800 dark:text-white"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`
                    fixed inset-0 bg-white dark:bg-slate-900 flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden z-40
                    ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"}
                `}>
                    <ul className="flex flex-col items-center gap-6 text-xl font-semibold w-full max-w-xs">
                        {navList.map((item, index) => (
                            <Link
                                to={item.link}
                                key={index}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-800 dark:text-gray-100 hover:text-green-700"
                            >
                                {item.name}
                            </Link>
                        ))}

                        <li className="mt-4 w-full px-6 text-center">
                            {!user ? (
                                <Link to="/login" onClick={() => setIsOpen(false)}>
                                    <button className="w-full font-bold py-3 px-6 rounded-xl bg-green-600 text-white text-center block text-lg shadow-md cursor-pointer">
                                        Login
                                    </button>
                                </Link>
                            ) : (
                                <div className="flex flex-col items-center gap-4 w-full">
                                    <span className="text-base font-medium text-gray-600 dark:text-gray-400">
                                        Signed in as <b className="text-gray-900 dark:text-white">{user.name}</b>
                                    </span>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full font-bold py-3 px-6 rounded-xl bg-red-600 text-white text-center flex items-center justify-center gap-2 text-lg shadow-md cursor-pointer"
                                    > 
                                        Logout
                                    </button>
                                </div>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Nav;
