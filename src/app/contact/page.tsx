"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { SmartButton } from "@/components/ui/SmartButton";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required." }),
  lastName: z.string().min(2, { message: "Last name is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Valid phone number is required." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID || "";
      const TEMPLATE_ID_ADMIN = process.env.NEXT_PUBLIC_TEMPLATE_ID_ADMIN || "";
      const TEMPLATE_ID_USER = process.env.NEXT_PUBLIC_TEMPLATE_ID_USER || "";
      const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY || "";

      // Combine First and Last name for the email template
      const fullName = `${data.firstName} ${data.lastName}`;

      // 1. Send email to Admin
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID_ADMIN,
        {
          name: fullName,
          email: data.email,
          phone: data.phone,
          message: data.message,
        },  
        PUBLIC_KEY
      );

      // 2. Send Auto-reply to User
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID_USER,
        {
          name: fullName,
          email: data.email,
        },
        PUBLIC_KEY
      );

      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
      <Header />

      <main className="pt-32 pb-20 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20">
        {/* LEFT COLUMN: Contact Info */}
        <div className="w-full md:w-1/2 pt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4 transition-colors">
              Contact
            </h4>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold mb-16">
              Get In Touch
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-lg font-bold mb-2">Location</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed transition-colors">
                  Surat
                  <br />
                  Gujarat, India
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Contact</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-1 transition-colors">
                  akashdholiya5570@gmail.com
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed transition-colors">
                  +91 88661-11829
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Link
                href="mailto:akashdholiya5570@gmail.com"
                className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                aria-label="Email"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </Link>
              <a
                href="https://www.figma.com/@akashdholiya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                aria-label="Figma Community"
                title="Figma Community"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 38 57"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" />
                  <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" />
                  <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" />
                  <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" />
                  <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Form */}
        <div className="w-full md:w-1/2 pt-10 md:pl-12 border-l-0 md:border-l border-gray-100 dark:border-gray-800 transition-colors">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* First Name */}
                <div className="relative">
                  <input
                    {...register("firstName")}
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    className="w-full pb-4 bg-transparent border-b border-gray-300 dark:border-gray-700 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-2 absolute">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                {/* Last Name */}
                <div className="relative">
                  <input
                    {...register("lastName")}
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    className="w-full pb-4 bg-transparent border-b border-gray-300 dark:border-gray-700 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-2 absolute">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full pb-4 bg-transparent border-b border-gray-300 dark:border-gray-700 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-2 absolute">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className="relative">
                <input
                  {...register("phone")}
                  type="tel"
                  id="phone"
                  placeholder="Phone Number"
                  className="w-full pb-4 bg-transparent border-b border-gray-300 dark:border-gray-700 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-2 absolute">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  {...register("message")}
                  id="message"
                  rows={3}
                  placeholder="Message"
                  className="w-full pb-4 bg-transparent border-b border-gray-300 dark:border-gray-700 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-black dark:focus:border-white transition-colors resize-none"
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-2 absolute">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="flex justify-end pt-4">
                <SmartButton
                  type="submit"
                  disabled={isSubmitting}
                  className="px-10 py-3 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </SmartButton>
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="text-green-600 dark:text-green-400 text-sm font-medium">
                  Message sent successfully!
                </div>
              )}
              {submitStatus === "error" && (
                <div className="text-red-600 dark:text-red-400 text-sm font-medium">
                  Failed to send. Please try again.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
