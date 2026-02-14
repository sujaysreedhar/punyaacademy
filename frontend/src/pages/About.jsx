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
                src="https://customer-assets.emergentagent.com/job_innovation-school/artifacts/8owqs8kb_About%20Us.png"
                alt="Students at Punya Academy"
                className="rounded-2xl shadow-xl w-full h-[450px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-[#4B1F73]">Who We Are</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Punya Academy is a new-age School of Innovation in Bengaluru, committed to quality education rooted in strong values, discipline, and innovative thinking. Our curriculum is designed for today's generation, nurturing curiosity through a blend of traditional values and new-age skills.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                With a dedicated team of experienced educators, we provide a safe, supportive, and inclusive environment that respects each child's individuality and helps them grow academically and personally.
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
                src="https://customer-assets.emergentagent.com/job_innovation-school/artifacts/vzi0cwdv_What%20Makes%20Us%20Different.png"
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
            <h2 className="text-4xl font-bold text-[#4B1F73] mb-6">Message from the Founder</h2>
          </div>

          <div className="bg-purple-50 border-l-4 border-[#D81B60] p-8 rounded-r-lg mb-12">
            <p className="text-gray-800 text-lg leading-relaxed mb-4">
              At Punya Academy, our vision is to create a school where learning goes beyond textbooks—where curiosity is encouraged, values are lived, and every child is empowered to grow with confidence. We believe education should prepare children not only for academic success, but also for life, leadership, and responsible citizenship.
            </p>
            <p className="text-gray-800 text-lg leading-relaxed mb-4">
              As a School of Innovation, Punya Academy blends strong traditional values with new-age skills, experiential learning, and a future-ready curriculum designed for today's generation. Our focus is on nurturing each child's unique potential in a safe, supportive, and inspiring environment.
            </p>
            <p className="text-gray-800 text-lg leading-relaxed mb-6">
              We look forward to growing together with parents and the community to nurture compassionate, capable, and curious learners ready to build a better tomorrow.
            </p>
            <p className="text-[#4B1F73] font-bold text-xl">- Jyothi C</p>
            <p className="text-gray-600 italic">Founder, Punya Academy</p>
          </div>

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
