import { easeOut, motion } from "framer-motion";
import { LocateFixed, Map, Ruler, Compass, LandPlot, MapPinHouse, HeartHandshake, BookOpenCheck, ChessPawn } from "lucide-react";

const AllServices = [
  {
    id: 1,
    title: "Land Surveying",
    desc: "We use modern digital GPS technology to ensure perfect results and high precision.",
    icon: <LocateFixed className="w-10 h-10 text-white" />,
    background: "bg-blue-500"
  },
  {
    id: 2,
    title: "Digital Land Measurement",
    desc: "Experienced in resolving land boundary disputes and installing accurate boundary pillars.",
    icon: <Ruler className="w-10 h-10 text-white" />,
    background: "bg-red-500"
  },
  {
    id: 3,
    title: "Analog Land Measurement",
    desc: "Creating detailed maps by analyzing elevation and geographical structure for construction.",
    icon: <Map className="w-10 h-10 text-white" />,
    background: "bg-green-500"
  },
  {
    id: 4,
    title: "Land Boundary Identification",
    desc: "Providing the correct layout according to your housing project or personal land design.",
    icon: <Compass className="w-10 h-10 text-white" />,
    background: "bg-yellow-600"
  },
  {
    id: 5,
    title: "Land Area Calculation",
    desc: "Precise calculation of land size and volume using advanced mathematical tools.",
    icon: <LandPlot className="w-10 h-10 text-white" />,
    background: "bg-purple-500"
  },
  {
    id: 6,
    title: "Land Mapping / Plot Mapping",
    desc: "Detailed digital mapping and plot layout design for residential or commercial use.",
    icon: <MapPinHouse className="w-10 h-10 text-white" />,
    background: "bg-orange-500"
  },
  {
    id: 7,
    title: "Land Mutation Assistance",
    desc: "Expert support and guidance for smooth land mutation and official documentation.",
    icon: <HeartHandshake className="w-10 h-10 text-white" />,
    background: "bg-cyan-500"
  },
  {
    id: 8,
    title: "Document Verification",
    desc: "Verifying land documents and records to ensure a safe and secure transaction.",
    icon: <BookOpenCheck className="w-10 h-10 text-white" />,
    background: "bg-amber-500"
  },
  {
    id: 9,
    title: "Boundary Pillar Setting",
    desc: "Professional installation of permanent boundary pillars to prevent future disputes.",
    icon: <ChessPawn className="w-10 h-10 text-white" />,
    background: "bg-fuchsia-500"
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold dark:text-white"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Trust us for accurate measurements and reliable reports for all your land surveying needs.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AllServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: easeOut,
                delay: index * 0.1
              }}
              whileHover={{
                y: -12,
                transition: { duration: 0.3 }
              }}
              className="group p-8 bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 transition-all hover:shadow-2xl hover:shadow-green-600/10 hover:border-green-500/30"
            >
              <div className={`mb-6 inline-block p-3 rounded-2xl dark:bg-slate-700 shadow-sm group-hover:scale-110 transition-transform ${service.background}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 dark:text-white group-hover:text-green-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
