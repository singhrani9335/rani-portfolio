"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

import ContactInfoCard from "./ContactInfoCard";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setToast("Message Sent Successfully ");

      setTimeout(() => setToast(""), 2500);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-28 relative overflow-hidden bg-[#050816] py-24 text-white"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#050816] via-[#0b1220] to-[#050816]" />

      {/* Glow Effects (same as Hero) */}
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[140px]" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-pink-500/10 blur-[140px]" />
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[160px]" />

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
        linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
      `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold">
            Get In{" "}
            <span className="bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-400 leading-relaxed">
            Have a project idea or want to collaborate? Let’s build something
            amazing together.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="mt-20 grid gap-12 lg:grid-cols-2 items-start">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="space-y-5">
              <ContactInfoCard
                icon={<Mail size={22} />}
                title="Email"
                value="singhrani9335@gmail.com"
                href="mailto:singhrani9335@gmail.com"
                color="from-pink-500 via-violet-500 to-cyan-500"
              />

              <ContactInfoCard
                icon={<Phone size={22} />}
                title="Phone"
                value="+91 8869972125"
                href="tel:+918869972125"
                color="from-violet-500 via-pink-500 to-cyan-500"
              />

              <ContactInfoCard
                icon={<MapPin size={22} />}
                title="Location"
                value="Noida, Uttar Pradesh, India"
                color="from-cyan-500 via-violet-500 to-pink-500"
              />
            </div>

            {/* SOCIAL */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="mb-5 text-xl font-semibold">Connect With Me</h3>

              <div className="flex gap-4">
                {[
                  {
                    icon: <FaGithub />,
                    link: "https://github.com/singhrani9335",
                  },
                  { icon: <FaLinkedin />, link: "https://linkedin.com" },
                  { icon: <FaInstagram />, link: "https://instagram.com" },
                  { icon: <FaWhatsapp />, link: "https://wa.me/918869972125" },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 hover:bg-violet-500/20 transition hover:scale-110"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl space-y-5"
          >
            <h3 className="text-2xl font-bold mb-2">Send Message</h3>

            <input
              className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-violet-400 outline-none"
              placeholder="Your Name"
            />

            <input
              className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-pink-400 outline-none"
              placeholder="Your Email"
            />

            <input
              className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-cyan-400 outline-none"
              placeholder="Subject"
            />

            <textarea
              rows={5}
              className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-violet-400 outline-none"
              placeholder="Message"
            />

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 font-semibold hover:shadow-lg transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
