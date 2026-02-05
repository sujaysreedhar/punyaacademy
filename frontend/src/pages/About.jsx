import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Target, Lightbulb, Award } from 'lucide-react';

const About = () => {
  const differences = [
    'Value-based education',
    'Innovative teaching methods',
    'Safe and child-friendly infrastructure',
    'Focus on communication and confidence',
    'Personal attention and interactive learning'
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-[#4B1F73] mb-6 text-center">About Punya Academy</h1>
          <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
            Shaping tomorrow's leaders through quality education, strong values, and innovative learning
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1759143101324-d375443f1955"
                alt="Students at Punya Academy"
                className="rounded-2xl shadow-xl w-full h-[450px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-[#4B1F73]">Who We Are</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Punya Academy is a new-age school in Bangalore created with a mission to provide quality education while nurturing strong values, discipline, and innovative thinking. We believe every child deserves a supportive environment that builds academic excellence and life skills.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our dedicated team of experienced educators works tirelessly to create a learning atmosphere where children feel safe, valued, and motivated to explore their potential. We understand that each child is unique, and our approach is designed to cater to individual learning styles and needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-[#F4F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-[#4B1F73]">What Makes Us Different</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                At Punya Academy, we go beyond traditional teaching methods. Our holistic approach combines academic rigor with character development, ensuring students grow into well-rounded individuals.
              </p>
              <ul className="space-y-4">
                {differences.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-[#D81B60] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b"
                alt="School campus"
                className="rounded-2xl shadow-xl w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#4B1F73] mb-6">Our Commitment</h2>
            <p className="text-gray-700 text-xl leading-relaxed">
              We are committed to building a future-ready generation that is academically strong, emotionally balanced, and socially responsible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-purple-100 shadow-lg">
              <CardContent className="p-6 text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                    <Target className="w-8 h-8 text-[#D81B60]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#4B1F73]">Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  Striving for the highest standards in education and nurturing academic excellence in every student.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-100 shadow-lg">
              <CardContent className="p-6 text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                    <Lightbulb className="w-8 h-8 text-[#D81B60]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#4B1F73]">Innovation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Embracing modern teaching methods and technology to make learning engaging and effective.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-100 shadow-lg">
              <CardContent className="p-6 text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                    <Award className="w-8 h-8 text-[#D81B60]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#4B1F73]">Values</h3>
                <p className="text-gray-600 leading-relaxed">
                  Building strong moral character through discipline, respect, and ethical practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#4B1F73] to-[#D81B60] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl font-bold">Admissions Open for 2026–27</h2>
          <p className="text-xl">Join us in shaping your child's bright future. Limited seats available.</p>
          <Link to="/admissions">
            <Button className="bg-white text-[#D81B60] hover:bg-gray-100 text-lg px-10 py-6">
              Apply Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
