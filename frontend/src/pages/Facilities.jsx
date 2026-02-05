import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
  School,
  Users,
  Video,
  Droplet,
  Waves,
  DoorOpen,
  HeartPulse,
  Shield,
  Building2,
  Sparkles
} from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      icon: <School className="w-10 h-10" />,
      title: 'Spacious & Ventilated Classrooms',
      description: 'Well-lit, airy classrooms designed for optimal learning with modern teaching aids and comfortable seating arrangements.'
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Child-Friendly Furniture',
      description: 'Age-appropriate furniture designed for comfort and safety, ensuring proper posture and ease of movement for young learners.'
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: 'Activity & Play Area',
      description: 'Dedicated spaces for recreational activities and play-based learning, promoting physical development and social interaction.'
    },
    {
      icon: <Video className="w-10 h-10" />,
      title: 'CCTV Surveillance',
      description: 'Comprehensive CCTV coverage throughout the campus for enhanced security and safety monitoring of all areas.'
    },
    {
      icon: <Droplet className="w-10 h-10" />,
      title: 'Clean Drinking Water',
      description: 'RO purified drinking water stations at multiple locations ensuring access to safe and healthy water at all times.'
    },
    {
      icon: <Waves className="w-10 h-10" />,
      title: 'Hygienic Washrooms',
      description: 'Well-maintained, child-friendly washrooms with proper ventilation and regular cleaning schedules.'
    },
    {
      icon: <DoorOpen className="w-10 h-10" />,
      title: 'Safe Entry & Exit',
      description: 'Controlled entry and exit points with staff supervision ensuring safe pick-up and drop-off procedures.'
    },
    {
      icon: <HeartPulse className="w-10 h-10" />,
      title: 'Dedicated Support Staff',
      description: 'Trained support staff available throughout the day to assist children and ensure their comfort and safety.'
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Clean & Healthy Environment',
      description: 'Regular sanitization and maintenance protocols to provide a hygienic learning environment for all students.'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-[#4B1F73] mb-6">Our Facilities</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Modern, safe, and child-friendly infrastructure designed to support holistic development
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="border-2 border-purple-100 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center text-[#D81B60]">
                      {facility.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-[#4B1F73] text-xl text-center">{facility.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-center">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Gallery */}
      <section className="py-16 bg-[#F4F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#4B1F73] text-center mb-12">Our Campus</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <img
              src="https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b"
              alt="School campus"
              className="rounded-2xl shadow-xl w-full h-80 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1603958956194-cf9718dba4b1"
              alt="School building"
              className="rounded-2xl shadow-xl w-full h-80 object-cover"
            />
            <img
              src="https://images.pexels.com/photos/8617938/pexels-photo-8617938.jpeg"
              alt="Classroom"
              className="rounded-2xl shadow-xl w-full h-80 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1636202339022-7d67f7447e3a"
              alt="Learning environment"
              className="rounded-2xl shadow-xl w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Safety & Hygiene Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1627764940620-90393d0e8c34"
                alt="Safety measures"
                className="rounded-2xl shadow-xl w-full h-[450px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-[#D81B60]" />
                </div>
                <h2 className="text-4xl font-bold text-[#4B1F73]">Safety & Hygiene</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                At Punya Academy, safety and hygiene are our top priorities. We have implemented comprehensive measures to ensure a secure and healthy environment for all our students.
              </p>
              <ul className="space-y-4">
                {[
                  '24/7 CCTV surveillance across all areas',
                  'Controlled entry and exit with visitor management',
                  'Regular sanitization and cleaning schedules',
                  'Fire safety equipment and emergency procedures',
                  'First aid facilities and trained staff',
                  'Strict health and hygiene protocols',
                  'Background-verified staff members',
                  'Parent communication for all activities'
                ].map((point, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-[#D81B60] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#4B1F73] to-[#D81B60] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl font-bold">Book a Campus Visit</h2>
          <p className="text-xl">Experience our world-class facilities firsthand. Schedule a campus tour today!</p>
          <Link to="/contact">
            <Button className="bg-white text-[#D81B60] hover:bg-gray-100 text-lg px-10 py-6">
              Schedule Visit
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
