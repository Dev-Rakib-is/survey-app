import Contact from "../components/shareComponents/Contact"
import { Link } from 'react-router';


const ContactPage = () => {
    return (
        <section className=" py-6">
            <div className="container mx-auto">
                <div className="py-24 rounded mx-auto bg-linear-to-l via-rose-50 from-teal-100 to-blue-100">
                    <p className=" text-blue-500 font-bold text-2xl text-center">Contact /<Link to="/" className="text-black hover:text-black/70">Home</Link></p>
                </div>
                <Contact />
            </div>
        </section>
    )
}

export default ContactPage