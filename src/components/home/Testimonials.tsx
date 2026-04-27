import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Arif Hossain",
        role: "land owner",
        text: "Their digital survey is very accurate. They solved my boundary problem very easily.",
        rating: 5,
        color: "bg-purple-700",
    },
    {
        name: "Md. Kamrul Islam",
        role: "Civil Engineer",
        text: "I work with them regularly for my projects. Their use of modern equipment and accurate reports are among their hallmarks.",
        rating: 5,
        color: "bg-orange-700"
    },
    {
        name: "Rashed Ahmed",
        role: "Property Developer",
        text: "They have created a topographical map of my huge area in a very short time. I am satisfied with their work.",
        rating: 5,
        color: "bg-teal-600",
    },
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold dark:text-white"
                    >
                        What our clients are saying
                    </motion.h2>
                    <div className="w-20 h-1 bg-green-600 mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl relative border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Quote Icon */}
                            <Quote className="absolute top-6 right-8 w-10 h-10 text-green-600/10 dark:text-green-400/10" />

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-slate-600 dark:text-slate-300 mb-6 italic leading-relaxed">
                                "{item.text}"
                            </p>

                            {/* User Info */}
                            <div className="flex items-center gap-4 border-t border-slate-200 dark:border-slate-700 pt-6">
                                <div className={`${item.color} w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0`}>
                                    {item.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold dark:text-white text-lg">{item.name}</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
