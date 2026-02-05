// Mock data and functions for Punya Academy

export const mockContactSubmit = async (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Contact Form Submitted:', formData);
      resolve({ success: true, message: 'Thank you for contacting us! We will get back to you soon.' });
    }, 1000);
  });
};

export const mockAdmissionSubmit = async (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Admission Form Submitted:', formData);
      resolve({ success: true, message: 'Thank you for your admission enquiry! Our team will contact you within 24 hours.' });
    }, 1000);
  });
};

export const mockCampusVisitSubmit = async (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Campus Visit Request:', formData);
      resolve({ success: true, message: 'Your campus visit has been scheduled! We will confirm the date and time shortly.' });
    }, 1000);
  });
};

export const galleryImages = [
  {
    id: 1,
    category: 'Classrooms',
    url: 'https://images.unsplash.com/photo-1636202339022-7d67f7447e3a',
    alt: 'Modern classroom with engaged students'
  },
  {
    id: 2,
    category: 'Activities',
    url: 'https://images.unsplash.com/photo-1770096679844-57ca92c2b64b',
    alt: 'Children engaged in creative art activities'
  },
  {
    id: 3,
    category: 'Campus',
    url: 'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b',
    alt: 'School campus with modern infrastructure'
  },
  {
    id: 4,
    category: 'Activities',
    url: 'https://images.unsplash.com/photo-1588072432836-e10032774350',
    alt: 'Student focused on learning activities'
  },
  {
    id: 5,
    category: 'Events',
    url: 'https://images.unsplash.com/photo-1627764940620-90393d0e8c34',
    alt: 'Group outdoor activities and celebrations'
  },
  {
    id: 6,
    category: 'Classrooms',
    url: 'https://images.pexels.com/photos/8617938/pexels-photo-8617938.jpeg',
    alt: 'Vibrant classroom with engaged children'
  },
  {
    id: 7,
    category: 'Campus',
    url: 'https://images.unsplash.com/photo-1603958956194-cf9718dba4b1',
    alt: 'Modern school building exterior'
  },
  {
    id: 8,
    category: 'Activities',
    url: 'https://images.unsplash.com/photo-1610274672835-65a79c852f58',
    alt: 'Art and creative learning activities'
  },
  {
    id: 9,
    category: 'Events',
    url: 'https://images.pexels.com/photos/35573003/pexels-photo-35573003.jpeg',
    alt: 'School celebrations and events'
  },
  {
    id: 10,
    category: 'Classrooms',
    url: 'https://images.unsplash.com/photo-1759143101324-d375443f1955',
    alt: 'Happy children in school uniforms'
  },
  {
    id: 11,
    category: 'Activities',
    url: 'https://images.unsplash.com/photo-1637195141196-242c0079503b',
    alt: 'Children engaged in writing activities'
  },
  {
    id: 12,
    category: 'Campus',
    url: 'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b',
    alt: 'Safe and modern school campus'
  }
];
