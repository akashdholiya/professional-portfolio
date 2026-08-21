"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Spotlight } from "@/components/ui/Spotlight";
import { GridPattern } from "@/components/ui/GridPattern";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Figma, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";

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
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

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
      const SERVICE_ID = "service_iftiwzj";
      const TEMPLATE_ID_ADMIN = "template_43b2syf";
      const TEMPLATE_ID_USER = "template_fvgyt2j";
      const PUBLIC_KEY = "au-n6sGG34U_NGtRo";

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
    <div className="min-h-screen bg-white dark:bg-[#0B0F1A] text-neutral-900 dark:text-slate-100 font-sans selection:bg-violet-500 selection:text-white transition-colors duration-300">
      <Header />

      <main className="pt-28 md:pt-36 pb-20 relative overflow-hidden">
        <Spotlight className="-top-30 left-10 md:left-40" fill="#7C3AED" />
        <GridPattern showDots={true} />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Info */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 space-y-8"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 dark:bg-violet-500/15 border border-violet-500/20 text-xs font-mono font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-4">
                  <Sparkles className="w-4 h-4" />
                  <span>Get In Touch</span>
                </div>
                <h1 className="type-h1 text-neutral-900 dark:text-slate-50 leading-tight">
                  Let's Discuss Your Next Product
                </h1>
                <p className="type-body text-neutral-600 dark:text-slate-300 mt-4 leading-relaxed">
                  Whether you have an upcoming project, freelance inquiry, or full-time opportunity, feel free to reach out.
                </p>
              </div>

              {/* Direct channels */}
              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-[20px] bg-neutral-50 dark:bg-[#151B2A] border border-black/[0.08] dark:border-white/[0.08] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-400 dark:text-slate-400">
                      Email
                    </div>
                    <a
                      href="mailto:akashdholiya5570@gmail.com"
                      className="font-medium text-sm sm:text-base text-neutral-900 dark:text-white hover:text-violet-500 transition-colors"
                    >
                      akashdholiya5570@gmail.com
                    </a>
                  </div>
                </div>

                <div className="p-5 rounded-[20px] bg-neutral-50 dark:bg-[#151B2A] border border-black/[0.08] dark:border-white/[0.08] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-400 dark:text-slate-400">
                      Phone
                    </div>
                    <a
                      href="tel:+918866111829"
                      className="font-medium text-sm sm:text-base text-neutral-900 dark:text-white hover:text-purple-500 transition-colors"
                    >
                      +91 88661-11829
                    </a>
                  </div>
                </div>

                <div className="p-5 rounded-[20px] bg-neutral-50 dark:bg-[#151B2A] border border-black/[0.08] dark:border-white/[0.08] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-400 dark:text-slate-400">
                      Location
                    </div>
                    <div className="font-medium text-sm sm:text-base text-neutral-900 dark:text-white">
                      Surat, Gujarat, India
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-2">
                <a
                  href="https://www.figma.com/@akashdholiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-100 dark:bg-[#151B2A] border border-black/[0.08] dark:border-white/[0.08] text-xs font-bold uppercase tracking-wider text-neutral-800 dark:text-slate-200 hover:border-violet-500 transition-colors"
                >
                  <Figma className="w-4 h-4 text-violet-400" />
                  <span>Follow on Figma Community</span>
                </a>
              </div>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-7 p-8 sm:p-10 rounded-[24px] bg-neutral-50/90 dark:bg-[#151B2A] border border-black/[0.08] dark:border-white/[0.08] backdrop-blur-xl shadow-xl"
            >
              <h3 className="font-display text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 dark:text-slate-400">
                      First Name
                    </label>
                    <input
                      {...register("firstName")}
                      type="text"
                      placeholder="John"
                      className="w-full px-4 py-3 rounded-[12px] bg-white dark:bg-[#0B0F1A] border border-black/[0.08] dark:border-white/[0.10] text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all text-sm"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs font-medium">{errors.firstName.message}</p>
                    )}
                  </div>

                  {/* Last Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 dark:text-slate-400">
                      Last Name
                    </label>
                    <input
                      {...register("lastName")}
                      type="text"
                      placeholder="Doe"
                      className="w-full px-4 py-3 rounded-[12px] bg-white dark:bg-[#0B0F1A] border border-black/[0.08] dark:border-white/[0.10] text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all text-sm"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-xs font-medium">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 dark:text-slate-400">
                      Email Address
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-[12px] bg-white dark:bg-[#0B0F1A] border border-black/[0.08] dark:border-white/[0.10] text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all text-sm"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs font-medium">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 dark:text-slate-400">
                      Phone Number
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-[12px] bg-white dark:bg-[#0B0F1A] border border-black/[0.08] dark:border-white/[0.10] text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all text-sm"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs font-medium">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 dark:text-slate-400">
                    Project Details / Message
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Tell me about your project, timeline, and goals..."
                    className="w-full px-4 py-3 rounded-[12px] bg-white dark:bg-[#0B0F1A] border border-black/[0.08] dark:border-white/[0.10] text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all text-sm resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs font-medium">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold uppercase tracking-widest hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 cursor-pointer shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? "Sending Message..." : "Submit Message"}</span>
                  </button>
                </div>

                {/* Status Banners */}
                {submitStatus === "success" && (
                  <div className="p-4 rounded-[12px] bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center gap-3 text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="p-4 rounded-[12px] bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 flex items-center gap-3 text-sm font-medium">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>Failed to send. Please try again or reach out directly at akashdholiya5570@gmail.com</span>
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
