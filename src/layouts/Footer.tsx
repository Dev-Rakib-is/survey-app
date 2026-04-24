import { Link } from "react-router"
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
    const services = [
        { name: "Land Surveying", link: "" },
        { name: "Digital Land Measurement", link: "" },
        { name: "Analog Land Measurement", link: "" },
        { name: "Land Boundary Identification", link: "" },
        { name: "Land Area Calculation", link: "" },
        { name: "Land Mapping / Plot Mapping", link: "" },
        { name: "Land Mutation Assistance", link: "" },
        { name: "Land Document Verification GPS Survey", link: "" },
        { name: "Boundary Pillar Setting", link: "" },
    ]

    const navigation = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Projects", link: "/projects" },
    ]

    return (
        <footer className="bg-linear-to-l fron-lime-200 to-green-100 px-4 md:px-6 lg:px-8 border-t border-b border-gray-300">
            <div className="container mx-auto py-10 flex flex-col lg:flex-row justify-between gap-10">

                {/* Left Side (Logo & Social) */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left basis-1/3">
                    <Link to='/' aria-label="Home">
                        <img src="/logo.png" alt="company logo" className="w-[100px] h-[100px] md:w-[130px] md:h-[130px]" />
                    </Link>
                    <p className="text-base font-medium mt-3 text-gray-800">Land Surveyors & Home Inspectors</p>

                    {/* Social Icons */}
                    <div className="flex gap-4 pt-4">
                        <a href="https://www.facebook.com/nuruzzaman.rana.75"
                            aria-label="Visit our Facebook profile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white rounded-full shadow-sm text-gray-700 hover:text-blue-700 hover:scale-110 transition-all duration-300">
                            <FaFacebookF size={20} />
                        </a>
                    </div>
                </div>

                {/* Right Side (Links Grid) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">

                    {/* Services */}
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                        <h5 className="font-bold pb-3 mb-3 border-b-2 border-green-600 sm:border-none uppercase text-sm tracking-wider">Services</h5>
                        <ul className="flex flex-col gap-3">
                            {services.map((item, index) => (
                                <li>
                                    <Link to={item.link} key={index} className="relative group w-fit text-sm text-gray-700 hover:text-green-700 transition-colors duration-300">
                                        {item.name}
                                        <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                        <h5 className="font-bold pb-3 mb-3 border-b-2 border-green-600 sm:border-none uppercase text-sm tracking-wider">Navigation</h5>
                        <ul className="flex flex-col gap-3">
                            {navigation.map((item, index) => (
                                <Link to={item.link} key={index} className="relative group w-fit text-sm text-gray-700 hover:text-green-700 transition-colors duration-300">
                                    {item.name}
                                    <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                        <h5 className="font-bold pb-3 mb-3 border-b-2 border-green-600 sm:border-none uppercase text-sm tracking-wider">Contact</h5>
                        <div className="flex flex-col gap-3">
                            <Link to="/contact" className="relative group w-fit text-sm font-medium text-gray-700 hover:text-green-700 transition-colors duration-300">
                                Contact us
                                <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                            <a href="tel:+8801730545451" className="relative group w-fit text-sm font-semibold tracking-wide text-gray-800 hover:text-green-700 transition-colors duration-300">
                                +880 1730-545451
                                <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center py-6 text-xs text-gray-600">
                © {new Date().getFullYear()} JMR Land Survey. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
