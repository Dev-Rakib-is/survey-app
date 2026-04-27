import { AnimatePresence, easeOut, motion } from "framer-motion";
import { LocateFixed, Map, Ruler, Compass } from "lucide-react";

const AllServices = [
  {
    title: "Digital Land Survey",
    desc: "We use modern digital GPS technology to ensure perfect results.",
    icon: <LocateFixed className="w-10 h-10 text-green-600" />,
  },
  {
    title: "Boundary Survey",
    desc: "We are experienced in resolving land boundary disputes and installing accurate boundary pillars.",
    icon: <Ruler className="w-10 h-10 text-green-600" />,
  },
  {
    title: "Topographical Mapping",
    desc: "We create maps by analyzing the elevation and geographical structure of the land for construction work.",
    icon: <Map className="w-10 h-10 text-green-600" />,
  },
  {
    title: "Plot Layout",
    desc: "We provide the correct layout according to your housing project or personal land design.",
    icon: <Compass className="w-10 h-10 text-green-600" />,
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold dark:text-white">
            Our services
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Trust us for accurate measurements and reliable reports.
          </p>
        </div>

        <AnimatePresence>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {AllServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 30 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, ease: easeOut, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="p-8 bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 transition-all hover:shadow-2xl hover:shadow-green-600/10"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;
