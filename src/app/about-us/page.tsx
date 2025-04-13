'use client'

import React, { FormEvent } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import emailjs from "emailjs-com";

// Initialize EmailJS
emailjs.init("n3BdJYmUxcjj-xHzi");

export default function AboutUs() {
  return (
    <div className="bg-gradient-to-r from-gray-300 via-orange-200 to-gray-100 text-gray-900">
      <Header />

      <section className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-orange-600">About Us</h1>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Our strength is in our unparalleled commitment to care for your business and its changing needs.
          </p>
        </div>

        {/* Who We Are */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-orange-500">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed">
              NotionSoft is a leading IT solution provider delivering innovative, secure, and scalable technology solutions across various industries. We specialize in AI, mobile and desktop app development, biometrics, network troubleshooting, and more, helping businesses transform digitally with ease and efficiency.
            </p>
          </div>
          <Image src="/about-us-who-we-are.jpg" alt="About Us" width={500} height={400} className="rounded-xl shadow-lg" />
        </div>

        {/* What we do? */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-orange-500">What We Do?</h2>
            <p className="text-gray-700 leading-relaxed">
              We build scalable digital technology solutions to encourage sustainable business growth.
            </p>
          </div>
          <Image src="/about-us-whatWeDo.png" alt="About Us" width={500} height={400} className="rounded-xl shadow-lg" />
        </div>

        {/* Who we help? */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-orange-500">Who We Help?</h2>
            <p className="text-gray-700 leading-relaxed">
              We help customers to adopt and migrate to new technologies, so businesses can modernize the way they operate and create unparalleled customer experiences.
            </p>
          </div>
          <Image src="/about-us-whoWeHelp.jpg" alt="About Us" width={500} height={400} className="rounded-xl shadow-lg" />
        </div>

        {/* Why choose us? */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-orange-500">Why Choose Us?</h2>
            <p className="text-gray-700 leading-relaxed">
              We are an innovative technology and digital partner. We endeavor to continue to inspire, transform, and create synergies that shape the digital world and ensure shared prosperity for all.
            </p>
          </div>
          <Image src="/about-us-whyChooseUs.jpg" alt="About Us" width={500} height={400} className="rounded-xl shadow-lg" />
        </div>

        {/* Core Values */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-orange-500 text-center">Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6 text-gray-800">
            {[
              "Integrity — Fair, transparent, and ethical conduct",
              "Innovation — Sustainable growth through creativity",
              "Empowerment — Turning challenges into opportunities",
              "Diversity — Embracing all cultures and perspectives",
              "Sustainability — Digital ecosystem for the future",
              "Shared Prosperity — Growth for all stakeholders",
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg">
                <p className="text-center font-medium">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Us Section */}
        <section className="bg-gradient-to-r from-gray-200 via-orange-300 to-gray-orange-200 py-16">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center text-orange-600 mb-6">Contact Us</h2>
            <form
              onSubmit={(e: FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                const form = e.currentTarget;
              
                const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
              
                if (!name || !email || !message) {
                  alert("All fields are required.");
                  return;
                }
              
                const data = { name, email, message };
              
                emailjs.send("service_m6peakr", "template_iavku8h", data, "n3BdJYmUxcjj-xHzi")
                  .then(() => {
                    alert("Message sent successfully!");
                    form.reset();
                  })
                  .catch(() => alert("Failed to send message. Please try again later."));
              }}
              
              className="space-y-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-orange-400"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-orange-400"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gray-300 via-orange-400 to-orange-200 hover:bg-orange-600 text-white py-3 rounded-md font-semibold border-b-amber-600 border-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

       
      </section>

      <Footer />
    </div>
  );
}
