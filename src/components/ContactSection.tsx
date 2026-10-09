import React, { useState } from "react";
import {
  X,
  Sparkles,
  Send,
  CheckCircle,
  Calendar,
  MapPin,
  Phone,
  Mail,
  User,
} from "lucide-react";

interface ContactSectionProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  isOpen,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    weddingDate: "",
    eventType: "Full Wedding & Reception",
    budget: "₹2 Lakhs - ₹4 Lakhs",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const content = (
    <div className="max-w-4xl mx-auto p-6 sm:p-10 glass-mild-card rounded-3xl border border-[#EBDEBE] shadow-2xl text-[#2C251E]">
      {/* Header */}
      <div className="flex items-center justify-between pb-6 border-b border-[#EBDEBE] mb-8">
        <div className="space-y-1">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full glass-button text-[#BD9C7A] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tell Your Story</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#2C251E] font-light">
            Book Your Wedding Dates
          </h2>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="p-2.5 rounded-full glass-mild-btn text-[#2C251E] hover:bg-[#BD9C7A] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {submitted ? (
        <div className="text-center py-12 space-y-4">
          <CheckCircle className="w-16 h-16 text-[#546135] mx-auto animate-bounce" />
          <h3 className="font-4 text-[#2C251E]">Thank You for Reaching Out!</h3>
          <p className="font-8 text-[#615546] max-w-md mx-auto font-light leading-relaxed">
            Our creative team at Congratulations Weddings & Events will review
            your dates and contact you within 24 hours.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              if (onClose) onClose();
            }}
            className="mt-6 px-8 py-3 rounded-full bg-[#BD9C7A] text-[#2C251E] font-bold font-10 tracking-widest uppercase hover:bg-[#A38362] transition-all cursor-pointer shadow-md"
          >
            Done
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block font-10 uppercase tracking-wider text-[#2C251E] mb-2 font-semibold">
                Your Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-[#8C7152] absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Ananya & Rahul"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-3 rounded-xl glass-mild border border-[#BD9C7A]/40 text-[#2C251E] placeholder-[#8C7152]/60 focus:outline-none focus:border-[#BD9C7A] font-8"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block font-10 uppercase tracking-wider text-[#2C251E] mb-2 font-semibold">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#8C7152] absolute left-3.5 top-3.5" />
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-3 rounded-xl glass-mild border border-[#BD9C7A]/40 text-[#2C251E] placeholder-[#8C7152]/60 focus:outline-none focus:border-[#BD9C7A] font-8"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block font-10 uppercase tracking-wider text-[#2C251E] mb-2 font-semibold">
                Phone / WhatsApp Number *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-[#8C7152] absolute left-3.5 top-3.5" />
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-3 rounded-xl glass-mild border border-[#BD9C7A]/40 text-[#2C251E] placeholder-[#8C7152]/60 focus:outline-none focus:border-[#BD9C7A] font-8"
                />
              </div>
            </div>

            {/* Wedding Date */}
            <div>
              <label className="block font-10 uppercase tracking-wider text-[#2C251E] mb-2 font-semibold">
                Event / Wedding Date *
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-[#8C7152] absolute left-3.5 top-3.5" />
                <input
                  type="date"
                  required
                  value={formData.weddingDate}
                  onChange={(e) =>
                    setFormData({ ...formData, weddingDate: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-3 rounded-xl glass-mild border border-[#BD9C7A]/40 text-[#2C251E] placeholder-[#8C7152]/60 focus:outline-none focus:border-[#BD9C7A] font-8"
                />
              </div>
            </div>

            {/* Event Location */}
            <div>
              <label className="block font-10 uppercase tracking-wider text-[#2C251E] mb-2 font-semibold">
                Wedding Location / Venue *
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-[#8C7152] absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Kochi, Kovalam, Chennai, Dubai"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-3 rounded-xl glass-mild border border-[#BD9C7A]/40 text-[#2C251E] placeholder-[#8C7152]/60 focus:outline-none focus:border-[#BD9C7A] font-8"
                />
              </div>
            </div>

            {/* Budget Expectation */}
            <div>
              <label className="block font-10 uppercase tracking-wider text-[#2C251E] mb-2 font-semibold">
                Estimated Photography Budget
              </label>
              <select
                value={formData.budget}
                onChange={(e) =>
                  setFormData({ ...formData, budget: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl glass-mild border border-[#BD9C7A]/40 text-[#2C251E] focus:outline-none focus:border-[#BD9C7A] font-8"
              >
                <option value="₹1.5 Lakhs - ₹2.5 Lakhs">
                  ₹1.5 Lakhs - ₹2.5 Lakhs
                </option>
                <option value="₹2.5 Lakhs - ₹4 Lakhs">
                  ₹2.5 Lakhs - ₹4 Lakhs
                </option>
                <option value="₹4 Lakhs - ₹7 Lakhs">₹4 Lakhs - ₹7 Lakhs</option>
                <option value="₹7 Lakhs+ (Luxury Destination)">
                  ₹7 Lakhs+ (Luxury Destination)
                </option>
              </select>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block font-10 uppercase tracking-wider text-[#2C251E] mb-2 font-semibold">
              Tell Us About Your Vision & Functions
            </label>
            <textarea
              rows={3}
              placeholder="Share details about your engagement, sangeet, wedding ceremony & expectations..."
              value={formData.notes}
              onChange={(e) =>
                setFormData({ ...formData, notes: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl glass-mild border border-[#BD9C7A]/40 text-[#2C251E] placeholder-[#8C7152]/60 focus:outline-none focus:border-[#BD9C7A] font-8"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-4 rounded-full bg-[#BD9C7A] text-[#2C251E] font-bold font-10 tracking-[0.25em] uppercase hover:bg-[#A38362] transition-all shadow-xl cursor-pointer flex items-center justify-center space-x-2"
          >
            <Send className="w-4 h-4" />
            <span>Submit Enquiry</span>
          </button>
        </form>
      )}
    </div>
  );

  if (isOpen !== undefined) {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto no-scrollbar">
        <div
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
          onClick={onClose}
        />
        <div className="relative z-10 w-full max-w-4xl my-8">{content}</div>
      </div>
    );
  }

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-[#F3F0DD] px-4 sm:px-6 scroll-mt-20 md:scroll-mt-24"
    >
      {content}
    </section>
  );
};
