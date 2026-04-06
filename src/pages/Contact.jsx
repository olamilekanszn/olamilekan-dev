import { FaLinkedin, FaTwitter, FaGithubSquare } from "react-icons/fa";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { emailjsConfig } from "../config/emailjs";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [errors, setErrors] = useState({});

  // Initialize EmailJS once when component mounts
  useEffect(() => {
    if (emailjsConfig.publicKey) {
      emailjs.init(emailjsConfig.publicKey);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // Debugging - remove or comment out in production
      console.log("EmailJS Config:", {
        serviceId: emailjsConfig.serviceId,
        templateId: emailjsConfig.templateId,
        publicKey: emailjsConfig.publicKey ? "Present" : "Missing",
        toEmail: emailjsConfig.toEmail,
      });

      const result = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: emailjsConfig.toEmail,
        }
      );

      console.log("Email sent successfully:", result.text);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 flex items-center justify-center snap-start">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
        <div className="text-center md:text-left order-2 md:order-1">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-4 sm:mb-6">
            Let's Work Together
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6 sm:mb-8">
            I&apos;m currently open to{" "}
            <strong className="text-blue-900">freelance opportunities</strong>,
            remote jobs, collaborations, or just connecting with fellow
            developers and creatives. If you have an idea or project you&apos;d
            like to discuss feel free to reach out!
          </p>

          <div className="flex justify-center md:justify-start space-x-6 text-2xl sm:text-3xl text-blue-600 mb-6 sm:mb-8">
            <a
              href="https://linkedin.com/in/olamilekan-egbeyemi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-900 transition"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/ridwanullahiszn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transform hover:scale-110 transition duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com/olamilekanszn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 transition"
              title="GitHub"
            >
              <FaGithubSquare />
            </a>
          </div>

          <p className="text-gray-600 text-sm sm:text-base">
            Or send me a message via email directly.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 order-1 md:order-2">
          <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-4 sm:mb-6">
            Send a Message
          </h3>

          {submitStatus === "success" && (
            <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md text-sm">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm">
              Failed to send message. Please try again or email me directly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full border rounded-md px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 text-sm sm:text-base ${
                  errors.name
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border rounded-md px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 text-sm sm:text-base ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className={`w-full border rounded-md px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 text-sm sm:text-base resize-none ${
                  errors.message
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full font-semibold py-2 sm:py-3 rounded-md transition text-sm sm:text-base ${
                isSubmitting
                  ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                  : "bg-blue-800 text-white hover:bg-blue-900"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
