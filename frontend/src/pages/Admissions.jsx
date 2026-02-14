import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { mockAdmissionSubmit } from '../mock';
import { toast } from 'sonner';
import { CheckCircle2, FileText, Calendar, CreditCard, ClipboardCheck } from 'lucide-react';

const Admissions = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    grade: '',
    phone: '',
    email: '',
    address: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await mockAdmissionSubmit(formData);
      toast.success(response.message);
      setFormData({
        parentName: '',
        childName: '',
        grade: '',
        phone: '',
        email: '',
        address: '',
        message: ''
      });
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const admissionSteps = [
    { icon: <FileText className="w-8 h-8" />, title: 'Submit Enquiry', description: 'Fill out the admission form or contact us' },
    { icon: <Calendar className="w-8 h-8" />, title: 'Schedule Visit', description: 'Book a campus tour at your convenience' },
    { icon: <ClipboardCheck className="w-8 h-8" />, title: 'Meet Coordinator', description: 'Understand our programs and curriculum' },
    { icon: <FileText className="w-8 h-8" />, title: 'Submit Documents', description: 'Provide required documents for enrollment' },
    { icon: <CheckCircle2 className="w-8 h-8" />, title: 'Confirm Seat', description: 'Check seat availability for your grade' },
    { icon: <CreditCard className="w-8 h-8" />, title: 'Complete Enrollment', description: 'Pay admission fee and finalize admission' }
  ];

  const requiredDocuments = [
    'Birth Certificate (Original + Photocopy)',
    'Passport size photographs (4 copies)',
    'Parent ID proof - Aadhar/PAN (Photocopy)',
    'Address proof (Photocopy)',
    'Previous school report card (if applicable)'
  ];

  const eligibilityCriteria = [
    { grade: 'Nursery', age: '3 years as of June 1st' },
    { grade: 'LKG', age: '4 years as of June 1st' },
    { grade: 'UKG', age: '5 years as of June 1st' },
    { grade: 'Grade 1', age: '6 years as of June 1st' },
    { grade: 'Grades 2-5', age: 'As per previous grade completion' }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-[#4B1F73] mb-6">Admissions Open 2026–27</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Join Punya Academy and provide your child with quality education focused on both academic excellence and holistic development.
          </p>
          <div className="inline-block bg-[#D81B60] text-white px-6 py-3 rounded-lg font-semibold text-lg">
            Limited Seats Available - Apply Now!
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#4B1F73] text-center mb-12">Admission Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {admissionSteps.map((step, index) => (
              <Card key={index} className="border-2 border-purple-100 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-[#D81B60]">
                      {step.icon}
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#D81B60] text-white flex items-center justify-center mx-auto font-bold text-lg">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-[#4B1F73] text-lg">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 bg-[#F4F4F6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#4B1F73] text-center mb-12">Eligibility Criteria</h2>
          <Card className="border-2 border-purple-100 shadow-xl">
            <CardContent className="p-8">
              <div className="space-y-4">
                {eligibilityCriteria.map((criteria, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-white rounded-lg border border-purple-100">
                    <span className="font-bold text-[#4B1F73] text-lg">{criteria.grade}</span>
                    <span className="text-gray-700">{criteria.age}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-[#4B1F73] mb-6">Documents Required</h2>
              <ul className="space-y-4">
                {requiredDocuments.map((doc, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-[#D81B60] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="https://customer-assets.emergentagent.com/job_innovation-school/artifacts/6ab6akwv_Documents%20Required.png"
                alt="Student learning"
                className="rounded-2xl shadow-xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-[#F4F4F6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#4B1F73] mb-6">Fee Structure</h2>
          <Card className="border-2 border-purple-100 shadow-xl">
            <CardContent className="p-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our fee structure is designed to be transparent and competitive. Detailed information about admission fees, tuition fees, and other charges will be shared during the admission consultation and campus visit.
              </p>
              <p className="text-[#4B1F73] font-semibold text-lg">
                For detailed fee information, please contact our admission office or schedule a campus visit.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Admission Form */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#4B1F73] text-center mb-12">Admission Enquiry Form</h2>
          <Card className="border-2 border-purple-100 shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="parentName">Parent Name *</Label>
                    <Input
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      required
                      placeholder="Enter parent name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="childName">Child Name *</Label>
                    <Input
                      id="childName"
                      name="childName"
                      value={formData.childName}
                      onChange={handleChange}
                      required
                      placeholder="Enter child name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="grade">Grade Interested *</Label>
                  <Select value={formData.grade} onValueChange={(value) => setFormData({ ...formData, grade: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select grade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nursery">Nursery</SelectItem>
                      <SelectItem value="lkg">LKG</SelectItem>
                      <SelectItem value="ukg">UKG</SelectItem>
                      <SelectItem value="grade1">Grade 1</SelectItem>
                      <SelectItem value="grade2">Grade 2</SelectItem>
                      <SelectItem value="grade3">Grade 3</SelectItem>
                      <SelectItem value="grade4">Grade 4</SelectItem>
                      <SelectItem value="grade5">Grade 5</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 XXXXXXXXXX"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address *</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="Enter your address"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any questions or special requirements?"
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#D81B60] hover:bg-[#c01850] text-white text-lg py-6"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-[#4B1F73] to-[#D81B60] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl font-bold">Have Questions?</h2>
          <p className="text-xl">Our admission team is here to help. Contact us or schedule a campus visit today!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-white text-[#D81B60] hover:bg-gray-100 text-lg px-10 py-6">
                Contact Us
              </Button>
            </Link>
            <a href="tel:+91XXXXXXXXXX">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#D81B60] text-lg px-10 py-6">
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
