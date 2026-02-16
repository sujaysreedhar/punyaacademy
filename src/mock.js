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
    url: 'https://customer-assets.emergentagent.com/job_innovation-school/artifacts/0x5b65p2_Class%20Room%201.png',
    alt: 'Modern classroom with engaged students'
  },
  {
    id: 2,
    category: 'Activities',
    url: 'https://customer-assets.emergentagent.com/job_innovation-school/artifacts/uax3zzqo_Activities%201.png',
    alt: 'Children engaged in creative art activities'
  },
  {
    id: 3,
    category: 'Campus',
    url: 'https://customer-assets.emergentagent.com/job_innovation-school/artifacts/zkq7bf71_Our%20Campus%201.png',
    alt: 'School campus with modern infrastructure'
  },
  {
    id: 4,
    category: 'Activities',
    url: 'https://customer-assets.emergentagent.com/job_innovation-school/artifacts/amhwuh5v_Activities%202.png',
    alt: 'Student focused on learning activities'
  },
  {
    id: 5,
    category: 'Events',
    url: 'https://customer-assets.emergentagent.com/job_innovation-school/artifacts/rp9hce2l_Event%201.png',
    alt: 'Group outdoor activities and celebrations'
  },
  {
    id: 6,
    category: 'Classrooms',
    url: 'https://customer-assets.emergentagent.com/job_innovation-school/artifacts/r6ax72cb_Classroom%202.png',
    alt: 'Vibrant classroom with engaged children'
  },
  {
    id: 7,
    category: 'Campus',
    url: 'https://customer-assets.emergentagent.com/job_innovation-school/artifacts/ycbux3yk_Our%20Campus%202.png',
    alt: 'Modern school building exterior'
  },
  {
    id: 8,
    category: 'Activities',
    url: 'https://customer-assets.emergentagent.com/job_innovation-school/artifacts/z7u0buis_Activities%205.png',
    alt: 'Art and creative learning activities'
  },
  {
    id: 9,
    category: 'Events',
    url: 'https://customer-assets.emergentagent.com/job_innovation-school/artifacts/09w3fqyt_Event%204.png',
    alt: 'School celebrations and events'
  },
  {
    id: 10,
    category: 'Classrooms',
    url: 'https://customer-assets.emergentagent.com/job_innovation-school/artifacts/bwfeowh2_Classroom%203.png',
    alt: 'Happy children in school uniforms'
  },
  {
    id: 11,
    category: 'Events',
    url: 'https://customer-assets.emergentagent.com/job_innovation-school/artifacts/nk3f0pq2_EVent%205.png',
    alt: 'School events and celebrations'
  },
  {
    id: 12,
    category: 'Campus',
    url: 'https://customer-assets.emergentagent.com/job_innovation-school/artifacts/qeoi33dy_Our%20Campus%204.png',
    alt: 'Safe and modern school campus'
  }
];
