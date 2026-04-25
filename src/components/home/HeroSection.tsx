import { ArrowRight, Phone } from "lucide-react"
import { easeOut, motion } from 'framer-motion';


const Hero = () => {
    return (
        <section className="relative w-full bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
            <div className="container mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center">

                {/* Left Side: Text Content */}
                <div className="md:w-1/2 z-10 text-center md:text-left">
                    <motion.span
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-green-700 uppercase bg-green-100 rounded-full dark:bg-green-900/30 dark:text-green-400">
                        Licensed & Professional Surveyors
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
                        Precision Mapping for <br />
                        <span className="text-green-600">Secure Property</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9 }}
                        className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-xl">
                        জমি বা প্রপার্টির সঠিক মাপজোখ নিশ্চিত করতে আমরা ব্যবহার করি আধুনিক GPS এবং Total Station প্রযুক্তি। নির্ভরযোগ্য সার্ভে রিপোর্টের জন্য আজই আমাদের সাথে যোগাযোগ করুন।
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.1 }} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-green-600/20 active:scale-95 cursor-pointer">
                            Free Consultation <ArrowRight size={20} />
                        </button>

                        <a href="tel:+8801719326128" className="flex items-center justify-center gap-2 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all active:scale-95">
                            <Phone size={20} className="text-green-600" /> Call Now
                        </a>
                    </motion.div>

                    {/* Stats */}
                    <div className="mt-12 flex gap-8 justify-center md:justify-start border-t border-slate-100 dark:border-slate-800 pt-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.3 }}
                        >
                            <p className="text-2xl font-bold text-slate-900 dark:text-white">10+</p>
                            <p className="text-sm text-slate-500">Years Experience</p>
                        </motion.div >
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.7 }}
                        >
                            <p className="text-2xl font-bold text-slate-900 dark:text-white">500+</p>
                            <p className="text-sm text-slate-500">Projects Done</p>
                        </motion.div>
                    </div>
                </div>

                {/* Right Side: Image with Decorative Elements */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }} className="md:w-1/2 mt-12 md:mt-0 relative flex justify-center">
                    {/* 360 deg badge*/}
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full">
                        <motion.img
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: easeOut }}
                            className="spin absolute top-1/4 left-1/8" src="/Globe icon.svg" alt="Work Image" /></div>

                    <div className="relative">
                        <motion.img
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: easeOut }}
                            src="/Rana_vi_2.jpg"
                            alt="Land Surveying Equipment"
                            className="rounded-3xl transition duration-200 hover:scale-102 shadow-2xl w-full max-w-md object-cover border-4 border-white dark:border-slate-800"
                        />

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 hidden sm:block">
                            <div className="flex items-center gap-3">
                                <div className="bg-green-100 p-2 rounded-lg">
                                    <span className="text-green-600 font-bold">100%</span>
                                </div>
                                <p className="text-sm font-bold dark:text-white">Accuracy <br /> Guaranteed</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section >
    )
}

export default Hero