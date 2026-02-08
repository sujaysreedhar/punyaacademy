import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { BookOpen, Users, Building2, Trophy, Heart, Shield, Star, Sparkles } from 'lucide-react';

const Home = () => {
  const whyChooseUs = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'High Standard Curriculum',
      description: 'Comprehensive curriculum designed for strong academic foundations'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Experienced Teachers',
      description: 'Caring and qualified educators dedicated to each child\'s growth'
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Child-Friendly Infrastructure',
      description: 'Modern facilities designed specifically for young learners'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Interactive Learning',
      description: 'STEM-based, activity-driven learning aligned with NEP, making education engaging and fun'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Personality Development',
      description: 'Focus on communication skills and overall personality growth'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Safe Campus',
      description: 'CCTV surveillance and strict safety protocols for peace of mind'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Values & Discipline',
      description: 'Strong emphasis on moral values and disciplined learning'
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Hygienic Facilities',
      description: 'Clean and well-maintained campus for healthy learning'
    }
  ];

  const facilities = [
    'Spacious Classrooms',
    'Activity & Play Area',
    'Child-Friendly Furniture',
    'CCTV Surveillance',
    'Hygienic Washrooms',
    'Clean Drinking Water',
    'Safe Entry & Exit',
    'Dedicated Support Staff'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-[#4B1F73] leading-tight">
                Welcome to <span className="text-[#D81B60]">Punya Academy</span>
              </h1>
              <p className="text-2xl font-semibold text-[#D81B60]">The School of Innovation</p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Punya Academy is a modern learning environment built to nurture curiosity, confidence, and strong academic foundations. We provide value-based education with innovative teaching methods, ensuring every child grows with knowledge, discipline, creativity, and communication skills.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/admissions">
                  <Button className="bg-[#D81B60] hover:bg-[#c01850] text-white text-lg px-8 py-6">
                    Apply for Admission
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-2 border-[#4B1F73] text-[#4B1F73] hover:bg-[#4B1F73] hover:text-white text-lg px-8 py-6">
                    Book a Campus Visit
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8617938/pexels-photo-8617938.jpeg"
                alt="Happy children learning at Punya Academy"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b"
                alt="Punya Academy Campus"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-[#4B1F73]">A School Built for Tomorrow's Learners</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                At Punya Academy, we believe education is not just about marks, but about shaping a child's personality, mindset, and values. Our approach blends structured academics with activity-based learning and strong moral discipline.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Located in Mangammanapalya, conveniently close to HSR Layout, ITI Layout, and Garvebhavipalya, Bengaluru, our campus offers a safe, secure, and child-friendly environment designed to support a child's holistic development.
              </p>
              <Link to="/about">
                <Button className="bg-[#4B1F73] hover:bg-[#3a1858] text-white">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-[#F4F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#4B1F73] mb-4">Why Parents Choose Us</h2>
            <p className="text-gray-600 text-lg">Committed to excellence in every aspect of education</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-[#D81B60]">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-[#4B1F73] text-lg">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#4B1F73] mb-4">Our Programs</h2>
            <p className="text-gray-600 text-lg">Tailored education for every stage of early learning</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-purple-100 shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-[#D81B60]" />
                </div>
                <h3 className="text-2xl font-bold text-[#4B1F73]">Pre-Primary Program</h3>
                <p className="text-gray-600 text-sm font-medium">(Nursery, LKG, UKG)</p>
                <p className="text-gray-700 leading-relaxed">
                  A joyful, play-based learning program designed to develop early literacy, confidence, social skills, and creativity through engaging activities.
                </p>
                <Link to="/programs">
                  <Button variant="outline" className="border-[#4B1F73] text-[#4B1F73] hover:bg-[#4B1F73] hover:text-white">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="border-2 border-purple-100 shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-[#D81B60]" />
                </div>
                <h3 className="text-2xl font-bold text-[#4B1F73]">Regular Program</h3>
                <p className="text-gray-600 text-sm font-medium">(Grade 1-10)</p>
                <p className="text-gray-700 leading-relaxed">
                  A structured academic program focused on strong subject foundations, communication development, and real-world learning experiences.
                </p>
                <Link to="/programs">
                  <Button variant="outline" className="border-[#4B1F73] text-[#4B1F73] hover:bg-[#4B1F73] hover:text-white">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Admissions Banner */}
      <section className="py-16 bg-gradient-to-r from-[#4B1F73] to-[#D81B60] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">Admissions Open for 2026–27</h2>
          <p className="text-xl">Limited seats available. Enquire today to begin your child's journey with Punya Academy.</p>
          <Link to="/admissions">
            <Button className="bg-white text-[#D81B60] hover:bg-gray-100 text-lg px-10 py-6">
              Apply Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Facilities Preview */}
      <section className="py-16 bg-[#F4F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#4B1F73] mb-4">Facilities Designed for Growth</h2>
            <p className="text-gray-600 text-lg">Safe, modern, and child-friendly infrastructure</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-[#D81B60]" />
                </div>
                <p className="text-[#4B1F73] font-semibold">{facility}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/facilities">
              <Button className="bg-[#D81B60] hover:bg-[#c01850] text-white">
                View All Facilities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#4B1F73] mb-4">Campus & Classroom Moments</h2>
            <p className="text-gray-600 text-lg">Glimpses of learning and joy at Punya Academy</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <img
              src="https://images.unsplash.com/photo-1636202339022-7d67f7447e3a"
              alt="Classroom activity"
              className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform"
            />
            <img
              src="https://images.unsplash.com/photo-1770096679844-57ca92c2b64b"
              alt="Creative activities"
              className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform"
            />
            <img
              src="https://images.unsplash.com/photo-1627764940620-90393d0e8c34"
              alt="Outdoor activities"
              className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform"
            />
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350"
              alt="Focused learning"
              className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform"
            />
            <img
              src="https://images.pexels.com/photos/8617938/pexels-photo-8617938.jpeg"
              alt="Happy students"
              className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform"
            />
            <img
              src="https://images.unsplash.com/photo-1603958956194-cf9718dba4b1"
              alt="School building"
              className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform"
            />
          </div>
          <div className="text-center">
            <Link to="/gallery">
              <Button className="bg-[#4B1F73] hover:bg-[#3a1858] text-white">
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl font-bold text-[#4B1F73]">Visit Our Campus</h2>
          <p className="text-gray-700 text-lg">
            Come experience our learning environment and meet our educators. See firsthand how Punya Academy nurtures young minds.
          </p>
          <Link to="/contact">
            <Button className="bg-[#D81B60] hover:bg-[#c01850] text-white text-lg px-10 py-6">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
