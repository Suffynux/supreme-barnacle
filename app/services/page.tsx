"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Plane,
  MapPin,
  CheckCircle2,
  Clock,
  ShieldCheck,
  UserCheck,
  CreditCard,
  MessageCircle,
  Car,
} from "lucide-react";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function AirportTransfersPage() {
  return (
    <main className="flex flex-col min-h-screen bg-slate-50 font-noto">
      {/* 1. PAGE OPENING (HERO) */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Helper background if video loads slow */}
        <div className="absolute inset-0 bg-slate-900 z-0"></div>
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/herovideos/herovid1.mp4" type="video/mp4" />
        </video>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10" />

        <div className="relative z-20 container mx-auto px-4 text-center max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <span className="inline-block py-1 px-3 rounded-full bg-[#0DCDC2]/20 text-[#0DCDC2] text-sm font-semibold mb-4 border border-[#0DCDC2]/30 backdrop-blur-sm">
              Umrah & International Pilgrims
            </span>
            <h1 className="text-4xl md:text-[55px] font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
              Reliable Airport Transfers for <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent mt-2 inline-block">
                Umrah & International Pilgrims
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
              Safe, punctual, and stress-free pickup from Jeddah or Madinah
              Airport designed especially for pilgrims arriving from the UK,
              USA, and Europe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://wa.me/966500000000" // Replace with actual number
                className="bg-[#0DCDC2] hover:bg-[#0abdb3] text-black font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(13,205,194,0.4)] hover:shadow-[0_0_30px_rgba(13,205,194,0.6)] flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Book via WhatsApp
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE CORE PAIN */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Arriving in a new country shouldn’t feel uncertain
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              Landing after a long international flight can be exhausting
              especially when traveling for Umrah. Concerns about finding the
              right driver, managing luggage, language barriers, or being
              overcharged can quickly turn a peaceful journey into a stressful
              experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. WHAT WE SOLVE */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                How Our Airport Transfer Service Helps You
              </h2>
              <div className="space-y-4">
                {[
                  "Meet & Greet inside the airport",
                  "Driver waits even if your flight is delayed",
                  "Direct transfer to your hotel (no shared rides)",
                  "Fixed, transparent pricing no surprises",
                  "Clean, air-conditioned, licensed vehicles",
                  "Suitable for families, elderly pilgrims, and groups",
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeIn}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#0DCDC2] shrink-0 mt-0.5" />
                    <span className="text-lg text-slate-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image Placeholder representing Service/Comfort */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 relative rounded-2xl overflow-hidden shadow-2xl h-[400px] w-full"
            >
              {/* Using a vehicle image as a representation of service */}
              <Image
                src="/vehicles/staria.png" // Staria looks modern/comfy for this section
                alt="Comfortable Transfer Service"
                fill
                className="object-contain bg-gradient-to-br from-slate-100 to-slate-200 p-8"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. AIRPORTS & ROUTES */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Airports & Train Stations We Serve
            </h2>
            <div className="w-20 h-1 bg-[#0DCDC2] mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                <Plane className="w-8 h-8 text-[#0DCDC2]" />
                <h3 className="text-xl font-bold text-white">Major Hubs</h3>
              </div>
              <ul className="space-y-4 text-slate-300">
                <li className="flex gap-2">
                  <MapPin className="w-5 h-5 text-[#0DCDC2]" /> Jeddah King
                  Abdulaziz International Airport
                </li>
                <li className="flex gap-2">
                  <MapPin className="w-5 h-5 text-[#0DCDC2]" /> Prince Mohammad
                  bin Abdulaziz Airport (Madinah)
                </li>
                <li className="flex gap-2">
                  <MapPin className="w-5 h-5 text-[#0DCDC2]" /> Haramain
                  High-Speed Railway Stations
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                <Car className="w-8 h-8 text-[#0DCDC2]" />
                <h3 className="text-xl font-bold text-white">Popular Routes</h3>
              </div>
              <ul className="space-y-4 text-slate-300">
                <li className="flex gap-2 items-center">
                  <span className="w-2 h-2 rounded-full bg-[#0DCDC2]"></span>{" "}
                  Jeddah Airport → Makkah Hotel
                </li>
                <li className="flex gap-2 items-center">
                  <span className="w-2 h-2 rounded-full bg-[#0DCDC2]"></span>{" "}
                  Madinah Airport → Madinah Hotel
                </li>
                <li className="flex gap-2 items-center">
                  <span className="w-2 h-2 rounded-full bg-[#0DCDC2]"></span>{" "}
                  Jeddah Airport → Madinah
                </li>
                <li className="flex gap-2 items-center">
                  <span className="w-2 h-2 rounded-full bg-[#0DCDC2]"></span>{" "}
                  Madinah Airport → Makkah
                </li>
                <li className="flex gap-2 items-center">
                  <span className="w-2 h-2 rounded-full bg-[#0DCDC2]"></span>{" "}
                  Hotel → Train Stations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VEHICLE OPTIONS */}
      <section className="py-20 bg-white" id="vehicles">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Vehicle Options for Every Travel Need
            </h2>
            <p className="text-slate-600 font-light">
              Choose the perfect ride for your comfort and group size.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Sedan */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-slate-50 rounded-2xl overflow-hidden shadow-lg border border-slate-100"
            >
              <div className="h-48 relative bg-white flex items-center justify-center p-6">
                <Image
                  src="/vehicles/camry.png"
                  alt="Sedan - Camry"
                  width={300}
                  height={200}
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Sedan</h3>
                <p className="text-sm text-[#0DCDC2] font-semibold mb-4">
                  Ideal for 1–3 passengers
                </p>
                <p className="text-slate-600 text-sm mb-4">
                  Perfect for individuals or couples with light luggage.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-500 border">
                    Air-conditioned
                  </span>
                  <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-500 border">
                    Comfortable
                  </span>
                </div>
              </div>
            </motion.div>

            {/* SUV */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-slate-50 rounded-2xl overflow-hidden shadow-lg border border-slate-100"
            >
              <div className="h-48 relative bg-white flex items-center justify-center p-4">
                <Image
                  src="/vehicles/gmc.png"
                  alt="SUV - GMC"
                  width={300}
                  height={200}
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">SUV</h3>
                <p className="text-sm text-[#0DCDC2] font-semibold mb-4">
                  Comfortable choice for families
                </p>
                <p className="text-slate-600 text-sm mb-4">
                  Spacious seating with ample luggage capacity for families.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-500 border">
                    Luxury
                  </span>
                  <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-500 border">
                    Spacious
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Van */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-slate-50 rounded-2xl overflow-hidden shadow-lg border border-slate-100"
            >
              <div className="h-48 relative bg-white flex items-center justify-center p-2">
                <Image
                  src="/vehicles/hiace.png"
                  alt="Van - Hiace"
                  width={300}
                  height={200}
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Van / Hiace
                </h3>
                <p className="text-sm text-[#0DCDC2] font-semibold mb-4">
                  Best for groups & extra luggage
                </p>
                <p className="text-slate-600 text-sm mb-4">
                  The standard for group travel, offering reliability and space.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-500 border">
                    Group Travel
                  </span>
                  <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-500 border">
                    Large Capacity
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. TRANSPARENT PRICING */}
      <section className="py-20 bg-[#0DCDC2]/5">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="bg-white p-10 rounded-3xl shadow-xl">
            <CreditCard className="w-12 h-12 text-[#0DCDC2] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Simple & Transparent Pricing
            </h2>
            <p className="text-slate-600 mb-8 font-light">
              Our airport transfer prices depend on your arrival airport,
              destination city, number of passengers, and vehicle type. You’ll
              always receive a clear final price before confirmation no hidden
              charges, no last-minute changes.
            </p>
            <Link
              href="#packages"
              className="inline-flex items-center justify-center px-8 py-3 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors shadow-lg"
            >
              View Airport Transfer Packages
            </Link>
          </div>
        </div>
      </section>

      {/* 7. WHY PILGRIMS TRUST US */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">
            Why Pilgrims Choose Us
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Trusted Experience",
                desc: "Years of serving international Umrah travelers.",
              },
              {
                icon: MessageCircle,
                title: "English Support",
                desc: "Dedicated team to assist you in your language.",
              },
              {
                icon: Clock,
                title: "Respect for Time",
                desc: "Punctuality is our promise, respecting prayer timings.",
              },
              {
                icon: UserCheck,
                title: "Professional Drivers",
                desc: "Licensed, polite, and knowledgeable drivers.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="text-center p-6 border border-slate-100 rounded-xl hover:shadow-lg transition-shadow"
              >
                <feature.icon className="w-10 h-10 text-[#0DCDC2] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm font-light">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. HOW BOOKING WORKS */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">
            How to Book Your Transfer
          </h2>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              {
                step: "1",
                title: "Share Details",
                desc: "Tell us your flight and hotel info.",
              },
              {
                step: "2",
                title: "Get Price",
                desc: "Receive transparent pricing & vehicle options.",
              },
              {
                step: "3",
                title: "Confirm",
                desc: "Secure your booking with ease.",
              },
              {
                step: "4",
                title: "Meet Us",
                desc: "Driver greets you at arrivals.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 z-10 relative">
                  {item.step}
                </div>
                {/* Connector Line (hide for last) */}
                {idx !== 3 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-slate-300 -z-0"></div>
                )}
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm max-w-[200px] font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. PRIMARY CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-center text-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Book Your Airport Transfer with Confidence
          </h2>
          <p className="text-slate-300 text-lg mb-10 font-light">
            Our team will guide you personally and answer any questions before
            you confirm.
          </p>
          <Link
            href="https://wa.me/966500000000" // Update number
            className="inline-flex items-center gap-3 bg-[#0DCDC2] hover:bg-[#0abdb3] text-black font-bold py-4 px-10 rounded-full text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(13,205,194,0.4)] hover:shadow-[0_0_30px_rgba(13,205,194,0.6)]"
          >
            <MessageCircle className="w-6 h-6" />
            Get Airport Transfer Assistance on WhatsApp
          </Link>
        </div>
      </section>
    </main>
  );
}
