import { motion } from "framer-motion";
import { LocateFixed, Map, Ruler, Compass } from "lucide-react";

const AllServices = [
  {
    title: "Digital Land Survey",
    desc: "নিখুঁত ফলাফল নিশ্চিত করতে আমরা আধুনিক ডিজিটাল জিপিএস প্রযুক্তি ব্যবহার করি।",
    icon: <LocateFixed className="w-10 h-10 text-green-600" />,
  },
  {
    title: "Boundary Survey",
    desc: "জমির সীমানা নিয়ে বিরোধ মিমাংসা এবং সঠিক সীমানা পিলার স্থাপনে আমরা অভিজ্ঞ।",
    icon: <Ruler className="w-10 h-10 text-green-600" />,
  },
  {
    title: "Topographical Mapping",
    desc: "নির্মাণ কাজের জন্য ভূমির উচ্চতা এবং ভৌগলিক গঠন বিশ্লেষণ করে ম্যাপ তৈরি করি।",
    icon: <Map className="w-10 h-10 text-green-600" />,
  },
  {
    title: "Plot Layout",
    desc: "আপনার হাউজিং প্রজেক্ট বা ব্যক্তিগত জমির নকশা অনুযায়ী সঠিক লেআউট প্রদান করি।",
    icon: <Compass className="w-10 h-10 text-green-600" />,
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold dark:text-white">
            আমাদের সেবাসমূহ
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            সঠিক পরিমাপ এবং নির্ভরযোগ্য রিপোর্টের জন্য আমাদের ওপর আস্থা রাখুন
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {AllServices.map((service, index) => (
            <motion.div
              key={index}
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
      </div>
    </section>
  );
};

export default Services;
