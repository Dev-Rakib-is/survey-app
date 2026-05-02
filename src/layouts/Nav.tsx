import { Sun, Moon, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const Nav = () => {
    const navList = [
        { name: "Home", link: "/" },
        { name: "Get a Quote", link: "/get-quote" }, 
        { name: "Services", link: "/services" }, 
        { name: "Projects", link: "/projects" }, 
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" }
    ];

    const [dark, setDark] = useState(() => {
        return localStorage.getItem('theme') === 'dark'
    });
    const [isOpen, setIsOpen] = useState(false); // Mobile menu state

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark")
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [dark]);

    return (
        <div className="bg-linear-to-r fron-lime-200 to-green-100 dark:from-slate-900 dark:to-slate-800 sticky top-0 z-50 shadow-sm  border-b dark:border-white/20 border-black/10">
            <div className="container mx-auto px-4 md:px-0">
                <div className="flex justify-between items-center py-2">

                    {/* Logo */}
                    <Link to="/" className="z-50">
                        <img src="/logo.png" alt="Company Logo" className="w-16 h-16 md:w-20 md:h-20" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <ul className="flex gap-8">
                            {navList.map((item, index) => (
                                <Link
                                    to={item.link}
                                    key={index}
                                    className="relative group text-gray-800 dark:text-gray-200 font-medium hover:text-green-700 dark:hover:text-green-400 transition-colors"
                                >
                                    {item.name}
                                    <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-green-700 transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            ))}
                        </ul>
                    </nav>

                    {/* Right Side Icons */}
                    <div className="flex items-center gap-4 z-50">
                        {/* Dark Mode Toggle */}
                        <button
                            className="cursor-pointer p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-all"
                            onClick={() => setDark(!dark)}
                            aria-label="Toggle Dark Mode"
                        >
                            {dark ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} className="text-gray-700" />}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden cursor-pointer p-2"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div className={`
                    fixed inset-0 bg-white dark:bg-slate-900 flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden
                    ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
                `}>
                    <ul className="flex flex-col items-center gap-6 text-xl font-semibold">
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
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Nav;
