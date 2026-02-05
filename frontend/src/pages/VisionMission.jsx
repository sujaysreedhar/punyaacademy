import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Eye, Target, Heart, Lightbulb, Award, Shield, Users, TrendingUp } from 'lucide-react';

const VisionMission = () => {
  const coreValues = [
    { icon: <Award className="w-8 h-8" />, title: 'Excellence', description: 'Commitment to the highest standards in education' },
    { icon: <Lightbulb className="w-8 h-8" />, title: 'Innovation', description: 'Embracing modern teaching and creative thinking' },
    { icon: <Shield className="w-8 h-8" />, title: 'Discipline', description: 'Building structured habits and responsibility' },
    { icon: <Heart className="w-8 h-8" />, title: 'Integrity', description: 'Fostering honesty and ethical behavior' },
    { icon: <Shield className="w-8 h-8" />, title: 'Safety', description: 'Ensuring a secure environment for every child' },
    { icon: <Users className="w-8 h-8" />, title: 'Respect', description: 'Valuing diversity and treating everyone with dignity' },
    { icon: <TrendingUp className="w-8 h-8" />, title: 'Leadership', description: 'Developing confidence and decision-making skills' },
    { icon: <Target className="w-8 h-8" />, title: 'Holistic Growth', description: 'Nurturing mind, body, and character equally' }
  ];

  const missionPoints = [
    'To provide a safe and supportive environment for every child',
    'To develop academic excellence with modern teaching practices',
    'To build confidence and communication skills',
    'To encourage creativity, curiosity, and independent thinking',
    'To support holistic development through activities and life skills',
    'To build discipline and moral values'
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-[#4B1F73] mb-6">Vision & Mission</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our guiding principles that shape every aspect of education at Punya Academy
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1603958956194-cf9718dba4b1"
                alt="Vision for future"
                className="rounded-2xl shadow-xl w-full h-[450px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-8 h-8 text-[#D81B60]" />
                </div>
                <h2 className="text-4xl font-bold text-[#4B1F73]">Our Vision</h2>
              </div>
              <div className="bg-purple-50 border-l-4 border-[#D81B60] p-6 rounded-r-lg">
                <p className="text-2xl text-gray-800 font-semibold leading-relaxed">
                  To create a future-ready generation through innovative learning, strong values, and quality education.
                </p>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                We envision a world where every child from Punya Academy emerges as a confident, knowledgeable, and compassionate individual, ready to contribute positively to society. Our vision extends beyond academic achievement to encompass character building, creative thinking, and social responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-[#F4F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Target className="w-8 h-8 text-[#D81B60]" />
                </div>
                <h2 className="text-4xl font-bold text-[#4B1F73]">Our Mission</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our mission is to deliver educational excellence through a comprehensive approach that balances academic rigor with values, creativity, and practical life skills.
              </p>
              <ul className="space-y-4">
                {missionPoints.map((point, index) => (
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
            <div>
              <img
                src="https://images.unsplash.com/photo-1770096679844-57ca92c2b64b"
                alt="Mission in action"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#4B1F73] mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg">The foundation of everything we do at Punya Academy</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <Card key={index} className="border-2 border-purple-100 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-[#D81B60]">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-[#4B1F73] text-xl">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-[#4B1F73] to-[#D81B60] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl font-bold">Admissions Open for 2026–27</h2>
          <p className="text-xl">Be part of a school that values excellence, innovation, and character building.</p>
          <Link to="/admissions">
            <Button className="bg-white text-[#D81B60] hover:bg-gray-100 text-lg px-10 py-6">
              Apply for Admission
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default VisionMission;
