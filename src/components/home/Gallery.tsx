import { easeInOut, motion } from "framer-motion";
import { FaMapMarkerAlt, FaCalendarAlt, FaLayerGroup, FaCheckCircle } from "react-icons/fa";

const ProjectDetails = () => {
    return (
        <div className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
            <div className="container mx-auto px-6">
                {/* 1. Project Title & Category */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: easeInOut, }}
                    className="mb-8"
                >
                    <span className="text-green-600 font-bold tracking-widest uppercase text-sm">Land Layout</span>
                    <h1 className="text-4xl md:text-6xl font-bold mt-2 dark:text-white">Plot Layout & Master Planning</h1>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Side: Main Image & Details */}
                    <div className="lg:col-span-2">
                        {/* 2. Main Featured Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="rounded-3xl overflow-hidden shadow-2xl h-[400 md:h-[500px]"
                        >
                            <img
                                src="https://i.ibb.co.com/ym4Sk2d0/656480626-26135387086131690-8408079452778044257-n.jpg"
                                alt="Project"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* 3. Description Section */}
                        <div className="mt-10 space-y-6 text-slate-600 dark:text-slate-300">
                            <h2 className="text-2xl font-bold dark:text-white">Project Overview</h2>
                            <p>
                                In this project, we have completed the master planning and plot layout of a 5 acre land.
                                Using modern survey equipment, precise boundary demarcation and road marking have been done.
                            </p>

                            <h3 className="text-xl font-semibold dark:text-white">What we did:</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {["Boundary Verification", "Road Networking", "Drainage Planning", "Digital Mapping"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <FaCheckCircle className="text-green-600" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Side: Project Sidebar Info */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl sticky top-28 border border-slate-200 dark:border-slate-700"
                        >
                            <h3 className="text-xl font-bold mb-6 dark:text-white text-center">Project Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl text-green-600">
                                        <FaMapMarkerAlt size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">Location</p>
                                        <p className="font-semibold dark:text-white">Kushtia, Bangladesh</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl text-green-600">
                                        <FaLayerGroup size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">Category</p>
                                        <p className="font-semibold dark:text-white">Home Layout</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl text-green-600">
                                        <FaCalendarAlt size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">Completion Date</p>
                                        <p className="font-semibold dark:text-white">March 2024</p>
                                    </div>
                                </div>
                            </div>

                            {/* Call to Action in Sidebar */}
                            <button className="w-full mt-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-green-600/20">
                                Get Similar Project
                            </button>
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
