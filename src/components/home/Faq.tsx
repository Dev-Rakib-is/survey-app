import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    { q: "How much does it cost to do a digital survey?", a: "The cost is determined based on the size and location of the land. Call us for details." },
    { q: "Do you demarcate boundaries according to BS maps?", a: "Yes, we demarcate boundaries very accurately according to government records and latest maps." },
    { q: "How long does it take to get the report?", a: "We usually provide digital reports within 24 to 48 hours of completing the field work." }
];

const FAQ = () => {
    const [active, setActive] = useState<number | null>(null);

    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-6 max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white">Some common questions</h2>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
                            <button
                                onClick={() => setActive(active === i ? null : i)}
                                className="w-full flex justify-between items-center p-6 text-left dark:text-white font-semibold"
                            >
                                {faq.q}
                                {active === i ? <Minus size={20} /> : <Plus size={20} />}
                            </button>
                            <AnimatePresence>
                                {active === i && (
                                    <motion.div
                                        initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="p-6 pt-0 text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-700">
                                            {faq.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default FAQ