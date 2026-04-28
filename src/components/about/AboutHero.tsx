import { motion } from "framer-motion";

const AboutHero = () => {
    return (
        <section className="py-16 md:py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2"
                >
                    <img
                        src="https://i.ibb.co.com/WWkKJt61/Rana-vi.jpg"
                        alt="Expert Surveyor"
                        className="rounded-3xl shadow-2xl border-8 border-slate-50 dark:border-slate-800"
                    />
                </motion.div>

                {/* Text Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 space-y-6"
                >
                    <h2 className="text-green-600 font-bold tracking-widest uppercase text-sm">
                        <span>Know About Us</span>
                    </h2>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
                        Providing Precise <span className="text-green-600">Land Solutions</span> Since 2015
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                        I am a professional land surveyor. I have been providing digital land survey services with utmost accuracy in Kushtia and surrounding districts for the last 10 years. I ensure the accurate boundaries of your land by using modern GPS and digital total stations.
                    </p>

                    <button className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition shadow-lg shadow-green-600/20">
                        <span>Get In Touch</span>
                    </button>
                </motion.div>

            </div>
        </section>
    );
};

export default AboutHero;
