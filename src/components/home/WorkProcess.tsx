import { easeOut, motion } from "framer-motion";
import { PhoneCall, LocateFixed, Database, FileCheck } from "lucide-react";

const steps = [
    {
        id: "01",
        title: "Initial Consultation",
        desc: "We discuss your land type.",
        icon: <PhoneCall className="w-8 h-8 text-white" />,
        color: "bg-blue-500"
    },
    {
        id: "02",
        title: "Field Survey",
        desc: "Our experienced team uses modern GPS and Total Station to go directly to the land and take measurements.",
        icon: <LocateFixed className="w-8 h-8 text-white" />,
        color: "bg-green-500"
    },
    {
        id: "03",
        title: "Data Analysis",
        desc: "The collected data is processed through software to create accurate designs or maps.",
        icon: <Database className="w-8 h-8 text-white" />,
        color: "bg-orange-500"
    },
    {
        id: "04",
        title: "Final Delivery",
        desc: "Finally, your desired report and map are delivered in hardcopy or digital format.",
        icon: <FileCheck className="w-8 h-8 text-white" />,
        color: "bg-purple-500"
    }
];

const WorkProcess = () => {
    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: easeOut }}
                        className="text-3xl md:text-5xl font-bold dark:text-white"
                    >
                        Our work process
                    </motion.h2>
                    <div className="w-20 h-1 bg-green-600 mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    <div className="hidden lg:block absolute top-1/4 left-0 w-full h-0.5 border-t-2 border-dashed border-slate-300 dark:border-slate-700 -z-0 "></div>

                    {steps.map((step, index) => (
                        <div className="relative z-10 flex flex-col items-center text-center group">
                            <motion.div
                                initial={{ y: 30 }}
                                whileInView={{ y: 0 }}
                                transition={{ duration: 0.8, ease: easeOut, delay: index * 0.2 }}
                                className="relative mb-6">
                                <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300`}>
                                    {step.icon}
                                </div>
                                <span className="absolute -top-3 -right-3 w-8 h-8 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-full flex items-center justify-center font-extrabold text-sm shadow-md border border-slate-200 dark:border-slate-700 z-20 transition-none">
                                    {step.id}
                                </span>
                            </motion.div>
                            <h3 className="text-xl font-bold mb-3 dark:text-white">{step.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed px-4">
                                {step.desc}
                            </p>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkProcess;
