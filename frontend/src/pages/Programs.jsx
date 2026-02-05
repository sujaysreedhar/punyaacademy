import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Heart, BookOpen, Star, Users, Brain, MessageCircle, Trophy, Target } from 'lucide-react';

const Programs = () => {
  const prePrimaryBenefits = [
    { icon: <Star className="w-6 h-6" />, text: 'Motor skill development' },
    { icon: <MessageCircle className="w-6 h-6" />, text: 'Communication improvement' },
    { icon: <BookOpen className="w-6 h-6" />, text: 'Early literacy & numeracy' },
    { icon: <Users className="w-6 h-6" />, text: 'Social behavior & teamwork' },
    { icon: <Heart className="w-6 h-6" />, text: 'Confidence building' }
  ];

  const primaryBenefits = [
    { icon: <BookOpen className="w-6 h-6" />, text: 'Strong reading & writing skills' },
    { icon: <Brain className="w-6 h-6" />, text: 'Mathematics foundations' },
    { icon: <Target className="w-6 h-6" />, text: 'Logical thinking development' },
    { icon: <Star className="w-6 h-6" />, text: 'Personality development' },
    { icon: <MessageCircle className="w-6 h-6" />, text: 'Public speaking confidence' },
    { icon: <Trophy className="w-6 h-6" />, text: 'Discipline and responsibility' }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-[#4B1F73] mb-6">Our Learning Programs</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Tailored educational experiences for every stage of your child's early development
          </p>
        </div>
      </section>

      {/* Pre-Primary Program */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1610274672835-65a79c852f58"
                alt="Pre-primary learning activities"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-8 h-8 text-[#D81B60]" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-[#4B1F73]">Pre-Primary Program</h2>
                  <p className="text-[#D81B60] font-semibold text-lg">Nursery, LKG, UKG</p>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-[#D81B60] p-6 rounded-r-lg">
                <p className="text-gray-800 text-lg leading-relaxed">
                  A joyful, play-based learning program designed to develop early literacy, confidence, social skills, and creativity through engaging activities.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#4B1F73] mb-4">Program Highlights</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our pre-primary program is designed for joyful learning. Children learn through storytelling, play-based activities, music, movement, art, and interactive classroom learning. We create a nurturing environment where young minds can explore, discover, and grow.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#4B1F73] mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {prePrimaryBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-[#D81B60] flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <span className="text-gray-700 font-medium">{benefit.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/admissions">
                <Button className="bg-[#D81B60] hover:bg-[#c01850] text-white">
                  Apply for Pre-Primary
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Program */}
      <section className="py-16 bg-[#F4F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-8 h-8 text-[#D81B60]" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-[#4B1F73]">Primary Program</h2>
                  <p className="text-[#D81B60] font-semibold text-lg">Grades 1-5</p>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-[#D81B60] p-6 rounded-r-lg">
                <p className="text-gray-800 text-lg leading-relaxed">
                  A structured academic program focused on strong subject foundations, communication development, and real-world learning experiences.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#4B1F73] mb-4">Program Highlights</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our primary program focuses on structured learning and strong academic foundations, along with communication and leadership development. We prepare students for higher education while ensuring they develop as confident, well-rounded individuals.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#4B1F73] mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {primaryBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-[#D81B60] flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <span className="text-gray-700 font-medium">{benefit.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/admissions">
                <Button className="bg-[#D81B60] hover:bg-[#c01850] text-white">
                  Apply for Primary
                </Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1636202339022-7d67f7447e3a"
                alt="Primary education"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#4B1F73] text-center mb-12">Choose the Right Program</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-purple-200 shadow-xl">
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-10 h-10 text-[#D81B60]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#4B1F73] mb-2">Pre-Primary</h3>
                  <p className="text-gray-600">Ages 3-6 years</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#D81B60] mt-1">•</span>
                    <span className="text-gray-700">Play-based learning approach</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#D81B60] mt-1">•</span>
                    <span className="text-gray-700">Focus on social and motor skills</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#D81B60] mt-1">•</span>
                    <span className="text-gray-700">Introduction to letters and numbers</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#D81B60] mt-1">•</span>
                    <span className="text-gray-700">Creative activities and storytelling</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 shadow-xl">
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-10 h-10 text-[#D81B60]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#4B1F73] mb-2">Primary</h3>
                  <p className="text-gray-600">Ages 6-11 years</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#D81B60] mt-1">•</span>
                    <span className="text-gray-700">Structured academic curriculum</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#D81B60] mt-1">•</span>
                    <span className="text-gray-700">Subject-specific learning</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#D81B60] mt-1">•</span>
                    <span className="text-gray-700">Communication and leadership skills</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#D81B60] mt-1">•</span>
                    <span className="text-gray-700">Project-based learning activities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#4B1F73] to-[#D81B60] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl font-bold">Enroll Your Child Today</h2>
          <p className="text-xl">Limited seats available for 2026–27. Secure your child's spot in our innovative programs.</p>
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

export default Programs;
