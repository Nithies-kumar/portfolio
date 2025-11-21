import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Email = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !formData.from_name.trim() ||
      !formData.from_email.trim() ||
      !formData.message.trim()
    ) {
      toast.error(
        <div>
          <strong>Missing Information</strong>
          <div>Please fill in all fields.</div>
        </div>,
        { position: "bottom-right" }
      );
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.from_email)) {
      toast.error(
        <div>
          <strong>Invalid Email</strong>
          <div>Please enter a valid email address.</div>
        </div>,
        { position: "bottom-right" }
      );
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_a4l05cq",
        "template_hat6cih",
        formData,
        "LJVeH21hW3fHVwMy4"
      );

      toast.success(
        <div>
          <strong>Message Sent Successfully! ✅</strong>
          <div>Thank you for reaching out. I'll get back to you soon!</div>
        </div>,
        { position: "bottom-right" }
      );

      // Reset form
      setFormData({
        from_name: "",
        from_email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error(
        <div>
          <strong>Failed to Send Message</strong>
          <div>
            Something went wrong. Please try again or email me directly.
          </div>
        </div>,
        { position: "bottom-right" }
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-shadow duration-200 theme-transition">
      <div className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Name
            </label>
            <input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleInputChange}
              disabled={isSubmitting}
              className="w-full px-4 py-3 border border-input bg-background text-foreground rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors disabled:opacity-50"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <input
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleInputChange}
              disabled={isSubmitting}
              className="w-full px-4 py-3 border border-input bg-background text-foreground rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors disabled:opacity-50"
              placeholder="your.email@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Message
            </label>
            <textarea
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              disabled={isSubmitting}
              className="w-full px-4 py-3 border border-input bg-background text-foreground rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none disabled:opacity-50"
              placeholder="Your message..."
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-md font-medium bg-blue-600 h-10 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Email;
