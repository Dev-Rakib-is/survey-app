import emailjs from "@emailjs/browser";
import { Phone, MapPin } from "lucide-react";
import { useRef, useState } from "react";

const Contact = () => {

    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState("");

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (form.current) {
            emailjs.sendForm(
                'service_pmbg64y',
                'template_vnfkt2k',
                form.current,
                'HnsQHRAGPiQnq0MYG'
            )
                .then(() => {
                    setStatus("The message was sent successfully!");
                    form.current?.reset();
                }, (error) => {
                    setStatus("Sorry ,try again");
                    console.log(error.text);
                });
        }
    };
    return (
        <section className="py-20 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Contact Form*/}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold dark:text-white">Send us a message</h2>
                    <form ref={form} onSubmit={sendEmail} className="space-y-4">
                        <input name="from_name" type="text" placeholder="Name" className="w-full p-4 rounded-xl bg-slate-100 dark:bg-slate-800 dark:text-white outline-none" />
                        <input name="user_mobile" type="tel" placeholder="Mobile" className="w-full p-4 rounded-xl bg-slate-100 dark:bg-slate-800 dark:text-white outline-none" />
                        <textarea name="message" placeholder="Type message" rows={4} className="w-full p-4 rounded-xl bg-slate-100 dark:bg-slate-800 dark:text-white outline-none"></textarea>
                        <button type="submit" className="w-full bg-green-600 text-white font-bold py-4 rounded-xl hover:bg-green-700 transition cursor-pointer">Sand message</button>
                        <p className="font-semibold text-center">{status}</p>
                    </form>
                </div>

                {/* ২. Contact*/}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 dark:text-white">
                            <Phone className="text-green-600" /> <span>+880 1719-326128</span>
                        </div>
                        <div className="flex items-center gap-4 dark:text-white">
                            <MapPin className="text-green-600" /> <span>Rasulpur, Chowrangi Bazar, Kumarkhali, Kushtia.</span>
                        </div>
                    </div>
                    {/* Google Map  */}
                    <div className="w-full  bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d868.5796195681679!2d89.20192126954753!3d23.8124402256038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDQ4JzQ0LjgiTiA4OcKwMTInMDkuMiJF!5e1!3m2!1sen!2sbd!4v1777264984258!5m2!1sen!2sbd"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className={`rounded-2xl shadow-lg w-full h-112.5 border-0 loading-lazy`}
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Contact