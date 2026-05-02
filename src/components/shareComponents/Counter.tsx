import { useState } from "react";
import { motion, animate } from "framer-motion";

const counterData = [
    { number: 100, label: "PROJECTS" },
    { number: 24, label: "WINNING AWARD" },
    { number: 70, label: "HAPPY CLIENTS" },
    { number: 10, label: "YEAR EXPERIENCE", color: "lime-200" },
];

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <section className="py-20 bg-black/5" id="stats">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center">

                {counterData.map((item, index) => {
                    return (
                        <motion.div
                            key={index}
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            onViewportEnter={() => {
                                animate(0, item.number, {
                                    duration: 2,
                                    onUpdate: (latest) => setCount(Math.round(latest))
                                })
                            }}
                            className="font-bold text-2xl flex flex-col items-center">
                            <p className="text-lime-700">{count}+</p>
                            <p className={`text-green-700 `}>{item.label}</p>
                        </motion.div>
                    );
                })}

            </div>
        </section>
    );
};

export default Counter;
