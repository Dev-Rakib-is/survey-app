
import { easeInOut, motion } from 'framer-motion';

const projectData = [
    {
        id: 1,
        title: "Land Surveying",
        image: "https://i.ibb.co.com/ym4Sk2d0/656480626-26135387086131690-8408079452778044257-n.jpg",
        category: "i"
    },
    {
        id: 2,
        title: "Topographical Map",
        image: "https://i.ibb.co.com/zWnPGWPB/Gallery3.jpg",
        category: "i"
    },
    {
        id: 3,
        title: "Plot Layout",
        image: "https://i.ibb.co.com/KPSdNH0/Rana-vi-2.jpg",
        category: "i"
    },
    {
        id: 4,
        title: "GPS Measurement",
        image: "https://i.ibb.co.com/JRPwvL7Y/Gallery2.jpg",
        category: "i"
    }
]

const Projects = () => {
    return (
        <section className="bg-black/5 my-10">
            <div className="container mx-auto px-4">
                {/* Header  */}
                <motion.header
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: easeInOut }}
                    className="text-center py-3 ">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
                    <p className="text-gray-500 mt-3 dark:text-white">Some of my recent best works</p>
                </motion.header>
                {/* body  */}
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  overflow-hidden">
                    {projectData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="relative group overflow-hidden cursor-pointer">
                            <img src={item.image} alt={item.title} className='rounded-lg h-80 w-full object-cover group-hover:blur-xs transition duration-300 ease-in-out' />
                            {/* Overlay  */}
                            <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-0">
                                <p  className='text-green-500 bg-black rounded-2xl p-0.5 text-2xl font-semibold absolute bottom-6 left-1/2 -translate-x-1/2 text-center'>{item.title}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects