import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

interface Industry {
  title: string;
  description: string;
  imageSrc: string; // Add image source
}

const industries: Industry[] = [
  {
    title: "Banking And Finance",
    description:
      "Accelerate your journey with fintech innovation to reshape customer experience and enhance your digital transformation strategies, ensuring a better customer experience and future-proof business operations.",
    imageSrc: "/industries-finance.webp",
  },
  {
    title: "Government",
    description:
      "Fully-managed environment for Government, Built for security and compliance, ensuring data privacy, transparency, and efficiency across various governmental functions and services in a rapidly evolving digital landscape.",
    imageSrc: "/industries-govern.jpg",
  },
  {
    title: "E-Commerce",
    description:
      "Best-of-breed technologies to enhance customer experience (CX) and increase revenue to maximize business needs, enabling seamless online transactions and providing businesses with an edge in a competitive marketplace.",
    imageSrc: "/industries-ecomm.jpg",
  },
  {
    title: "E-Learning",
    description:
      "Reimaging education – from remote to hybrid learning models that cater to diverse learning styles and create interactive, collaborative, and flexible learning environments for students and educators.",
    imageSrc: "/industries-elearn.jpg",
  },
  {
    title: "Logistics & Distribution",
    description:
      "Changing the landscape of supply chain management by leveraging cutting-edge technologies, optimizing routes, reducing costs, and ensuring faster delivery times to meet modern consumer expectations.",
    imageSrc: "/industries-logistics.jpg",
  },
  {
    title: "Automotive",
    description:
      "Revolutionizing automotive development for the digital future, integrating AI, automation, and IoT to create smarter vehicles, improve safety features, and enhance the driving experience for customers worldwide.",
    imageSrc: "/industries-automotive.jpg",
  },
  {
    title: "Healthcare",
    description:
      "Delivering better experiences, better insights, and better care for better health by integrating innovative technologies to streamline patient care, improve diagnosis accuracy, and optimize healthcare workflows.",
    imageSrc: "/industries-health.jpg",
  },
  {
    title: "Manufacturing",
    description:
      "Leverage our deep expertise to modernize your manufacturing and industrial technologies and processes, incorporating automation, data analytics, and IoT to increase productivity, reduce waste, and ensure sustainable growth.",
    imageSrc: "/industries-manufa.jpg",
  },
];

const IndustryPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-gray-300 via-orange-200 to-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto p-8 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12 tracking-wide leading-tight">
          Industries We Serve
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300 ease-in-out"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden rounded-xl shadow-lg mb-6">
                <Image
                  src={industry.imageSrc}
                  alt={industry.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-48 transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
              </div>
              {/* Industry Title and Description */}
              <div className="space-y-6">
                <div className="text-center mb-4 text-orange-500">
                  <h2 className="text-2xl font-semibold">{industry.title}</h2>
                </div>
                <p className="text-lg text-gray-800 leading-relaxed truncate-description">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IndustryPage;
