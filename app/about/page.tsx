'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const skills = [
  { name: 'Python', level: 92 },
  { name: 'Django', level: 90 },
  { name: 'PostgreSQL', level: 80 },
  { name: 'FastAPI', level: 80 },
  { name: 'React', level: 70 },
  { name: 'Angular', level: 62 },
  { name: 'C++', level: 50 },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
                About
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
I'm a machine learning engineer focused on building intelligent systems using data-driven approaches. With expertise in machine learning, data analysis, and artificial intelligence, I develop scalable solutions that solve real-world problems.
              </p>
              <div className="flex items-center space-x-6">
                <a 
                  href="https://www.linkedin.com/in/pawan-raulo-349526326" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  <i className="ri-linkedin-fill text-gray-700 w-5 h-5 flex items-center justify-center"></i>
                </a>
                <a 
                  href="https://github.com/pawan-raulo7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  <i className="ri-github-fill text-gray-700 w-5 h-5 flex items-center justify-center"></i>
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/images/Pawan.jpeg"
                alt="Pawan Raulo"
                className="w-full h-[650px] object-cover object-center rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

{/* Journey Highlights */}
<section className="py-20 bg-white">
  <div className="max-w-3xl mx-auto px-4">
    <div className="text-center mb-14">
      <h2 className="text-4xl font-light text-gray-900 mb-4">
        Journey Highlights
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Some of the experiences that have shaped my journey in technology,
        leadership, and innovation.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

      {/* Microsoft */}
      <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
        <img
          src="/images/microsoft.jpeg"
          alt="Microsoft Visit"
          className="max-w-full h-auto"
        />

        <div className="p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            Microsoft Office Visit
          </h3>

          <p className="text-gray-600 leading-7">
            Visited Microsoft's Hyderabad campus to experience its engineering
            culture, modern workplace, and innovation-driven environment while
            interacting with industry professionals.
          </p>
        </div>
      </div>

      {/* Alan Turing Club */}
      <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
        <img
          src="/images/club.jpeg"
          alt="Alan Turing Club"
          className="max-w-full h-auto"
        />

        <div className="p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            Alan Turing Club
          </h3>

          <p className="text-gray-600 leading-7">
            Served as General Secretary and Partnership Lead, organizing
            technical workshops, hackathons, speaker sessions, and community
            initiatives that empowered students through technology.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Experience & Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center">
            Experience & Achievements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-trophy-line text-indigo-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Hackathon Winner</h3>
              <p className="text-gray-600">Winner in competitive programming hackathons</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-building-line text-green-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Internship</h3>
              <p className="text-gray-600">• Developer Team lead - Bharat Economic Forum <br /> • Graphic Designer - Brizzo Digital</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-100">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-stock-line text-yellow-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Stock Market</h3>
              <p className="text-gray-600">3+ years of experience in stock market analysis and trading</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-folder-line text-purple-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Real Projects</h3>
              <p className="text-gray-600">10+ real-world projects across various domains</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-brain-line text-red-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Machine Learning</h3>
              <p className="text-gray-600">Advanced knowledge in ML algorithms and AI development</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-map-pin-line text-blue-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">Based in Hyderabad, India - Open for opportunities</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
