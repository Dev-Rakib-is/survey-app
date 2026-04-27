import { motion } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "Boundary Survey",
        image: "https://i.ibb.co.com/ym4Sk2d0/656480626-26135387086131690-8408079452778044257-n.jpg",
        category: "Digital Survey"
    },
    {
        id: 2,
        title: "Topographical Map",
        image: "https://i.ibb.co.com/zWnPGWPB/Gallery3.jpg",
        category: "Mapping"
    },
    {
        id: 3,
        title: "Plot Layout",
        image: "https://i.ibb.co.com/KPSdNH0/Rana-vi-2.jpg",
        category: "Land Layout"
    },
    {
        id: 4,
        title: "GPS Measurement",
        image: "https://i.ibb.co.com/JRPwvL7Y/Gallery2.jpg"
    },
];

const Gallery = () => {
    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold dark:text-white">Our recent projects</h2>
                    <div className="w-20 h-1 bg-green-600 mx-auto mt-4"></div>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="relative group overflow-hidden rounded-3xl h-72 cursor-pointer shadow-lg"
                        >
                            {/* Project Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-green-400 text-sm font-semibold">{project.category}</span>
                                <h3 className="text-white text-xl font-bold">{project.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
