import { BookOpenCheck, ChessPawn, Compass, HeartHandshake, LandPlot, Map, MapPinHouse, VectorSquare, PencilRuler } from "lucide-react";
import { easeIn, motion } from 'framer-motion';
import { useDispatch, useSelector } from "react-redux";
import { fetchbooking, resetBookingState } from "../../feature/booking/BookingSlice";
import type { RootState } from "../../app/store";
import { useEffect } from "react";
import Swal from 'sweetalert2';

const AllServices = [
  {
    id: 1,
    title: "Land Surveying",
    titleColor: "text-pink-500",
    desc: "Conducting professional site inspections and topographic analysis using precision instruments for construction engineering.",
    icon: <VectorSquare className="w-10 h-10 text-white" />,
    IconBackground: "bg-pink-500",
    btnText: "Book now",
    butotnBg: "bg-pink-500"
  },
  {
    id: 2,
    title: "Digital Land Measurement",
    titleColor: " text-lime-500",
    desc: "Utilizing modern GPS, RTK technology, and drone mapping to deliver laser-accurate digital area measurements and CAD reports.",
    icon: <PencilRuler className="w-10 h-10 text-white" />,
    IconBackground: "bg-lime-500",
    btnText: "Book now",
    butotnBg: "bg-lime-500"
  },
  {
    id: 3,
    title: "Analog Land Measurement",
    titleColor: "text-green-500",
    desc: "Executing traditional chain, tape, and compass-based physical ground calculations to match historical land registry records.",
    icon: <Map className="w-10 h-10 text-white" />,
    IconBackground: "bg-green-500",
    btnText: "Book now",
    butotnBg: "bg-green-500"
  },
  {
    id: 4,
    title: "Land Boundary Identification",
    titleColor: "text-yellow-500",
    desc: "Providing the correct layout according to your housing project or personal land design.",
    icon: <Compass className="w-10 h-10 text-white" />,
    IconBackground: "bg-yellow-500",
    btnText: "Book now",
    butotnBg: "bg-yellow-500"
  },
  {
    id: 5,
    title: "Land Area Calculation",
    titleColor: "text-blue-500",
    desc: "Precise calculation of land size and volume using advanced mathematical tools.",
    icon: <LandPlot className="w-10 h-10 text-white" />,
    IconBackground: "bg-blue-500",
    btnText: "Book now",
    butotnBg: "bg-blue-500"
  },
  {
    id: 6,
    title: "Land Mapping / Plot Mapping",
    titleColor: "text-orange-600",
    desc: "Detailed digital mapping and plot layout design for residential or commercial use.",
    icon: <MapPinHouse className="w-10 h-10 text-white" />,
    IconBackground: "bg-orange-600",
    btnText: "Book now",
    butotnBg: "bg-orange-600"
  },
  {
    id: 7,
    title: "Land Mutation Assistance",
    titleColor: "text-cyan-500",
    desc: "Expert support and guidance for smooth land mutation and official documentation.",
    icon: <HeartHandshake className="w-10 h-10 text-white" />,
    IconBackground: "bg-cyan-500",
    btnText: "Book now",
    butotnBg: "bg-cyan-500"
  },
  {
    id: 8,
    title: "Document Verification",
    titleColor: "text-violet-500",
    desc: "Verifying land documents and records to ensure a safe and secure transaction.",
    icon: <BookOpenCheck className="w-10 h-10 text-white" />,
    IconBackground: "bg-violet-500",
    btnText: "Book now",
    butotnBg: "bg-violet-500"
  },
  {
    id: 9,
    title: "Boundary Pillar Setting",
    titleColor: "text-fuchsia-700",
    desc: "Professional installation of permanent boundary pillars to prevent future disputes.",
    icon: <ChessPawn className="w-10 h-10 text-white" />,
    IconBackground: "bg-fuchsia-700",
    btnText: "Book now",
    butotnBg: "bg-fuchsia-700"
  },
];

const Services = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.Auth);
  const { isLoading, success, error } = useSelector((state: RootState) => state.Booking);

  useEffect(() => {
    if (success) {
      Swal.fire({
        title: "Booking Success",
        text: "Your booking has been confirmed.",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: '#22c55e'
      });
      dispatch(resetBookingState());
    } else if (error) { 
      Swal.fire({
        title: "Booking Failed",
        text: typeof error === 'string' ? error : "Please try again",
        icon: "error",
        confirmButtonText: "Try Again",
        confirmButtonColor: "#ef4444"
      });
      dispatch(resetBookingState());
    }
  }, [success, error, isLoading, dispatch]);

  // Handle Booking 
  const handleBooking = (serviceId: number) => {
    if (!user) {
      Swal.fire({
        title: "Login Required",
        text: "Please login first to book a service!",
        icon: "warning",
        confirmButtonColor: "#3085d6"
      });
      return;
    }

  
    const bookingData = {
      userId: user.id,
      serviceID: serviceId.toString(),
      price: 0,
      createdAt: new Date().toISOString(),
      status: "pending"
    };

   
    dispatch(fetchbooking(bookingData) as unknown as any);
  };

  return (
    <section className=" px-4 py-10 bg-gray-500/5 dark:bg-black/80">
      <div className="container mx-auto">
        {/* Header  */}
        <div className="mb-10">
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: easeIn }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold dark:text-white text-center">Our services</motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: easeIn }}
            className="h-1 w-20 bg-green-500 mx-auto mt-2 rounded"></motion.div>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 rounded-lg px-4">
          {AllServices.map((item, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.3 }}
              className=" hover:shadow-2xl p-6 bg-white dark:bg-gray-700 rounded-3xl">
              <div className={`w-12 h-12 rounded flex items-center justify-center ${item.IconBackground} m-2`}>{item.icon}</div>
              <h3 className={`font-bold text-xl ${item.titleColor}`}>{item.title}</h3>
              <p className="line-clamp-2">{item.desc}</p>

              {/* Button  */}
              <div className="flex justify-between items-center mt-2">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className={`font-bold cursor-pointer rounded bg-blue-50 p-2 ${item.butotnBg}`}> Details</motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleBooking(item.id)} 
                  className={`font-bold text-base rounded p-2 text-white cursor-pointer ${item.butotnBg}`}>{item.btnText}</motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section >
  )
}

export default Services;
