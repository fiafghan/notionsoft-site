import Header from "../components/Header";
import Footer from "../components/Footer";
import { Code, Smartphone, Monitor, BrainCircuit, WifiOff } from "lucide-react";
import Image from "next/image";

export default function Services() {
  return (
    <div className="bg-gradient-to-r from-gray-300 via-orange-200 to-gray-100 text-gray-900">
      <Header />

      <section className="max-w-7xl mx-auto px-4">

        <div className="space-y-24">

          
{/* Summary of Services */}
<div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-20 rounded-2xl mt-20 shadow-inner">
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Services at a Glance</h2>
  <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-10 leading-relaxed">
    We deliver smart, scalable, and reliable tech solutions — from AI and desktop apps to secure networks and biometric systems.
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-orange-500 mb-2">🖥 Desktop App Development</h3>
      <p className="text-gray-600">Custom software for business productivity, automation, and offline access.</p>
    </div>
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-orange-500 mb-2">🧠 AI App Development</h3>
      <p className="text-gray-600">Build smart apps with chatbots, computer vision, and predictive analytics.</p>
    </div>
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-orange-500 mb-2">🔐 Biometrics & Facial Recognition</h3>
      <p className="text-gray-600">Accurate, secure attendance with fingerprint and face detection systems.</p>
    </div>
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-orange-500 mb-2">📶 Network Troubleshooting</h3>
      <p className="text-gray-600">Diagnose, secure, and optimize home and enterprise network systems.</p>
    </div>
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-orange-500 mb-2">📊 Data Dashboards</h3>
      <p className="text-gray-600">Interactive dashboards to visualize KPIs, metrics, and analytics in real-time.</p>
    </div>
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-orange-500 mb-2">📱 Mobile App Development</h3>
      <p className="text-gray-600">Cross-platform apps for iOS and Android with a focus on user experience.</p>
    </div>
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-orange-500 mb-2">🧾 Inventory & ERP Systems</h3>
      <p className="text-gray-600">Manage resources, sales, and reporting in real-time with custom ERP tools.</p>
    </div>
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-orange-500 mb-2">💬 Chatbot Integration</h3>
      <p className="text-gray-600">AI-driven bots for customer support, learning, and automated services.</p>
    </div>
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-orange-500 mb-2">🌐 Web Development</h3>
      <p className="text-gray-600">Responsive websites and web apps tailored to your brand and goals.</p>
    </div>
  </div>

  <p className="text-center text-gray-700 mt-12 text-lg">
    Need a custom solution? <span className="font-semibold text-orange-600">Let’s bring your idea to life.</span>
  </p>
</div>


          <p className = "text-orange-400 text-center text-4xl font-semibold tracking-tight leading-tight border-b-2 border-white border-dotted">Comprehensive Overview of Our Services</p>
              {/* Web Development */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8">
  <div className="relative">
    <Image
      src="/services-web-app.jpg"
      alt="Web Development"
      width={800}
      height={600}
      className="rounded-xl shadow-lg w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
    />
  </div>
  <div className="space-y-6">
    <div className="flex items-center mb-6 text-orange-500">
      <Code className="w-12 h-12 mr-4" />
      <h2 className="text-4xl font-semibold tracking-tight leading-tight">Web Development</h2>
    </div>
    <div className="text-lg text-gray-800 leading-relaxed space-y-4">
      <p>
        We design and develop elegant, scalable, and high-performance websites that elevate your brand and streamline your digital services.
        From responsive corporate sites to complex web portals, we deliver customized solutions with cutting-edge technologies.
      </p>

      <p className="font-semibold text-xl text-gray-900">Our web development services include:</p>
      <ul className="list-disc ml-6 mt-3 space-y-2 text-base text-gray-700">
        <li>🌐 Business & Portfolio Websites — modern and responsive designs</li>
        <li>🛍️ E-commerce Platforms — integrated with secure payment gateways and inventory systems</li>
        <li>📊 Dashboards & Admin Panels — real-time data views, analytics, and control panels</li>
        <li>🔒 Secure Web Applications — login systems, user roles, encrypted APIs</li>
        <li>⚡ Optimized for Speed & SEO — built with performance-first approach</li>
      </ul>

      <p className="mt-4">
        Whether you’re launching a startup, modernizing your company website, or building a SaaS platform — we help you create a digital experience that leaves a lasting impression.
      </p>
    </div>
  </div>
</div>


                   {/* Mobile App Development */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8 md:flex-row-reverse">
  <div className="relative">
    <Image
      src="/services-mob-app.webp"
      alt="Mobile App Development"
      width={800}
      height={600}
      className="rounded-xl shadow-lg w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
    />
  </div>
  <div className="space-y-6">
    <div className="flex items-center mb-6 text-orange-500">
      <Smartphone className="w-12 h-12 mr-4" />
      <h2 className="text-4xl font-semibold tracking-tight leading-tight">Mobile App Development</h2>
    </div>
    <p className="text-lg text-gray-800 leading-relaxed space-y-4">
      We build modern, high-performing mobile apps that are visually stunning, fast, and user-friendly — helping you reach your audience anytime, anywhere.
      Whether you're building a customer-facing app, a digital service platform, or a business utility, we tailor the experience to your goals.
    </p>

    <p className="font-semibold text-xl text-gray-900">Our mobile development services include:</p>
    <ul className="list-disc ml-6 mt-3 space-y-2 text-base text-gray-700">
      <li>📱 Native & Cross-platform Apps — for both Android and iOS using Flutter & React Native</li>
      <li>🎨 Custom UI/UX Design — crafted for engagement, speed, and accessibility</li>
      <li>🛒 E-commerce & Service Apps — complete with payment gateways, order tracking, and chat</li>
      <li>📍 Location-Based Apps — for delivery, logistics, or field-service operations</li>
      <li>🔔 Push Notifications & Real-Time Features — for instant engagement and communication</li>
    </ul>

    <p className="mt-4">
      Whether you're a startup or a large enterprise, we bring your mobile vision to life with precision and purpose.
    </p>
  </div>
</div>



{/* Desktop App Development */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8">
  <div className="relative">
    <Image
      src="/services-desktop_app.jpg"
      alt="Desktop App Development"
      width={800}
      height={600}
      className="rounded-xl shadow-lg w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
    />
  </div>
  <div className="space-y-6">
    <div className="flex items-center mb-6 text-orange-500">
      <Monitor className="w-12 h-12 mr-4" />
      <h2 className="text-4xl font-semibold tracking-tight leading-tight">Desktop App Development</h2>
    </div>
    <p className="text-lg text-gray-800 leading-relaxed space-y-4">
      We build high-performance desktop applications tailored for productivity, performance, and seamless integration with your systems.
      Our desktop apps are built to handle heavy-duty tasks, streamline workflows, and provide robust offline functionality for businesses and professionals.
    </p>

    <p className="font-semibold text-xl text-gray-900">Our desktop solutions include:</p>
    <ul className="list-disc ml-6 mt-3 space-y-2 text-base text-gray-700">
      <li>🧾 Custom ERP & Inventory Systems — for managing operations in real time</li>
      <li>🖥️ Utility Tools — system cleaners, file managers, backup apps, and more</li>
      <li>🔐 Secure Login & Access Control Systems — for internal software and networks</li>
      <li>🧪 Scientific & Data Analysis Tools — tailored for engineers, researchers, and analysts</li>
      <li>⚙️ Cross-platform Development — Windows, macOS, and Linux with a unified codebase</li>
    </ul>

    <p className="mt-4">
      Whether you need a lightweight desktop tool or an enterprise-grade system, our team ensures smooth design, scalable architecture, and long-term support for your business goals.
    </p>
  </div>
</div>


{/* AI App Development */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8">
  <div className="relative">
    <Image
      src="/services-ai-dev.webp"
      alt="AI App Development"
      width={800}
      height={600}
      className="rounded-xl shadow-lg w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
    />
  </div>
  <div className="space-y-6">
    <div className="flex items-center mb-6 text-orange-500">
      <BrainCircuit className="w-12 h-12 mr-4" />
      <h2 className="text-4xl font-semibold tracking-tight leading-tight">AI App Development</h2>
    </div>
    <p className="text-lg text-gray-800 leading-relaxed space-y-4">
      We design and develop intelligent applications that can learn, reason, and make decisions — helping businesses and organizations become smarter and more efficient.
      Our AI-powered solutions combine the latest in machine learning, deep learning, and natural language processing.
    </p>

    <p className="font-semibold text-xl text-gray-900">Our AI apps include:</p>
    <ul className="list-disc ml-6 mt-3 space-y-2 text-base text-gray-700">
      <li>🤖 Smart Chatbots — for websites, customer support, and messaging platforms</li>
      <li>🧠 Recommendation Engines — for e-commerce, media, and content platforms</li>
      <li>🖼️ Image & Object Recognition — for surveillance, agriculture, health, and more</li>
      <li>📊 Predictive Analytics — to forecast trends, behavior, and risks</li>
      <li>🔍 Natural Language Processing — for text summarization, translation, and analysis</li>
    </ul>

    <p className="mt-4">
      Whether you're a startup building the next-gen app or an enterprise automating your business workflows — we help you turn your AI vision into reality, from strategy and design to deployment and support.
    </p>
  </div>
</div>

{/* Biometrics and Fingerprints */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8">
  <div className="relative">
    <Image
      src="/services-biometrics.png"
      alt="Biometrics and Fingerprint Attendance System"
      width={800}
      height={600}
      className="rounded-xl shadow-lg w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
    />
  </div>
  <div className="space-y-6">
    <div className="flex items-center mb-6 text-orange-500">
      <BrainCircuit className="w-12 h-12 mr-4" />
      <h2 className="text-4xl font-semibold tracking-tight leading-tight">Biometrics & Facial Recognition Attendance</h2>
    </div>
    <p className="text-lg text-gray-800 leading-relaxed space-y-4">
      We design and deploy modern biometric attendance systems using fingerprint and facial recognition technology. These solutions provide accurate, secure, and contactless check-ins for staff, students, or any kind of workforce.
    </p>

    <p className="font-semibold text-xl text-gray-900">Our systems are:</p>
    <ul className="list-disc ml-6 mt-3 space-y-2 text-base text-gray-700">
      <li>⚡ Fast and reliable — verifies identity within seconds</li>
      <li>🔒 Secure — eliminates proxy attendance and fraud</li>
      <li>📈 Integrated — syncs with your HR or payroll system</li>
      <li>📷 AI-powered — facial recognition with real-time detection</li>
      <li>📊 Offers live attendance reports and analytics dashboard</li>
    </ul>

    <p className="mt-4">
      Whether you need a school, office, or industrial solution — we provide custom installation, software, and ongoing support.
    </p>
  </div>
</div>

            {/* Network Troubleshooting */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8">
  <div className="relative">
    <Image
      src="/services-net_troubleshooting.jpg"
      alt="Network Troubleshooting Services"
      width={800}
      height={600}
      className="rounded-xl shadow-lg w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
    />
  </div>
  <div className="space-y-6">
    <div className="flex items-center mb-6 text-orange-500">
      <WifiOff className="w-12 h-12 mr-4" />
      <h2 className="text-4xl font-semibold tracking-tight leading-tight">Network Troubleshooting & Optimization</h2>
    </div>
    <p className="text-lg text-gray-800 leading-relaxed space-y-4">
      We diagnose and fix all types of network issues — from slow internet and dropped connections to full network outages. Our experts use modern diagnostic tools and deep expertise to ensure your systems are always online, fast, and secure.
    </p>

    <p className="font-semibold text-xl text-gray-900">Our troubleshooting services cover:</p>
    <ul className="list-disc ml-6 mt-3 space-y-2 text-base text-gray-700">
      <li>📡 Internet connectivity issues and router misconfigurations</li>
      <li>🧠 Advanced diagnostics — IP conflicts, DNS failures, DHCP errors</li>
      <li>🔒 Network security audits — identify weak points and block intrusions</li>
      <li>📶 Wi-Fi coverage optimization for homes, offices, and institutions</li>
      <li>📈 Performance tuning — ensure fast, stable, and efficient networks</li>
    </ul>

    <p className="mt-4">
      We handle both small setups and large enterprise networks — offering onsite visits, remote support, and documentation for IT teams.
    </p>

    <p className="mt-4">
      Let us keep your digital infrastructure connected, secure, and worry-free.
    </p>
  </div>
</div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
