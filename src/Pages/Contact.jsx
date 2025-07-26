import React, { useState, useEffect } from "react";
import { Send, User, Mail, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SocialLinks from "../components/SocialLinks";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: "Sending Message...",
      html: "Please wait while we send your message",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const formDataToSend = new FormData(e.target);
      
      const response = await fetch('https://formsubmit.co/shindepraful731@gmail.com', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        Swal.fire({
          title: "Success!",
          text: "Your message has been sent successfully! Redirecting to thank you page...",
          icon: "success",
          confirmButtonColor: "#6366f1",
          timer: 2000,
          timerProgressBar: true,
        }).then(() => {
          navigate('/thank-you');
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
        e.target.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again later or contact me directly.",
        icon: "error",
        confirmButtonColor: "#6366f1",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto w-full md:pl-[6%]" id="Contact"> {/* ✅ ID moved here */}
      <div className="text-center lg:mt-[5%] mt-10 mb-2 sm:px-0 px-[5%]">
        <h2
          data-aos="fade-down"
          data-aos-duration="1000"
          className="inline-block text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        >
          Contact Me
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="1100"
          className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2"
        >
          Got a question? Send me a message, and I'll get back to you soon.
        </p>
      </div>

      <div className="py-10 flex items-center justify-center px-[5%] md:px-0">
        <div className="container px-[1%] flex flex-col lg:flex-row justify-center items-stretch gap-8 lg:gap-12 w-full max-w-7xl">
          {/* Get in Touch Section */}
          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:shadow-[#6366f1]/10 w-full lg:w-1/2 flex flex-col h-full min-h-[650px]"
          >
            <div className="flex flex-col items-center text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                Get in Touch
              </h2>
              <p className="text-gray-400 text-sm sm:text-base">
                Have something to discuss? Send me a message and let's talk.
              </p>
            </div>

            <form
              action="https://formsubmit.co/shindepraful731@gmail.com"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-4 sm:space-y-6 flex-grow flex flex-col justify-center"
            >
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Contact Message from Portfolio" />

              {/* Name Field */}
              <div className="relative">
                <User className="absolute left-4 top-4 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full p-3 sm:p-4 pl-10 sm:pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50 text-sm sm:text-base"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <Mail className="absolute left-4 top-4 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full p-3 sm:p-4 pl-10 sm:pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50 text-sm sm:text-base"
                  required
                />
              </div>

              {/* Phone Field */}
              <div className="relative">
                <Phone className="absolute left-4 top-4 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Mobile Number"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full p-3 sm:p-4 pl-10 sm:pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50 text-sm sm:text-base"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full p-3 sm:p-4 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50 text-sm sm:text-base resize-none"
                  rows="4"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6366f1]/20 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base mt-4"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Connect with Me Section */}
          <div
            data-aos="fade-left"
            data-aos-duration="1200"
            className="w-full lg:w-2/5 flex justify-center"
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:shadow-[#6366f1]/10 w-full max-w-[400px] flex flex-col h-full min-h-[650px]">
              <div className="flex flex-col items-center text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                  Connect with Me
                </h2>
                <p className="text-gray-400 text-sm sm:text-base">
                  Follow me on social media and stay updated.
                </p>
              </div>
              <div className="flex-grow flex items-center justify-center">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
