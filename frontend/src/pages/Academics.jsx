import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { BookOpen, Lightbulb, Users, Target, Brain, MessageCircle, Globe, Palette } from 'lucide-react';

const Academics = () => {
  const focusAreas = [
    { icon: <BookOpen className="w-6 h-6" />, title: 'English Language Development' },
    { icon: <Brain className="w-6 h-6" />, title: 'Mathematics & Logical Thinking' },
    { icon: <Globe className="w-6 h-6" />, title: 'Environmental Studies' },
    { icon: <Lightbulb className="w-6 h-6" />, title: 'Science & Exploration Activities' },
    { icon: <Target className="w-6 h-6" />, title: 'STEM' },
    { icon: <BookOpen className="w-6 h-6" />, title: 'Reading & Storytelling' },
    { icon: <Palette className="w-6 h-6" />, title: 'Art & Craft' },
    { icon: <Target className="w-6 h-6" />, title: 'General Knowledge' },
    { icon: <MessageCircle className="w-6 h-6" />, title: 'Communication & Public Speaking' },
    { icon: <Users className="w-6 h-6" />, title: 'Physical Education' }
  ];

  const methodology = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Activity-Based Learning',
      description: 'Hands-on activities that make learning engaging and memorable'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Visual Learning Tools',
      description: 'Charts, models, and multimedia to enhance understanding'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Group Learning & Discussions',
      description: 'Collaborative learning that builds teamwork and communication'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Project-Based Learning',
      description: 'Real-world projects that develop critical thinking'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Practical Assessments',
      description: 'Continuous evaluation through activities and observations'
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Student-Centered Approach',
      description: 'Personalized attention to each child\'s learning pace'
    }
  ];

  const outcomes = [
    'Improved confidence and self-esteem',
    'Better communication and expression skills',
    'Strong subject foundation across all areas',
    'Development of discipline and good habits',
    'Enhanced creativity and curiosity',
    'Problem-solving and critical thinking abilities'
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-[#4B1F73] mb-6">Academics at Punya Academy</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A comprehensive curriculum designed to build strong foundations and foster lifelong learning
          </p>
        </div>
      </section>

      {/* Academic Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/8617938/pexels-photo-8617938.jpeg"
                alt="Academic excellence"
                className="rounded-2xl shadow-xl w-full h-[450px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-[#4B1F73]">Our Academic Approach</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                As a School of Innovation, our academic approach blends strong foundations in language, numeracy, and general awareness with STEM-based, experiential learning. We focus on nurturing curiosity, creativity, critical thinking, and communication skills that are essential for today's learners.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our balanced model integrates structured academics with hands-on exploration and innovation-driven activities, making learning meaningful, engaging, and enjoyable.
              </p>
              <div className="bg-purple-50 border-l-4 border-[#D81B60] p-6 rounded-r-lg">
                <p className="text-gray-800 font-semibold">
                  "Education is not the filling of a pail, but the lighting of a fire." - This philosophy guides our academic programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-16 bg-[#F4F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#4B1F73] mb-4">Key Focus Areas</h2>
            <p className="text-gray-600 text-lg">Comprehensive subjects that build well-rounded students</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {focusAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-[#D81B60] flex-shrink-0">
                    {area.icon}
                  </div>
                  <h3 className="font-semibold text-[#4B1F73]">{area.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#4B1F73] mb-4">Teaching Methodology</h2>
            <p className="text-gray-600 text-lg">Modern, effective approaches that make learning engaging</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodology.map((method, index) => (
              <Card key={index} className="border-2 border-purple-100 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-[#D81B60]">
                      {method.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-[#4B1F73] text-lg text-center">{method.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 bg-[#F4F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-[#4B1F73]">Learning Outcomes</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our academic programs are designed to produce measurable outcomes that prepare students for future success. We focus on developing the whole child, not just academic knowledge.
              </p>
              <ul className="space-y-4">
                {outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-[#D81B60] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg font-medium">{outcome}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link to="/programs">
                  <Button className="bg-[#4B1F73] hover:bg-[#3a1858] text-white">
                    Explore Our Programs
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1637195141196-242c0079503b"
                alt="Learning outcomes"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#4B1F73] to-[#D81B60] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl font-bold">Ready to Explore Our Academic Programs?</h2>
          <p className="text-xl">Discover how Punya Academy can help your child achieve academic excellence.</p>
          <Link to="/admissions">
            <Button className="bg-white text-[#D81B60] hover:bg-gray-100 text-lg px-10 py-6">
              Admissions Open
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Academics;
